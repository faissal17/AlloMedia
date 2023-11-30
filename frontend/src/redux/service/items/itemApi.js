import { ApiSlice } from "../../api/apiSlice";

export const itemsApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getItem: builder.query({
      query: () => ({
        url: "items",
        method: "GET",
      }),
    }),
    addItem: builder.mutation({
      query: (body) => ({
        url: "items",
        method: "POST",
        body,
      }),
    }),
    deleteItem: builder.mutation({
      query: (body) => ({
        url: `items`,
        method: "DELETE",
        body: body,
      }),
    }),
    updateItem: builder.mutation(
      {
        query: (body) => ({
          url: `item`,
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
  useGetItemQuery,
  useAddItemMutation,
  useDeleteItemMutation,
  useUpdateItemMutation,
} = itemsApi;
