import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import { TEditeProfileData } from "@validations/editeAccountDataSchema";
import axios from "axios";
import bcrypt from "bcryptjs";

const actEditeAccountData = createAsyncThunk(
  "account/actEditeAccountData",
  async (formData: TEditeProfileData, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const { auth } = getState() as RootState;
    const { firstName, currentPassword, email, lastName, password } = formData;

    try {
      const user = await axios.get(`/users/${auth.user?.id}`);
      const userPassword = await user.data.password;
      const isMatch = await bcrypt.compare(currentPassword, userPassword);

      if (!isMatch) {
        return rejectWithValue("The current password is incorrect");
      }

      const newData = {
        firstName,
        lastName,
        email: email == "" ? auth.user?.email : email,
        password,
      };

      const res = await axios.patch(`/users/${auth.user?.id}`, newData);
      return await res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actEditeAccountData;
