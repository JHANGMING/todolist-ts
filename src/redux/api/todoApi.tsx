
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const { VITE_TODO_API_URL } = import.meta.env;
export const todoApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: VITE_TODO_API_URL,
  }),
  tagTypes: ['Todos'],
  endpoints: (builder) => ({
    apiGetTodos: builder.query({
      query: (token) => ({
        url: '/todos/',
        headers: {
        Authorization: token, 
      },
      }),
      providesTags: ['Todos'],
    }),
    apiPostTodos: builder.mutation({
      query: ({ todo, token }) => ({
        url: '/todos/',
        method: 'POST',
        body: todo,
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ['Todos'],
    }),
    apiDeleteTodos: builder.mutation({
      query: ({ id, token }) => ({
        url: `/todos/${id}`,
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ['Todos'],
    }),
    apiPatchTodos: builder.mutation({
      query: ({ id, token }) => ({
        url: `/todos/${id}/toggle`,
        method: 'PATCH',
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ['Todos'],
    }),
    apiPutTodos: builder.mutation({
      query: ({ id, text, token }) => ({
        url: `/todos/${id}`,
        method: 'PUT',
        body: {"content":text},
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const { 
  useApiGetTodosQuery,
  useApiPostTodosMutation,
  useApiDeleteTodosMutation,
  useApiPatchTodosMutation,
  useApiPutTodosMutation,
} = todoApi;