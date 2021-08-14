import { configureStore} from "@reduxjs/toolkit";
import { getLecturesApi } from "../api/hangangLecture";

export const store = configureStore({
    reducer:{
        [getLecturesApi.reducerPath] : getLecturesApi.reducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(getLecturesApi.middleware)
})