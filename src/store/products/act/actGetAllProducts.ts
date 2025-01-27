import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetAllProducts = createAsyncThunk(
  "getAllProducts/actGetAllProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.get("/products");
      return await res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);

export default actGetAllProducts;
