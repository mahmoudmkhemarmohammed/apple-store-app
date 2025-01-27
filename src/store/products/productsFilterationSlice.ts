import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TProduct } from "@types";
import actGetProductsFilteration from "./act/actGetProductsFilteration";

type TProductsFilterationState = {
  loading: TLoading;
  records: TProduct[];
  error: string | null;
  total: number;
};
const initialState: TProductsFilterationState = {
  loading: "idle",
  records: [],
  error: null,
  total: 0,
};

const productsFilterationSlice = createSlice({
  name: "productsFilteration",
  initialState,
  reducers: {
    cleanUpProductsFilteration: (state) => {
      state.records = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsFilteration.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsFilteration.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload.data;
      state.total = action.payload.total;
      state.error = null;
    });
    builder.addCase(actGetProductsFilteration.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpProductsFilteration } = productsFilterationSlice.actions
export default productsFilterationSlice.reducer;
