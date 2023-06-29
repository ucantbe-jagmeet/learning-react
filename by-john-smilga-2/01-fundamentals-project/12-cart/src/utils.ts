import { ICartItem } from "./context";

interface IReturn {
  totalAmount: number;
  totalCost: number;
}

export const getTotals: (cart: Map<string, ICartItem>) => IReturn = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;

  for (const item of cart.values()) {
    totalAmount += item.amount;
    totalCost += item.amount * Number(item.price);
  }

  return { totalAmount, totalCost };
};
