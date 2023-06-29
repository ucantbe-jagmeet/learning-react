import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { ICartItem, IInitialState } from "./context";

interface IAppAction {
  type: string;
  payload?: any;
}

const reducer = (state: IInitialState, action: IAppAction): IInitialState => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  if (action.type === REMOVE) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);
    return { ...state, cart: newCart };
  }

  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const itemId = action.payload.id;
    const item = newCart.get(itemId);
    if (item) {
      const newItem = { ...item, amount: item.amount + 1 };
      newCart.set(itemId, newItem);
      return { ...state, cart: newCart };
    }
  }

  throw new Error(`no mathing action type : ${action.type}`);
};

export default reducer;
