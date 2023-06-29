import { useContext, useReducer, createContext, ReactNode } from "react";
import reducer from "./reducer";
import cartItems from "./data";
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

export interface ICartItem {
  id: string;
  title: string;
  price: string;
  img: string;
  amount: number;
}
export interface IAppState {
  loading: boolean;
  cart: Map<string, ICartItem>;
  clearCart: () => void;
}
export interface IInitialState {
  loading: boolean;
  cart: Map<string, ICartItem>;
}

export const AppContext = createContext<IAppState | undefined>(undefined);

const initialState: IInitialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <AppContext.Provider value={{ ...state, clearCart }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = (): IAppState => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error(
      "useGlobalContext must be used within a GlobalContextProvider"
    );
  }
  return context;
};
