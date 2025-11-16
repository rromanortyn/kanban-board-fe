import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    getBoards: builder.query({
      query: () => '/boards',
    }),
    getBoardById: builder.query({
      query: (id: string) => `/boards/${id}`,
    }),
    addBoard: builder.mutation({
      query: (board: { name: string }) => ({
        url: '/boards',
        method: 'POST',
        body: board,
      }),
    }),
  }),
})

export const {
  useAddBoardMutation,
  useGetBoardsQuery,
  useGetBoardByIdQuery,
} = boardApi

export default boardApi
