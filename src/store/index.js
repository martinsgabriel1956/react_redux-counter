import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0, showCounter: true} 

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => void(state.counter++),
    decrement: state => void(state.counter--),
    increase: (state, action) => void(state.counter += action.payload),
    toggleCounter: state => void(state.showCounter = !state.showCounter),
  }
})

export const counterActions = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer
});