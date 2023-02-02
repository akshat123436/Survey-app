import { configureStore } from "@reduxjs/toolkit";
import { inputReducer } from "./slices/input";
import { submitReducer } from "./slices/submit";
const store = configureStore({
  reducer: { input: inputReducer, submit: submitReducer },
});

export default store;
