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
    deleteOrder: builder.mutation({
      query: (body) => ({
        url: "order",
        method: "DELETE",
        body: body,
      }),
    }),
    updateOrder: builder.mutation({
      query: (body) => ({
        url: "order",
        method: "PATCH",
        body: body,
      }),
    }),
    updateOrderDelivry:builder.mutation({
      query:(body)=>({
        url:"order/confirm",
        method:"PATCH",
        body:body
      })
    }),
    getOrder: builder.query({
      query: () => ({
        url: "order",
        method: "GET",
      }),
    }),
    getOrderConfirm:builder.query({
      query:()=>({
        url:"order/confirm",
        method:'GET'
      })
    }),
    getOrderDelivryTake:builder.query({
      query:()=>({
        url:"order/delivery",
        method:'GET'
      })
    })
  }),
});

export const {
  useAddOrderMutation ,
  useGetOrderQuery,
  useGetOrderConfirmQuery,
  useDeleteOrderMutation,
  useUpdateOrderMutation,
  useUpdateOrderDelivryMutation,
  useGetOrderDelivryTakeQuery
} = orderApi;
