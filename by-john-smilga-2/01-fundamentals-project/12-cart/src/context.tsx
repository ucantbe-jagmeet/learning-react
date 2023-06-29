import {
  useContext,
  useReducer,
  createContext,
  ReactNode,
  useEffect,
} from "react";
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
import { getTotals } from "./utils";

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
  remove: (id: string) => void;
  increase: (id: string) => void;
  decrease: (id: string) => void;
  totalAmount: number;
  totalCost: number;
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

  const { totalAmount, totalCost } = getTotals(state.cart);

  // useEffect(()=>{

  // },[])

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const remove: (id: string) => void = (id: string) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const increase: (id: string) => void = (id: string) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease: (id: string) => void = (id: string) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
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
