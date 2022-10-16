import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from './usersSlice'
import blogsReducer from './blogsSlice'

export const rootReducer = combineReducers({
    users: usersReducer,
    blogs: blogsReducer
})