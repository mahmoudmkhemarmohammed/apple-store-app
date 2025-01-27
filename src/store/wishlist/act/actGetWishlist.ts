import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";
type TDataType = "itemsIds" | "productsFullInfo";
type TResponse = {
  userId:string,
  productId:number
  id:number
}
const actGetWishlist = createAsyncThunk(
  "wishlist/actGetWishlist",
  async (DataType: TDataType, thunkAPI) => {
    const { rejectWithValue, getState , signal} = thunkAPI;
    const { auth } = getState() as RootState;
    try {
      const userWishlist = await axios.get<TResponse[]>(`/wishlist?userId=${auth.user?.id}`,{signal});
      if(userWishlist.data.length === 0) {
        return {data: [], dataType: "itemsIds"}
      }
      if (DataType === "itemsIds") {
        const itemsIds = userWishlist.data.map(item => item.productId)
        return {data:itemsIds,dataType: "itemsIds"}
      }
      else {
        const concatenatedItemsIds = userWishlist.data.map(item => `id=${item.productId}`).join("&")
        const res = await axios.get(`/products?${concatenatedItemsIds}`,{signal})
        return {data: res.data, dataType: "productsFullInfo"}
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetWishlist;
