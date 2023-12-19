import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice"
import { authApi } from "./api/authApi";
export const store= configureStore({
  reducer:{
    auth:authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;