import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.ir" }),
  endpoints: (builder) => ({}),
});

export const fakeApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getFakeApiByPosts: builder.query({
      query: () => "posts"
    }),
  }),
});

export const usersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsersApiByUsers: builder.query({
      query: () => "users",
    }),
  }),
});

export const { useGetFakeApiByPostsQuery } = fakeApi;
export const { useGetUsersApiByUsersQuery } = usersApi;
