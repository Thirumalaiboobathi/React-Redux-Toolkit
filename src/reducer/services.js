import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoService = createApi({
  reducerPath: 'todo',
  baseQuery: fetchBaseQuery({ baseUrl: "https://65870983468ef171392f2f78.mockapi.io/rtk", }),
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: () => ({
        url: "todos",
        method: "GET"
      }),
    }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: "todos",
        method: "POST",
        body: newTodo,
      }),
    }),
    updateTodo: builder.mutation({
      query: ({ id, updatedTodo }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: updatedTodo,
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `todos/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoService;
