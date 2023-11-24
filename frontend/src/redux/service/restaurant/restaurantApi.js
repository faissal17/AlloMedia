import { ApiSlice } from "../../api/apiSlice";

export const restaurantApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurant: builder.query({
      query: (slug) => ({
        url: `restaurant/${slug}`,
        method: "GET",
      }),
    }),
    searchRestaurant: builder.mutation({
      query: (body) => ({
        url: "restaurant/search",
        method: "POST",
        body: body,
      }),
    }),
    getAllRestaurants: builder.query({
      query: () => ({
        url: "restaurant",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetRestaurantQuery,
  useSearchRestaurantMutation,
  useGetAllRestaurantsQuery,
} = restaurantApi;
