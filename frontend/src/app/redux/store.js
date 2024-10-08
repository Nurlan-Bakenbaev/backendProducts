// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import userReducer from './features/userSlice';


const store = () =>
  configureStore({
    reducer: {
      user: userReducer, 
    },
  });


export const wrapper = createWrapper(store);
