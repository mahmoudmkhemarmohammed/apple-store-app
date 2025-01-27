import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading } from "@types";
import actEditeAccountData from "./act/actEditeAccountData";
import actDeleteAccount from "./act/actDeleteAccount";

type TAccountState = {
  loading: TLoading;
  error: string | null;
};

const initialState: TAccountState = {
  loading: "idle",
  error: null,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},

  // Edite Account Information
  extraReducers: (builder) => {
    builder.addCase(actEditeAccountData.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });

    builder.addCase(actEditeAccountData.fulfilled, (state) => {
      state.loading = "succeeded";
      state.error = null;
    });

    builder.addCase(actEditeAccountData.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // Delete the account

    builder.addCase(actDeleteAccount.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actDeleteAccount.fulfilled, (state) => {
      state.loading = "succeeded";
      state.error = null;
    });
    builder.addCase(actDeleteAccount.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export default accountSlice.reducer;
