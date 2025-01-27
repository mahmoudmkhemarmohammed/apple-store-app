import { createSlice } from "@reduxjs/toolkit";
import { isString, TLoading, TUser } from "@types";
import actAuthRegister from "./act/actAuthRegister";
import actAuthLogin from "./act/actAuthLogin";

type TAuthState = {
  user: TUser | null;
  accessToken: string | null;
  loading: TLoading;
  error: string | null;
};

const initialState: TAuthState = {
  user: null,
  accessToken: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUI: (state) => {
      state.error = null;
    },
    // logout
    logOut: (state) => {
      state.accessToken = null
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    // register
    builder.addCase(actAuthRegister.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthRegister.fulfilled, (state) => {
      state.loading = "succeeded";
    });
    builder.addCase(actAuthRegister.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    // Login
    builder.addCase(actAuthLogin.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actAuthLogin.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.error = null;
    });
    builder.addCase(actAuthLogin.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { resetUI , logOut } = authSlice.actions;
export default authSlice.reducer;
