import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from "../slices/todoSlice";
import { apiSlice } from "../api/apiSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
