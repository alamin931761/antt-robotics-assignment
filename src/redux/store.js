import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";

// Create and configure the Redux store
export const store = configureStore({
  // Specify the reducer(s) for the store
  reducer: {
    products: productReducer,
  },
});
