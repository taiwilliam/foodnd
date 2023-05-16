import { addCart, getCart, removeCart } from "@/services/cartAPI.service";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

export const fetchCartDataAction = createAsyncThunk('fetchCartData', async (e) => {
  // 這裡可以寫網路請求
  return await getCart()
})

export const addCartDataAction = createAsyncThunk('addCartData', async (value) => {
  return await addCart(value)
})

export const removeCartDataAction = createAsyncThunk('removeCartData', async (id) => {
  return await removeCart(id)
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data: []
    },
    reducers: {
        changeCartDataAction(state, { payload }) {
            state.data = payload
        }
    },
    extraReducers: (builder) => {
      builder.addCase(fetchCartDataAction.fulfilled, (state, action) => {
        state.data = action.payload
      })
      builder.addCase(addCartDataAction.fulfilled, (state, action) => {
        state.data = action.payload
      })
      builder.addCase(removeCartDataAction.fulfilled, (state, action) => {
        state.data = action.payload
      })
    }
    // extraReducers: {
    //     [fetchCartDataAction.fulfilled](state, { payload }) {
    //         state.data = payload
    //     },
    //     [addCartDataAction.fulfilled](state, { payload }) {
    //         state.data = payload
    //     },
    //     [removeCartDataAction.fulfilled](state, { payload }) {
    //         state.data = payload
    //     }
    // }
})

export const { changeCartDataAction } = cartSlice.actions

export default cartSlice.reducer