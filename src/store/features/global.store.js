import { createSlice } from "@reduxjs/toolkit";
import alertModel from "@/models/alert.model";

const globalSlice = createSlice({
  name: "shop",
  initialState: {
    alert: alertModel,
    isLoading: true,
    isPartialLoading: false,
  },
  reducers: {
    setAlertAction(state, action) {
      state.alert = Object.assign(state.alert, action.payload);
    },
    closeAlertAction(state) {
      state.alert.show = false;
    },
    initAlertAction(state) {
      state.alert = Object.assign(state.alert, alertModel);
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsPartialLoading(state, action) {
      state.isPartialLoading = action.payload;
    },
  },
});

export const {
  setAlertAction,
  closeAlertAction,
  initAlertAction,
  setIsLoading,
  setIsPartialLoading,
} = globalSlice.actions;

export default globalSlice.reducer;
