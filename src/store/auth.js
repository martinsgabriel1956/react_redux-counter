import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login: state => void(state.isAuthenticated = true),
    logout: state => void(state.isAuthenticated = false),
  }
});

export const authActions = authSlice.actions;