import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";
const actGetProductByCatPrefix = createAsyncThunk(
  "products/actGetProductByCatPrefix",
  async (prefix:string, thunkAPI) => {
    const { rejectWithValue , signal } = thunkAPI;
    try {
      const res = await axios.get(`/products?cat_prefix=${prefix}`,{signal});
      return await res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);

export default actGetProductByCatPrefix;