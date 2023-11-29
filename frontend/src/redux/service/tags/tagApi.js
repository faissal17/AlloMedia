import { ApiSlice } from "../../api/apiSlice";

export const tagsApi = ApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => ({
        url: "tags",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllTagsQuery } = tagsApi;
