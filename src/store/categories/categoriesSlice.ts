import { createSlice } from "@reduxjs/toolkit";
import { TCategory , TLoading , isString} from "@types";
import actGetCategories from "./act/actGetCategories";
type TCategoriesState = {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
};

const initialState: TCategoriesState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    cleanUpCategories: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.records = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });

    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
