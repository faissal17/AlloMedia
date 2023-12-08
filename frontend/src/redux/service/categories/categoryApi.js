import { ApiSlice } from "../../api/apiSlice";

export const categoriesApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategory: builder.query({
      query: () => ({
        url: "category",
        method: "GET",
      }),
    }),
    addCategory: builder.mutation({
      query: (body) => ({
        url: "category",
        method: "POST",
        body,
      }),
    }),
    deleteCategory: builder.mutation({
      query: (body) => ({
        url: `category/`,
        method: "DELETE",
        body: body,
      }),
    }),
    updateCatrgory: builder.mutation(
      {
        query: (body) => ({
          url: `category`,
          method: "PATCH",
          body: body,
        }),
      }
      // {
      //   dispatchConditionRejection: false,
      // }
    ),
  }),
});

export const {
  useGetCategoryQuery,
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useUpdateCatrgoryMutation,
} = categoriesApi;
