import { createAsyncThunk } from "@reduxjs/toolkit";
import { TUser } from "@types";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TFormData = {
    email: string;
    password: string;
}

type TResponse = {
    accessToken: string
    user: TUser
}

const actAuthLogin = createAsyncThunk(
  "auth/actAuthLogin",
  async (formData:TFormData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post<TResponse>("/login", formData);
      return await res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
export default actAuthLogin;
