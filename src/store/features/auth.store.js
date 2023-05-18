import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getAccountAction = createAsyncThunk("getAccount", async () => {
//   // 這裡可以寫網路請求
//   return await () => {};
// });

const authSlice = createSlice({
  name: "auth",
  initialState: {
    account: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(getAccountAction.fulfilled, (state, action) => {
    //   state.account = action.payload;
    // });
  },
});

export default authSlice.reducer;
