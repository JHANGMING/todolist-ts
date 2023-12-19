import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { VITE_TODO_API_URL } = import.meta.env;
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_TODO_API_URL,
  }),
  
  endpoints: (builder) => ({
    apiSignUp: builder.mutation({
      query: (data) => ({
        url: '/users/sign_up',
        method: 'POST',
        body: data
      }),
    }),
    apiSignIn: builder.mutation({
      query: (data) => ({
        url: '/users/sign_in',
        method: 'POST',
        body: data
      }),
      
    }),
    apiSignOut: builder.mutation({
      query: (token) => ({
        url: '/users/sign_out',
        method: 'POST',
        headers: {
        Authorization: token, 
      },
      }),
      
    }),
    apiCheckout: builder.query({
      query: (token) => ({
        url: '/users/checkout',
        headers: {
        Authorization: token 
      },
      }),
    }),
  }),
});

export const { 
  useApiSignUpMutation,
  useApiSignInMutation,
  useApiCheckoutQuery,
  useApiSignOutMutation,
} = authApi;