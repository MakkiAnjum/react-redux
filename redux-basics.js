const redux = require("redux");
const createStore = redux.createStore;

const initialState = { counter: 0 };

// <--------1 - Reducer -------->
// it is the only thing that may update state in the end
const rootReducer = (oldState = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...oldState,
      counter: oldState.counter + 1
    };
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...oldState,
      counter: oldState.counter + action.value
    };
  }
  /* it has to return updatedState*/
  return oldState;
};

// <-------2 - Store -------->
// a store needs to be initialized with a reducer
// pas reducer to store
const store = createStore(rootReducer);
console.log(store.getState());

// <---------4 - Subscription ---------->
// this takes a function that will be executed whenever the state will be updated
// whenever an action reached/dispatched to the reducer

store.subscribe(() => {
  console.log("[SUBSCRIPTION]", store.getState());
});

// <------3 - Dispatching Action --------->
store.dispatch({ type: "INC_COUNTER" });
store.dispatch({ type: "ADD_COUNTER", value: 10 });
console.log(store.getState());
