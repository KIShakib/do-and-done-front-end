import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  tagTypes: [],
  endpoints: (builder) => ({
    getToDos: builder.query({
      query: () => "/get-todos",
    }),
  }),
});

export const { useGetToDosQuery } = todosApi;
