import {
    Input,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Container,
    Textarea,
} from '@chakra-ui/react'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addBlog, flushBlogs } from '../features/blogsSlice'
import { AppDispatch } from '../features/store'

import { RootState } from '../features/store'

export const NewBlog = () => {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const blog = useSelector((state: RootState) => state.blog)

    const [title, setTitle] = useState(blog.title)
    const [description, setDescription] = useState(blog.description)
    const [content, setContent] = useState(blog.content)

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const blog = { title: title, description: description, content: content }
        setTitle('')
        setDescription('')
        setContent('')

        dispatch(addBlog(blog))
        navigate('/')
    }

    useEffect(() => {

        dispatch(flushBlogs())
        setTitle('')
        setDescription('')
        setContent('')

    }, [])

    return (
        <Container>
            <FormControl>
                <FormLabel>Title</FormLabel>
                <Input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <FormHelperText>Please give a title for the post.</FormHelperText>
                <FormErrorMessage></FormErrorMessage>

                <FormLabel>Description</FormLabel>
                <Input type='text' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <FormHelperText>Describe your post in short.</FormHelperText>

                <FormLabel>Content</FormLabel>
                <Textarea placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} />
                <FormHelperText>Write your post here.</FormHelperText>

                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </FormControl>
        </Container>
    )
}