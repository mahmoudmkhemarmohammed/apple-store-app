import { createSlice } from "@reduxjs/toolkit";
import { TProduct , TLoading , isString } from "@types";
import actGetBestSalingProducts from "./act/actGetBestSalingProducts";
type TBestSalingProductsState = {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
};

const initialState: TBestSalingProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const bestSalingProductsSlice = createSlice({
  name: "bestSalingProducts",
  initialState,
  reducers: {
    cleanUpBestSalingProducts: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetBestSalingProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetBestSalingProducts.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
      state.error = null;
    });
    builder.addCase(actGetBestSalingProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpBestSalingProducts } = bestSalingProductsSlice.actions;
export default bestSalingProductsSlice.reducer;
