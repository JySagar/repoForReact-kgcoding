import { createSlice } from "@reduxjs/toolkit";

const privacySlice = createSlice({
  name: "privacy",
  // Here we given direct value(i.e. false) instead of making obj like previous slice
  initialState: false,
  reducers: {
    toggle: (state) => {
      return (state = !state);
    },
  },
});

export const privacyActions = privacySlice.actions;
export default privacySlice;
