import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const actAuthRegister = createAsyncThunk(
  "auth/actAuthRegister",
  async (formData: TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post("/register", formData);
      return await res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
export default actAuthRegister;
