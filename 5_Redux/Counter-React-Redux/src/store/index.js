import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
};

// we can't modify storePara so we returning object i.e. {counter : storePara.counter + 1} (i.e. here a new object which is returned) not updating any value only returning an object.
const counterReducer = (storePara = INITIAL_VALUE, actionPara) => {
  if (actionPara.type === "INCREMENT") {
    return { counter: storePara.counter + 1 };
  } else if (actionPara.type === "DECREMENT") {
    return { counter: storePara.counter - 1 };
  } else if (actionPara.type === "ADD") {
    return { counter: storePara.counter + Number(actionPara.payload.num) };
  } else if (actionPara.type === "SUBTRACT") {
    return { counter: storePara.counter - Number(actionPara.payload.num) };
  }
  return storePara;
};

const counterStore = createStore(counterReducer);

export default counterStore;
