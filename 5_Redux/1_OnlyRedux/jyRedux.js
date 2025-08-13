// To make a node project first: npm init -y
// Now install redux package : npm install redux

const redux = require("redux");

// Now to make reducer:

const INITIAL_VALUE = {
  counter: 0,
};
// console.log(INITIAL_VALUE.counter);

const reducerVar = (storeParameter = INITIAL_VALUE, actionParameter) => {
  let newStore = storeParameter;
  if (actionParameter.type === "INCREMENT") {
    newStore = { counter: storeParameter.counter + 1 };
  } else if (actionParameter.type === "DECREMENT") {
    newStore = { counter: storeParameter.counter - 1 };
  } else if (actionParameter.type === "ADDITION") {
    newStore = {
      counter: storeParameter.counter + actionParameter.payload.numX,
    };
  }
  return newStore;
};

// Now to make Store:

const storeVar = redux.createStore(reducerVar);

// Now to make subscriber:

const subscriberVar = () => {
  const stateVar = storeVar.getState();
  console.log(stateVar);
};

storeVar.subscribe(subscriberVar);

// Now to make action:

storeVar.dispatch({ type: "INCREMENT" });
storeVar.dispatch({ type: "DECREMENT" });
storeVar.dispatch({ type: "INCREMENT" });
storeVar.dispatch({ type: "ADDITION", payload: { numX: 7 } });
storeVar.dispatch({ type: "DECREMENT" });
