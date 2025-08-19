import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counterVal: 0 },
  reducers: {
    increment: (state) => {
      state.counterVal++;
    },
    decrement: (state) => {
      state.counterVal--;
    },
    add: (state, action) => {
      state.counterVal += Number(action.payload.num);
    },
    subtract: (state, action) => {
      state.counterVal -= Number(action.payload.num);
    },
  },
});

// Below is we exporting a part of counterSlice. We can do without the below line also but wherever we import it we need to do then couterSlice.counterActions, so it will become longer.
export const counterActions = counterSlice.actions;
// Below is default export
export default counterSlice;
