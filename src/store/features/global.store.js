import { createSlice } from "@reduxjs/toolkit";
import alertModel from "@/models/alert.model";

const globalSlice = createSlice({
  name: "shop",
  initialState: {
    alert: alertModel
  },
  reducers: {
    setAlertAction(state, action) {
      state.alert = Object.assign(state.alert, action.payload)
    },
    closeAlertAction(state) {
      state.alert.show = false
    },
    initAlertAction(state) {
      state.alert = Object.assign(state.alert, alertModel)
    }
  }
});

export const { setAlertAction, closeAlertAction, initAlertAction } = globalSlice.actions

export default globalSlice.reducer;
