import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://do-and-done-server.vercel.app/",
  }),
  tagTypes: ["deleteToDo", "addToDo", "completed", "edit"],
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => "/get-todos",
      providesTags: ["deleteToDo", "addToDo", "completed"],
    }),
    deleteToDoById: builder.mutation({
      query: (_id) => ({
        url: `/delete-todo/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteToDo"],
    }),
    addToDo: builder.mutation({
      query: (data) => ({
        url: "/add-todo",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["addToDo"],
    }),
    setStatusToComplete: builder.mutation({
      query: (_id) => ({
        url: `/completed-todo/${_id}`,
        method: "PATCH",
        body: { _id },
      }),
      invalidatesTags: ["completed"],
    }),
    editToDoInfo: builder.mutation({
      query: (todo) => ({
        url: `/edit-todo/:${todo._id}`,
        method: "PATCH",
        body: { todo },
      }),
      invalidatesTags: ["edit"],
    }),
  }),
});

export const {
  useGetToDosQuery,
  useDeleteToDoByIdMutation,
  useAddToDoMutation,
  useSetStatusToCompleteMutation,
  useEditToDoInfoMutation,
} = todosApi;
