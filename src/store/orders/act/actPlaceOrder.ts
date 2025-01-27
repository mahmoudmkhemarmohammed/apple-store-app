import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actPlaceOrder = createAsyncThunk(
  "orders/actPlaceOrder",
  async (subtotal: number, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth, cart } = getState() as RootState;
    const orderItems = cart.productsFullInfo.map((el) => ({
      id: el.id,
      title: el.title,
      img: el.img,
      price: el.price,
      quantity: cart.items[el.id],
    }));
    try {
      const res = await axios.post(`/orders`, {
        userId: auth.user?.id,
        items: orderItems,
        subtotal,
      });
      return await res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actPlaceOrder;