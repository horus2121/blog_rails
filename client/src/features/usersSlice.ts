import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { User } from "../types";

const initialState = {
    isLoggedIn: false,
    username: '',
    email: '',
    password: ''
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logoutUser(state) {
            state.isLoggedIn = false,
                state.username = '',
                state.username = '',
                state.password = ''
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.pending, (state, action: any) => {
            console.log("Loading...")
        }).addCase(loginUser.fulfilled, (state, action: any) => {
            console.log("Fulfilled...")
            const { username, email } = action.payload.user
            if (!action.payload.errors) {
                state.isLoggedIn = true
                state.username = username
                state.email = email
            }
        }).addCase(loginUser.rejected, (state, action: any) => {
            console.log("Rejected...")
        }).addCase(fetchUser.pending, (state, action: any) => {
            console.log("Rejected...")
        }).addCase(fetchUser.fulfilled, (state, action: any) => {
            console.log("Rejected...")
        }).addCase(fetchUser.rejected, (state, action: any) => {
            console.log("Rejected...")
        })
    },
})

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
    const res = await fetch('/me')

    return res
})

export const loginUser = createAsyncThunk('users/loginUser', async (user: User) => {

    const res = await fetch('/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: user.username,
            password: user.password
        })
    })
    const json = res.json()

    return json
})

export const { logoutUser } = usersSlice.actions

export default usersSlice.reducer