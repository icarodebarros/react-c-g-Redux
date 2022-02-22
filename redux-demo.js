const redux = require('redux');

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

// console.log(store.ge

store.subscribe(() => {
  const latestState = store.getState();
  console.log(latestState);
});

store.dispatch({type: 'increment'});
store.dispatch({type: 'decrement'});