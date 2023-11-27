import { ApiSlice } from "../../api/apiSlice";

export const citiesApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCity: builder.query({
      query: () => ({
        url: "cities",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCityQuery } = citiesApi;