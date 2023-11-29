import { ApiSlice } from "../../api/apiSlice";

export const brandsApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllBrands: builder.query({
      query: () => ({
        url: "brands",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBrandsQuery } = brandsApi;
