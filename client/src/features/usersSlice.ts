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
    reducers: {},
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
        }).addCase(fetchUsers.pending, (state, action: any) => {
            console.log("Rejected...")
        }).addCase(fetchUsers.fulfilled, (state, action: any) => {
            console.log("Rejected...")
        }).addCase(fetchUsers.rejected, (state, action: any) => {
            console.log("Rejected...")
        })
    },
})

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
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
    // const json = res.json
    // console.log(json)

    return json
}
)

export default usersSlice.reducer