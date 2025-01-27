import { TProduct , TLoading , isString} from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetAllProducts from "./act/actGetAllProducts";

type TAllProductsState = {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
};

const initialState: TAllProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    cleanUpAllProducts: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetAllProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetAllProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetAllProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpAllProducts } = allProductsSlice.actions;

export default allProductsSlice.reducer;
