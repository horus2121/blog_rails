import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { User } from "../types";

const initialState = {
    isLoggedIn: false,
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logoutUser(state) {
            state.isLoggedIn = false
            state.username = ''
            state.email = ''
            state.password = ''
            state.passwordConfirmation = ''
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.pending, (state, action: any) => {
            console.log("Loading...")
        }).addCase(loginUser.fulfilled, (state, action: any) => {
            console.log("Fulfilled...")
            if (!action.payload.errors) {
                const { username, email } = action.payload.user

                state.isLoggedIn = true
                state.username = username
                state.email = email
            }
        }).addCase(loginUser.rejected, (state, action: any) => {
            console.log("Rejected...")
        }).addCase(SignUpUser.pending, (state, action: any) => {
            console.log("Loading...")
        }).addCase(SignUpUser.fulfilled, (state, action: any) => {
            console.log("Fullfilled...")
            if (!action.payload.errors) {
                const { username, email } = action.payload.user

                state.isLoggedIn = true
                state.username = username
                state.email = email
            }
        }).addCase(SignUpUser.rejected, (state, action: any) => {
            console.log("Rejected...")
        })
    },
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

export const SignUpUser = createAsyncThunk('users/signUpUser', async (user: User) => {

    const res = await fetch('/signup', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                username: user.username,
                email: user.email,
                password: user.password,
                password_confirmation: user.password_confirmation
            }
        })
    })
    const json = res.json()

    return json
})

export const { logoutUser } = usersSlice.actions

export default usersSlice.reducer