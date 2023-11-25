import { ApiSlice } from "../../api/apiSlice";

export const itemsApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItem: builder.query({
      query: () => ({
        url: "items",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetItemQuery } = itemsApi;