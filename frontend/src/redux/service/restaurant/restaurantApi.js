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
    createRestaurant: builder.mutation({
      query: (body) => ({
        url: "restaurant",
        method: "POST",
        body: body,
      }),
    }),
    deleteRestaurant: builder.mutation({
      query: (id) => ({
        url: "restaurant",
        method: "DELETE",
        body: { id: id },
      }),
    }),
    updateRestaurant: builder.mutation({
      query: (body) => ({
        url: "restaurant",
        method: "PATCH",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetRestaurantQuery,
  useSearchRestaurantMutation,
  useGetAllRestaurantsQuery,
  useCreateRestaurantMutation,
  useDeleteRestaurantMutation,
  useUpdateRestaurantMutation,
} = restaurantApi;
