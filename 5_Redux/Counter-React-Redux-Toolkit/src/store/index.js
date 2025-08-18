import { configureStore, createSlice } from "@reduxjs/toolkit";

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

const mainStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    // Now here 2nd reducer
    privacy: privacySlice.reducer,
  },
});

export const privacyActions = privacySlice.actions;
export const counterActions = counterSlice.actions;
export default mainStore;

// const INITIAL_VALUE = {
//   counter: 0,
//   privacyToggle: false,
// };

// we can't modify storePara so we returning object i.e. {counter : storePara.counter + 1} (i.e. here a new object which is returned) not updating any value only returning an object.

//   if (actionPara.type === "INCREMENT") {
//     return {
//       ...storePara, // copy everything from old state. bcoz everytime it returns something and if we dont give the whole store and only just the counter the privacy toggle value is gone. so even if toggle was on so on clicking +1 it will turn off i.e. no more privacy toggle is there. its just a new state with the counter value. when returns it re renders.
//       counter: storePara.counter + 1, // overwrite just counter
//     };
//   } else if (actionPara.type === "DECREMENT") {
//     return { ...storePara, counter: storePara.counter - 1 };
//   } else if (actionPara.type === "ADD") {
//     return {
//       ...storePara,
//       counter: storePara.counter + Number(actionPara.payload.num),
//     };
//   } else if (actionPara.type === "SUBTRACT") {
//     return {
//       ...storePara,
//       counter: storePara.counter - Number(actionPara.payload.num),
//     };
//   } else if (actionPara.type === "PRIVACY_TOGGLE") {
//     return { ...storePara, privacyToggle: !storePara.privacyToggle };
//   }
//   return storePara;
// };
// const counterReducer = (storePara = INITIAL_VALUE, actionPara) => {
