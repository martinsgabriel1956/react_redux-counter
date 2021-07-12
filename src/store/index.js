import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth';
import { counterSlice } from './counter';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  }
});