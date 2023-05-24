import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAccount } from "@/services/authAPI.service";
// import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    account: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAccountAction.fulfilled, (state, action) => {
      state.account = action.payload;
    });
  },
});

export const getAccountAction = createAsyncThunk("getAccount", async () => {
  // 這裡可以寫網路請求
  return await getAccount();
});

export default authSlice.reducer;
