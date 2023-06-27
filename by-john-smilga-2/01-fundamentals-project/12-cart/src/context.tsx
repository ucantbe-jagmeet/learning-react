import {
  useContext,
  useReducer,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

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

const AppContext = createContext<IAppState | undefined>(undefined);

const initialState = {
  loading: false,
  cart: [],
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
