import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    addTask: builder.mutation({
      query: (task: { title: string, description: string, boardId: string, columnType: string }) => ({
        url: '/tasks',
        method: 'POST',
        body: task,
      }),
    }),
    getTaskById: builder.query({
      query: (id: string) => `/tasks/${id}`,
    }),
    deleteTask: builder.mutation({
      query: (id: string) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
})

export const {
  useAddTaskMutation,
  useGetTaskByIdQuery,
  useDeleteTaskMutation,
} = taskApi

export default taskApi