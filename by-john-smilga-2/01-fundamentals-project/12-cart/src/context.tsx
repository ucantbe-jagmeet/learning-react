import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  ReactNode,
} from "react";

interface AppContextValue {
  greeting: string;
}

const AppContext = createContext<AppContextValue | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const greeting = "hello";

  return (
    <AppContext.Provider value={{ greeting }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
