import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice"
import todoReducer from "./slice/todoSlice"
import { authApi } from "./api/authApi";
import { todoApi } from "./api/todoApi";
export const store= configureStore({
  reducer:{
    auth:authReducer,
    todo:todoReducer,
    [authApi.reducerPath]: authApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware()
    .concat(authApi.middleware)
    .concat(todoApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;