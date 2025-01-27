import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetOrders = createAsyncThunk("orders/actGetOrders" , async (_,thunkAPI) => {
    const {rejectWithValue , getState , signal} = thunkAPI;
    const {auth} = getState() as RootState

    try {
        const res = await axios.get(`orders?userId=${auth.user?.id}`,{signal});
        return await res.data
    } catch (error) {
        return rejectWithValue(axiosErrorHandler(error))
    }
});
export default actGetOrders