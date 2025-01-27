import { TLoading, TProduct, isString } from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetSingleProduct from "./act/actGetSingleProduct";
type TSingleProductState = {
  item: TProduct | null;
  loading: TLoading;
  error: string | null;
};
const initialState: TSingleProductState = {
  item: null,
  loading: "idle",
  error: null,
};
const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState,
  reducers: {
    cleanUpSingleProduct: (state) => {
      state.item = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetSingleProduct.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetSingleProduct.fulfilled, (state, action) => {
      state.item = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actGetSingleProduct.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpSingleProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;
