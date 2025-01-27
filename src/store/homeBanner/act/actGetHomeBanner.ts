import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetHomeBanner = createAsyncThunk(
  "homeBanner/actGetHomeBanner",
  async (_, thunkAPI) => {
    const { rejectWithValue , signal} = thunkAPI;
    try {
      const res = await axios.get("/banners",{signal});
      return await res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error))
    }
  }
);
export default actGetHomeBanner;
