import { ApiSlice } from "../../api/apiSlice";

export const categoriesApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "category",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = categoriesApi;
