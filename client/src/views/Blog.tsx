import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { BlogPreviewCard } from "../components/Blog/BlogPreviewCard"
import { fetchBlog, flushBlogs } from "../features/blogsSlice"
import { AppDispatch, RootState } from "../features/store"

export const Blog = () => {
    const dispatch: AppDispatch = useDispatch()
    const blog = useSelector((state: RootState) => state.blog)

    let { id } = useParams()

    useEffect(() => {

        if (id) {
            dispatch(fetchBlog(+id))
        }

    }, [])

    return (
        <BlogPreviewCard blog={blog} />
    )
}