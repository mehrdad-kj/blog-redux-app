import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import  postsReducer  from '../features/posts/postSlice'
import usersReducer from '../features/users/userSlice'
import { apiSlice } from '../api/apiSlice'



export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    [apiSlice.reducerPath] : apiSlice.reducer,

  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware),


})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


