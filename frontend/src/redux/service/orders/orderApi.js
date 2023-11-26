import { ApiSlice } from "../../api/apiSlice";

export const orderApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addOrder: builder.mutation({
      query: (body) => ({
        url: "order",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useAddOrderMutation } = orderApi;
