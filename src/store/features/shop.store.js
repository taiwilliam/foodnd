import { getShops, getShopMenu, getShop } from "@/services/shopAPI.service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchShopListAction = createAsyncThunk("fetchShopList", async (e) => {
  // 這裡可以寫網路請求
  return await getShops();
});

export const fetchShopMenuAction = createAsyncThunk("fetchShopMenu", async (id) => {
  return await getShopMenu(id);
});

export const fetchShopDataAction = createAsyncThunk("fetchShopData", async (id) => {
  return await getShop(id);
});

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    list: [],
    menu: [],
    data: {}
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchShopListAction.fulfilled, (state, action) => {
      state.list = action.payload
    })
    builder.addCase(fetchShopMenuAction.fulfilled, (state, action) => {
      state.menu = action.payload
    })
    builder.addCase(fetchShopDataAction.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
});

export default shopSlice.reducer;
