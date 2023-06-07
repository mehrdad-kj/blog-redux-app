import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
    addTodo: builder.mutation({
      query: (initialTodo) => ({
        url: "/todos",
        method: "POST",
        body: initialTodo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
    }),
    updateTodo: builder.mutation({
      query: ({id, title}) =>({
        url: `todos/${id}`,
        method: "PUT",
        body: {title},
      }),
    }),
  }),
});

export const { useGetTodosQuery, useAddTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation } =
  apiSlice;
