import { ApiSlice } from "../../api/apiSlice";

export const brandsApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getbrand: builder.query({
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
        url: "brands",
        method: "POST",
        body,
      }),
    }),
    updateBrand: builder.mutation({
      query: (body) => ({
        url: "brands",
        method: "PATCH",
        body,
      }),
    }),
  }),
});

export const {
  useGetbrandQuery,
  useAddBrandMutation,
  useDeleteBrandMutation,
  useUpdateBrandMutation,
} = brandsApi;
