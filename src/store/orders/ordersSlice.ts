import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TOrderItem } from "@types";
import actPlaceOrder from "./act/actPlaceOrder";
import actGetOrders from "./act/actGetOrders";

type TOrderState = {
  loading: TLoading;
  orderList: TOrderItem[];
  error: string | null;
};

const initialState: TOrderState = {
  loading: "idle",
  orderList: [],
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    cleanUpOrders: (state) => {
      state.orderList = [];
    },
  },
  extraReducers: (builder) => {
    // Place order
    builder.addCase(actPlaceOrder.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.fulfilled, (state) => {
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actPlaceOrder.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // Get order list
    builder.addCase(actGetOrders.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetOrders.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.orderList = action.payload;
      state.error = null;
    });
    builder.addCase(actGetOrders.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpOrders } = orderSlice.actions;
export default orderSlice.reducer;
