import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";

const getCartTotoalQuantity = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    const totalQuantity = Object.values(items).reduce(
      (acc, curr) => acc + curr,
      0
    );
    return totalQuantity;
  }
);
export default getCartTotoalQuantity;
