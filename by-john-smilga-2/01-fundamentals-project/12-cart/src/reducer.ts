import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { IInitialState } from "./context";

interface IAppAction {
  type: string;
  payload?: any;
}

const reducer = (state: IInitialState, action: IAppAction): IInitialState => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: new Map() };
  }

  throw new Error(`no mathing action type : ${action.type}`);
};

export default reducer;
