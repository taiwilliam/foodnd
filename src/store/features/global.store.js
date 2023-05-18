import { createSlice } from "@reduxjs/toolkit";
import alertModel from "@/models/alert.model";

const globalSlice = createSlice({
  name: "shop",
  initialState: {
    alert: alertModel,
    isLoading: false,
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
    showIsLoading(state) {
      state.isLoading = true;
    },
    closeIsLoading(state) {
      state.isLoading = false;
    },
    showIsPartialLoading(state) {
      state.isPartialLoading = true;
    },
    closeIsPartialLoading(state) {
      state.isPartialLoading = false;
    },
  },
});

export const {
  setAlertAction,
  closeAlertAction,
  initAlertAction,
  showIsLoading,
  closeIsLoading,
  showIsPartialLoading,
  closeIsPartialLoading,
} = globalSlice.actions;

export default globalSlice.reducer;
