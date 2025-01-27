import { TProduct , TLoading, isString} from "@types";
import { createSlice } from "@reduxjs/toolkit";
import actGetCartProducts from "./act/actGetCartProducts";

type TCartState = {
  items: { [key: string]: number };
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: string | null;
};

const initialState: TCartState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cleanUpCart: (state) => {
      state.productsFullInfo = [];
    },
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },

    changeQuantity: (state, action) => {
      const ids = Number(Object.keys(action.payload));
      const quantity = Number(Object.values(action.payload));
      state.items[ids] = quantity;
    },

    deleteFromCart: (state, action) => {
      delete state.items[action.payload];
      const productsWithoutItems = state.productsFullInfo.filter(
        (product) => product.id !== action.payload
      );

      state.productsFullInfo = productsWithoutItems;
    },
    clearCart: (state) => {
      state.items = {};
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetCartProducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCartProducts.fulfilled, (state, action) => {
      state.productsFullInfo = action.payload;
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actGetCartProducts.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { addToCart, changeQuantity, deleteFromCart, clearCart , cleanUpCart} =
  cartSlice.actions;
export default cartSlice.reducer;
