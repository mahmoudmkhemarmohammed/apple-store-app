import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetSingleProduct = createAsyncThunk(
  "singleProduct/actGetSingleProduct",
  async (productId: string, thunkAPI) => {
    const { rejectWithValue , signal} = thunkAPI;
    try {
      const res = await axios.get(`/products/${productId}`,{signal});
      return await res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);

export default actGetSingleProduct;