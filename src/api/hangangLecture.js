import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const getLecturesApi = createApi({
    reducerPath:'lectures',
    baseQuery : fetchBaseQuery({
        baseUrl:'https://api.hangang.in/'
    }),
    endpoints:(build)=>({
        getLectures:build.query({
            query:(departmentId) => ({url:`lectures?departmentId=${departmentId}`})
        })
    })
})

export const {
    useGetLecturesQuery
} = getLecturesApi