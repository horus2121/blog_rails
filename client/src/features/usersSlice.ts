import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { User } from "../types";

interface State {
    isLoggedIn: boolean,
    id: number | null,
    username: string,
    email: string,
    blogPosts: number[],
    comments: number[]
}

const initialState: State = {
    isLoggedIn: false,
    id: null,
    username: '',
    email: '',
    blogPosts: [],
    comments: []
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logoutUser(state) {
            state.isLoggedIn = false
            state.id = null
            state.username = ''
            state.email = ''
            state.blogPosts = []
            state.comments = []
        }
    },
    extraReducers: builder => {
        builder.addCase(loginUser.pending, () => {
            console.log("Loading...")
        }).addCase(loginUser.fulfilled, (state, action) => {
            console.log("Fulfilled...")
            if (!action.payload.errors) {
                const { id, username, email } = action.payload.user
                const { blogs, comments } = action.payload

                state.isLoggedIn = true
                state.id = id
                state.username = username
                state.email = email
                blogs?.map((blog: any) => state.blogPosts.push(blog.id))
                comments?.map((comment: any) => state.comments.push(comment.id))
            }
        }).addCase(loginUser.rejected, () => {
            console.log("Rejected...")
        }).addCase(SignUpUser.pending, () => {
            console.log("Loading...")
        }).addCase(SignUpUser.fulfilled, (state, action) => {
            console.log("Fullfilled...")
            if (!action.payload.errors) {
                const { id, username, email } = action.payload.user

                state.isLoggedIn = true
                state.id = id
                state.username = username
                state.email = email
            }
        }).addCase(SignUpUser.rejected, () => {
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