import { isString, TProduct, TLoading } from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import actGetWishlist from "./act/actGetWishlist";
import { logOut } from "@store/auth/authSlice";

type TWishlistState = {
  itemsIds: number[];
  productFullInfo: TProduct[];
  loading: TLoading;
  error: string | null;
};

const initialState: TWishlistState = {
  itemsIds: [],
  productFullInfo: [],
  loading: "idle",
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanUpWishlistProductsFullInfo: (state) => {
      state.productFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === "add") {
        state.itemsIds.push(action.payload.id);
      } else {
        state.itemsIds = state.itemsIds.filter(
          (el) => el !== action.payload.id
        );
        state.productFullInfo = state.productFullInfo.filter(
          (el) => el.id !== action.payload.id
        );
      }
      state.error = null;
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    builder.addCase(actGetWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.loading = "succeeded";
      if(action.payload.dataType === "productsFullInfo") {
        state.productFullInfo = action.payload.data
      }
      else {
        state.itemsIds = action.payload.data
      }
      state.error = null;
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    //listen for Logout user
    builder.addCase(logOut,(state) => {
      state.itemsIds = []
      state.productFullInfo = [];
      state.loading = "idle"
      state.error = null
    })
  },
});

export const { cleanUpWishlistProductsFullInfo } = wishlistSlice.actions;

export default wishlistSlice.reducer;
