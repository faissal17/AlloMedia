import { ApiSlice } from "../../api/apiSlice";

export const cuisineApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCuisine: builder.query({
      query: () => ({
        url: "cuisines",
        method: "GET",
      }),
    }),
    addCuisine: builder.mutation({
      query: (body) => ({
        url: "cuisines",
        method: "POST",
        body,
      }),
    }),
    deleteCuisine: builder.mutation({
      query: (body) => ({
        url: `cuisines`,
        method: "DELETE",
        body: body,
      }),
    }),
    updateCuisine: builder.mutation({
      query: (body) => ({
        url: `cuisines`,
        method: "PATCH",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetCuisineQuery,
  useAddCuisineMutation,
  useDeleteCuisineMutation,
  useUpdateCuisineMutation,
} = cuisineApi;
