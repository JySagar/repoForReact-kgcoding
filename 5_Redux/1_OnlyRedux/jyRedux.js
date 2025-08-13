// To make a node project first: npm init -y
// Now install redux package : npm install redux

const redux = require("redux");

// Now to make reducer:

const reducerVar = (storeParameter, actionParameter) => {
  return {counter : storeParameter.counter + 1};
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

storeVar.dispatch({type: })