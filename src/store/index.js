import { createStore } from 'redux';

function counterReducer(state = {counter: 0}, action) {
  if(action.type === "increment") {
    return {
      counter: state.counter + 1,
    }
  }
  
  if(action.type === "decrement") {
    return {
      counter: state.counter - 1,
    }
  }
  return state;
}

export const store = createStore(counterReducer);

function counterSubscriber() {
  const latestState = store.getState();
  console.log(latestState);
}

store.subscribe(counterSubscriber);
store.dispatch('increment');
store.dispatch('decrement');