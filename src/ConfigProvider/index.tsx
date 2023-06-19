import { createContext, useContext } from 'react';

export interface ShadcnConfig {
  /**
   * The language read direction.
   */
  dir?: 'ltr' | 'rtl';
}

export interface ConfigProviderProps extends Partial<ShadcnConfig> {
  children?: React.ReactNode;
}

const DEFAULT_CONTEXT: ShadcnConfig = {};

const configContext = createContext<ShadcnConfig>(DEFAULT_CONTEXT);

export function ConfigProvider(props: ConfigProviderProps) {
  const { children, ...restProps } = props;

  return (
    <configContext.Provider value={{ ...DEFAULT_CONTEXT, ...restProps }}>
      {children}
    </configContext.Provider>
  );
}

export const useConfig = () => useContext(configContext);

export const ConfigConsumer = configContext.Consumer;
