import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from './usersSlice'
import blogReducer from './blogsSlice'

export const rootReducer = combineReducers({
    users: usersReducer,
    blog: blogReducer
})