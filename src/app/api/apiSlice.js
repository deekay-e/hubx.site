import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http;//localhost:3003' }),
  tagTypes: ['Project', 'User'],
  endpoints: builder => ({})
})