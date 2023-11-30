import { ApiSlice } from "../../api/apiSlice";

export const menuApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllMenu: builder.query({
      query: () => ({
        url: "menu",
        method: "GET",
      }),
    }),
    createMenu: builder.mutation({
      query: (body) => ({
        url: "menu",
        method: "POST",
        body: body,
      }),
    }),
    deleteMenu: builder.mutation({
      query: (id) => ({
        url: "menu",
        method: "DELETE",
        body: { id: id },
      }),
    }),
    updateMenu: builder.mutation({
      query: (body) => ({
        url: "menu",
        method: "PATCH",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAllMenuQuery,
  useCreateMenuMutation,
  useDeleteMenuMutation,
  useUpdateMenuMutation,
} = menuApi;
