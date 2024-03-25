import {
  Form as HookForm,
  FieldValues,
  FormProviderProps,
  FormProps as HookFormProps,
  ControllerProps,
  FieldPath,
  useFormContext as useHookFormContext,
  useForm as useHookForm,
  useFormState,
  useWatch,
  useFieldArray,
  UseFormProps as UseHookFormProps,
  UseFormReturn as UseHookFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z, type ZodSchema } from 'zod';
import React, { ReactElement } from 'react';
import {
  Form as FormProvider,
  FormField as UiFormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  useFormField,
} from '../ui/form';
import { cn } from '../utils';

export { useFormState, useWatch, useFieldArray, useFormField };

export type UseFormProps<
  TFieldValues extends TSchema extends ZodSchema
    ? z.infer<TSchema>
    : FieldValues,
  TContext = any,
  TSchema extends ZodSchema | undefined = undefined,
> = UseHookFormProps<TFieldValues, TContext> & {
  schema?: TSchema;
};

export interface UseFormReturn<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
> extends UseHookFormReturn<TFieldValues, TContext, TTransformedValues> {
  Field: React.FunctionComponent<
    FormFieldProps<TFieldValues, FieldPath<TFieldValues>>
  >;
}

export function useForm<
  TFieldValues extends TSchema extends ZodSchema
    ? z.infer<TSchema>
    : FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
  TSchema extends ZodSchema | undefined = undefined,
>(
  props?: UseFormProps<TFieldValues, TContext, TSchema>,
): UseFormReturn<TFieldValues, TContext, TTransformedValues> {
  const schema = props?.schema;

  return Object.assign(
    useHookForm({
      resolver: schema ? zodResolver(schema) : undefined,
      ...props,
    }),
    {
      Field: FormField,
    },
  );
}

export const useFormContext: <
  TFieldValues extends FieldValues,
  TContext = any,
  TransformedValues extends FieldValues | undefined = undefined,
>() => UseFormReturn<TFieldValues, TContext, TransformedValues> =
  useHookFormContext as any;

export interface FormProps<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
> extends Omit<
      FormProviderProps<TFieldValues, TContext, TTransformedValues>,
      'children'
    >,
    Omit<HookFormProps<TFieldValues, TTransformedValues>, 'control'> {
  /**
   * @default 'top'
   */
  labelPosition?: 'top' | 'left';
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
}

export function Form<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
  TTransformedValues extends FieldValues | undefined = undefined,
>(props: FormProps<TFieldValues, TContext, TTransformedValues>) {
  const {
    labelPosition = 'top',
    labelClassName,
    labelStyle,
    watch,
    getValues,
    getFieldState,
    setError,
    clearErrors,
    setValue,
    trigger,
    formState,
    resetField,
    reset,
    handleSubmit,
    unregister,
    control,
    register,
    setFocus,
    className,
    // @ts-ignore
    Field,
    ...restProps
  } = props;

  return (
    <FormProvider<TFieldValues, TContext, TTransformedValues>
      watch={watch}
      getValues={getValues}
      getFieldState={getFieldState}
      setError={setError}
      clearErrors={clearErrors}
      setValue={setValue}
      trigger={trigger}
      formState={formState}
      resetField={resetField}
      reset={reset}
      handleSubmit={handleSubmit}
      unregister={unregister}
      control={control}
      register={register}
      setFocus={setFocus}
      {...{ labelPosition, labelClassName, labelStyle, Field }}
    >
      <HookForm
        {...restProps}
        className={cn(className, 'sr-group sr-form sr-space-y-6')}
        data-label-pos={labelPosition}
      />
    </FormProvider>
  );
}

export interface FormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<ControllerProps<TFieldValues, TName>, 'control' | 'render'> {
  label?: React.ReactNode;
  desc?: React.ReactNode;
  children?: ReactElement | ControllerProps<TFieldValues, TName>['render'];
}

function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(props: FormFieldProps<TFieldValues, TName>) {
  const { labelPosition, labelClassName, labelStyle, control } =
    useFormContext<TFieldValues>() as FormProps<TFieldValues>;

  const { label, desc, children, ...restProps } = props;

  return (
    <UiFormField
      {...restProps}
      control={control}
      render={renderProps => {
        if (!children) {
          return <></>;
        }

        // custom render function
        if (typeof children === 'function') {
          return children(renderProps);
        }

        const controlEl = (
          <div className="sr-flex-auto sr-space-y-2 sr-relative">
            <FormControl>
              {React.cloneElement(children, {
                ...children.props,
                ...renderProps.field,
                __sr_form__: '1',
              })}
            </FormControl>
            {desc != null && <FormDescription>{desc}</FormDescription>}
            <FormMessage />
          </div>
        );

        if (labelPosition === 'left') {
          return (
            <FormItem
              data-label-pos="left"
              className="sr-flex sr-items-start data-[label-pos=left]:sr-space-y-0 sr-gap-x-4"
            >
              <FormLabel
                className={cn(
                  labelClassName,
                  'sr-min-h-9 sr-shrink-0 sr-flex sr-flex-wrap sr-items-center',
                )}
                style={labelStyle}
              >
                {label}
              </FormLabel>
              {controlEl}
            </FormItem>
          );
        }

        return (
          <FormItem>
            {label != null && (
              <FormLabel
                className={cn(
                  labelClassName,
                  'sr-min-h-5 sr-shrink-0 sr-flex sr-items-center',
                )}
                style={labelStyle}
              >
                {label}
              </FormLabel>
            )}
            {controlEl}
          </FormItem>
        );
      }}
    />
  );
}

export interface FormSlotProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
}

function FormSlot(props: FormSlotProps) {
  const { labelPosition, labelClassName, labelStyle } =
    useFormContext() as FormProps;
  const { label, children } = props;

  if (labelPosition === 'left') {
    return (
      <div data-label-pos="left" className="sr-flex sr-gap-x-4">
        <FormLabel
          className={cn(
            labelClassName,
            'sr-min-h-9 sr-shrink-0 sr-flex sr-flex-wrap sr-items-center',
          )}
          style={labelStyle}
        >
          {label}
        </FormLabel>
        {children}
      </div>
    );
  }

  return (
    <div className="sr-space-y-2">
      {label != null && (
        <FormLabel
          className={cn(
            labelClassName,
            'sr-min-h-5 sr-shrink-0 sr-flex sr-items-center',
          )}
          style={labelStyle}
        >
          {label}
        </FormLabel>
      )}
      {children}
    </div>
  );
}

Form.Field = FormField;
Form.Item = FormItem;
Form.Label = FormLabel;
Form.Control = FormControl;
Form.Description = FormDescription;
Form.Message = FormMessage;
Form.Slot = FormSlot;
