import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const BaseQuery = fetchBaseQuery({
  baseUrl: "localhost:3000/api/v1",

  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: "include",
});

export const ApiSlice = createApi({
  baseQuery: BaseQuery,
  endpoints: (builder) => ({}),
});
