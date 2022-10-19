import { Box, Flex, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

import { Blog } from '../../types';

import { BlogPreviewCard } from './BlogPreviewCard';

export const BlogPreviewList = () => {
    const blogIDs = useSelector((state: RootState) => state.users.blogPosts)

    const [blogs, setBlogs] = useState<Blog[]>([])

    const fetchBlogs = async () => {
        const res = await fetch('/me')
        const json = res.json()
        console.log(json)

        return json
    }


    useEffect(() => {
        fetchBlogs()
            .then(user => setBlogs([...user.blogs]))
            .catch(error => console.log(error));

    }, [blogIDs])

    return (
        <Box mt={8} mb={16}>
            <Flex justifyContent='center'>
                <Heading
                    sx={{
                        textTransform: 'uppercase',
                        mb: 8,
                        fontSize: '5xl'
                    }}>
                    Blog List
                </Heading>
            </Flex>


            {blogs.map((blog) => {
                return <BlogPreviewCard key={blog.id} blog={blog} />
            })}
        </Box>
    )
}