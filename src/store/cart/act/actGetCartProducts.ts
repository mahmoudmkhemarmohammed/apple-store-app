import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetCartProducts = createAsyncThunk(
  "cartProducts/actGetCartProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState, fulfillWithValue, signal } = thunkAPI;
    try {
      const { cart } = getState() as RootState;
      const itemsId = Object.keys(cart.items);
      if (!itemsId.length) {
        return fulfillWithValue([]); // return empty array if cart is empty
      }
      const concatenatedItemsIds = Object.keys(cart.items)
        .map((item) => `id=${item}`)
        .join("&");
      const res = await axios.get(`/products?${concatenatedItemsIds}`, {
        signal,
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetCartProducts;
