import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

const boardApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    addBoard: builder.mutation({
      query: (board: { name: string }) => ({
        url: '/boards',
        method: 'POST',
        body: board,
      }),
    }),
  }),
});