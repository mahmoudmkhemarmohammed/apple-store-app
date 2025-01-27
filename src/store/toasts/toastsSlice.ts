import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TToast } from "@types";

type TToastState = {
  records: TToast[];
};

const initialState: TToastState = {
  records: [],
};
const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    // Add a new toast to the state
    addToast: (state, action: PayloadAction<TToast>) => {
      state.records.push({
        id: nanoid(),
        title: action.payload.title || action.payload.type,
        message: action.payload.message,
        type: action.payload.type,
      });
    },
    // Remove Toast from state
    removeToast: (state, action) => {
      state.records = state.records.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addToast, removeToast } = toastsSlice.actions;
export default toastsSlice.reducer;
