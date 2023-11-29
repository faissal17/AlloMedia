import { ApiSlice } from "../../api/apiSlice";

export const brandsApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBrand: builder.query({
      query: () => ({
        url: "brands",
        method: "GET",
      }),
    }),
    addBrand: builder.mutation({
      query: (body) => ({
        url: "brands",
        method: "POST",
        body,
      }),
    }),
    deleteBrand: builder.mutation({
      query: (body) => ({
        url: `brands/`,
        method: "DELETE",
        body: body,
      }),
    }),
    updateBrand: builder.mutation(
      {
        query: (body) => ({
          url: `brands`,
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
  useGetBrandQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useUpdateBrandMutation,
} = brandsApi;
