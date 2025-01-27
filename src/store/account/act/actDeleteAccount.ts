import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";
import bcrypt from "bcryptjs";

const actDeleteAccount = createAsyncThunk(
  "account/actDeleteAccount",
  async (password: string, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      const user = await axios.get(`/users/${auth.user?.id}`);
      const userPassword = await user.data.password;
      const isMatch = await bcrypt.compare(password, userPassword);
      if (!isMatch) {
        return rejectWithValue("incorrect password");
      }
      await axios.delete(`/users/${auth.user?.id}`);
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actDeleteAccount;
