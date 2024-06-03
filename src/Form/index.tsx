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
  TSchema extends ZodSchema,
  TContext = any,
> = UseHookFormProps<z.infer<TSchema>, TContext> & {
  schema: TSchema;
};

export interface UseFormReturn<
  TSchema extends ZodSchema,
  TContext = any,
  TTransformedValues extends FieldValues = z.infer<TSchema>,
> extends UseHookFormReturn<z.infer<TSchema>, TContext, TTransformedValues> {
  Field: React.FunctionComponent<
    FormFieldProps<TSchema, FieldPath<z.infer<TSchema>>>
  >;
}

export function useForm<
  TSchema extends ZodSchema,
  TContext = any,
  TTransformedValues extends FieldValues = z.infer<TSchema>,
>(
  props: UseFormProps<TSchema, TContext>,
): UseFormReturn<TSchema, TContext, TTransformedValues> {
  return Object.assign(
    useHookForm({
      resolver: zodResolver(props.schema),
      ...props,
    }),
    {
      Field: FormField,
    },
  );
}

export const useFormContext: <
  TSchema extends ZodSchema,
  TContext = any,
  TTransformedValues extends FieldValues = z.infer<TSchema>,
>() => UseFormReturn<TSchema, TContext, TTransformedValues> =
  useHookFormContext as any;

export interface FormProps<
  TSchema extends ZodSchema,
  TContext = any,
  TTransformedValues extends FieldValues = z.infer<TSchema>,
> extends Omit<
      FormProviderProps<z.infer<TSchema>, TContext, TTransformedValues>,
      'children'
    >,
    Omit<HookFormProps<z.infer<TSchema>, TTransformedValues>, 'control'> {
  /**
   * @default 'top'
   */
  labelPosition?: 'top' | 'left';
  labelClassName?: string;
  labelStyle?: React.CSSProperties;
}

export function Form<
  TSchema extends ZodSchema,
  TContext = any,
  TTransformedValues extends FieldValues = z.infer<TSchema>,
>(props: FormProps<TSchema, TContext, TTransformedValues>) {
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
    <FormProvider<z.infer<TSchema>, TContext, TTransformedValues>
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
  TSchema extends ZodSchema,
  TName extends FieldPath<z.infer<TSchema>> = FieldPath<z.infer<TSchema>>,
> extends Omit<ControllerProps<z.infer<TSchema>, TName>, 'control' | 'render'> {
  label?: React.ReactNode;
  desc?: React.ReactNode;
  children?: ReactElement | ControllerProps<z.infer<TSchema>, TName>['render'];
}

function FormField<
  TSchema extends ZodSchema,
  TName extends FieldPath<z.infer<TSchema>> = FieldPath<z.infer<TSchema>>,
>(props: FormFieldProps<TSchema, TName>) {
  const { labelPosition, labelClassName, labelStyle, control } =
    useFormContext<TSchema>() as FormProps<TSchema>;

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
    useFormContext() as FormProps<any>;
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
