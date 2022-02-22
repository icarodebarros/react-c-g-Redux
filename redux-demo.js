const redux = require('redux');

const initialState = {
  counter: 0
}

const counterReducer = (state = initialState, action) => {
  return {
    counter: state.counter + 1
  }
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});