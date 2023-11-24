import { ApiSlice } from "../../api/apiSlice";

export const restaurantApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllRestaurant: builder.query({
      query: (slug) => ({
        url: `restaurant/${slug}`,
        method: "GET",
      }),
    }),
    getOneRestaurant: builder.mutation({
      query: (body) => ({
        url: "restaurant/search",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useGetAllRestaurantQuery, useGetOneRestaurantMutation } =
  restaurantApi;
