import { configureStore } from '@reduxjs/toolkit' 
import { cartSlice } from './cartSlice'

export const store = configureStore({
    reducer: {
      cart: cartSlice.reducer, // Access the reducer property of cartSlice
    },
  });