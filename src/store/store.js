import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer'
import { githubApi } from '../api/githubApi'


const store = configureStore({
reducer: {
user: userReducer,
[githubApi.reducerPath]: githubApi.reducer,
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(githubApi.middleware),
})


export default store