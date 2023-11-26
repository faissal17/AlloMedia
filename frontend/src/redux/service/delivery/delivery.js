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
  }),
});

export const { useAddDeliveryMutation } = delivery;
