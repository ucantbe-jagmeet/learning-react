import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import reducer from "./reducer";

interface AppProviderProps {
  children: ReactNode;
}

interface ICartItem {
  amount: number;
}
interface IAppState {
  loading: boolean;
  cart: ICartItem[];
}

const initialState = {
  loading: false,
  cart: [],
};

const AppContext = createContext<IAppState | undefined>(undefined);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
