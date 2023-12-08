import { ApiSlice } from "../../api/apiSlice";

export const delivery = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addDelivery: builder.mutation({
      query: (body) => ({
        url: "deliveryperson",
        method: "POST",
        body: body,
      }),
    }),
    getDelivery: builder.query({
      query: () => ({
        url: "deliveryperson",
        method: "GET",
      }),
    }),
    deleteDelivery: builder.mutation({
      query: (body) => ({
        url: "deliveryperson",
        method: "DELETE",
        body: body,
      }),
    }),
    updateDelivery: builder.mutation({
      query: (body) => ({
        url: "deliveryperson",
        method: "PATCH",
        body: body,
      }),
    }),
  }),
});

export const {
  useAddDeliveryMutation,
  useGetDeliveryQuery,
  useDeleteDeliveryMutation,
  useUpdateDeliveryMutation
} = delivery;
