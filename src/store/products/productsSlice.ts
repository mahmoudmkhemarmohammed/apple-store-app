import { TProduct , TLoading , isString} from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetProductByCatPrefix from "./act/actGetProductByCatPrefix";

type TProductsState = {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
};
const initialState: TProductsState = {
  records: [],
  loading: "idle",
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanUpProductsByCategory: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductByCatPrefix.fulfilled, (state, action) => {
      state.records = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actGetProductByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpProductsByCategory } = productsSlice.actions;

export default productsSlice.reducer;
