import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Blog } from "../types";

interface State {
    id: number | null,
    title: string,
    description: string,
    content: string,
    comments: number[]
}

const initialState: State = {
    id: null,
    title: '',
    description: '',
    content: '',
    comments: []
}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        flushBlogs(state) {
            state.id = null
            state.title = ''
            state.description = ''
            state.content = ''
            state.comments = []
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchBlog.fulfilled, (state, action) => {
            if (!action.payload.errors) {
                const { id, title, description, content } = action.payload.blog

                state.id = id
                state.title = title
                state.description = description
                state.content = content
            }
        }).addCase(addBlog.fulfilled, (state) => state)
            .addCase(editBlog.fulfilled, (state) => state)
            .addCase(deleteBlog.fulfilled, (state) => state)
    }
})

export const fetchBlog = createAsyncThunk('blogs/fetchBlog', async (blogID: number) => {
    const res = await fetch('/blogs/' + blogID)
    const json = res.json()

    return json
})

export const addBlog = createAsyncThunk('blogs/addBlog', async (blog: Blog) => {

    const res = await fetch('/blogs', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            blog: {
                title: blog.title,
                description: blog.description,
                content: blog.content
            }
        })
    })
    const json = res.json()

    return json
})

export const editBlog = createAsyncThunk('blogs/editBlog', async (blog: Blog) => {

    const res = await fetch('/blogs/' + blog.id, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            blog: {
                title: blog.title,
                description: blog.description,
                content: blog.content
            }
        })
    })
    const json = res.json()

    return json
})

export const deleteBlog = createAsyncThunk('blogs/deleteBlog', async (blogID: number) => {

    const res = await fetch('/blogs/' + blogID, { method: "DELETE" })
    const json = res.json()
    console.log(json)

    return json
})

export const { flushBlogs } = blogsSlice.actions

export default blogsSlice.reducer