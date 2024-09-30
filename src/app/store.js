import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import todoSlice from "../features/todo/todoSlice";
import productSlice from "../features/product/productSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
    product: productSlice,
  },
});
