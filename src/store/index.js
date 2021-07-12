import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true } 
const initialAuthState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment: state => void(state.counter++),
    decrement: state => void(state.counter--),
    increase: (state, action) => void(state.counter += action.payload),
    toggleCounter: state => void(state.showCounter = !state.showCounter),
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: state => void(state.isAuthenticated = true),
    logout: state => void(state.isAuthenticated = false),
  }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
});