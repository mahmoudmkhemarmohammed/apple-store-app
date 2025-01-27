import { TLoading , isString} from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetHomeBanner from "./act/actGetHomeBanner";

type THomeBannerState = {
  banners: { id: number; title: string; img: string }[];
  loading: TLoading;
  error: string | null;
};
const initialState: THomeBannerState = {
  banners: [],
  loading: "idle",
  error: null,
};
const homeBannerSlice = createSlice({
  name: "homeBanner",
  initialState,
  reducers: {
    cleanUpHomeBanner: (state) => {
      state.banners = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetHomeBanner.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetHomeBanner.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.banners = action.payload;
      state.error = null;
    });
    builder.addCase(actGetHomeBanner.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanUpHomeBanner } = homeBannerSlice.actions;
export default homeBannerSlice.reducer;
