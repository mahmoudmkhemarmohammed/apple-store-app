import { TProduct , TLoading , isString} from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetOnSaleProducts from "./act/actGetOnSaleProducts";

type TOnSaleProductsState = {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
};

const initialState: TOnSaleProductsState = {
  records: [],
  loading: "idle",
  error: null,
};
const onSaleProductsSlice = createSlice({
  name: "onSaleProducts",
  initialState,
  reducers: {
    cleanUpOnSaleProducts: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetOnSaleProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetOnSaleProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetOnSaleProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpOnSaleProducts } = onSaleProductsSlice.actions;

export default onSaleProductsSlice.reducer;
