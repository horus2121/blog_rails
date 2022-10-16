import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    description: '',
    content: ''
}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchBlog.fulfilled, (state, action) => {
            const { title, description, content } = action.payload.blog
            state.title = title
            state.description = description
            state.content = content
        })
    }
})

const fetchBlog = createAsyncThunk('blogs/fetchBlog', async (blog: any) => {
    const res = await fetch('/blogs' + blog.id)
    const json = res.json()

    return json
})

export default blogsSlice.reducer