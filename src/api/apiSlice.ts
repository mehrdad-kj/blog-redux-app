import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  tagTypes: ["TODOS"],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
      providesTags: ["TODOS"],
    }),
    addTodo: builder.mutation({
      query: (initialTodo) => ({
        url: "/todos",
        method: "POST",
        body: initialTodo,
      }),
      invalidatesTags: ["TODOS"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TODOS"],
    }),
    updateTodo: builder.mutation({
      query: ({ id, title, importance }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: { title, importance },
      }),
      invalidatesTags: ["TODOS"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} = apiSlice;
