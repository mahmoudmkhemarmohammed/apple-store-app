import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetBestSalingProducts = createAsyncThunk(
  "bestSalingProducts/actGetBestSalingProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("/products?_sort=sales&_order=desc");
      return await res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);

export default actGetBestSalingProducts;