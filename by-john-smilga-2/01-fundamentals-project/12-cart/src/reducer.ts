import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

interface ICartItem {
  amount: number;
}
interface IAppState {
  loading: boolean;
  cart: ICartItem[];
}
interface IAppAction {
  type: string;
  payload?: any;
}

const reducer = (state: IAppState, action: IAppAction): IAppState => {
  if (action.type === "CAP") {
    return state;
  }

  return state;
};

export default reducer;
