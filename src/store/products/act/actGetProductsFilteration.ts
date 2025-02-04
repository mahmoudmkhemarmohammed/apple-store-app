import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TData = {
    page: number
    prefix: string[]
    sortWithoutRange: string
    priceRange: string[]
    search: string
}

const actGetProductsFilteration = createAsyncThunk(
  "productsFilteration/actGetProductsFilteration",
  async (data:TData, thunkAPI) => {
    const { rejectWithValue , signal } = thunkAPI;
    const {page , prefix , sortWithoutRange , priceRange , search} = data
    
    const priceRangeFilter = priceRange.length > 0 ? `&price_gte=${priceRange[0]}&price_lte=${priceRange[1]}` : ""
    const searchProducts = search !== "" ? `&q=${search}` : ""
    const concatenatedCatPerfix = prefix.map(el => `cat_prefix=${el}`).join("&")
    
    try {
      const res = await axios.get(`/products?${concatenatedCatPerfix}&_sort=price&_order=${sortWithoutRange}${priceRangeFilter}${searchProducts}&_page=${page}&_limit=6` , {signal});
      return { data: res.data, total:res.headers["x-total-count"] };
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
export default actGetProductsFilteration