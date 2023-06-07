import { configureStore } from "@reduxjs/toolkit";
// import todosReducer from "../features/todos/todoSlice";
import { apiSlice } from "../api/apiSlice";

export default configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
