import { Box, Flex, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { BlogPreviewCard } from './BlogPreviewCard';

export interface Blog {
    title: String,
    description: Text,
    content: Text,
}

export const BlogPreviewList = () => {
    const [blogList, setBlogList] = useState<Blog[]>([])

    useEffect(() => {

        const fetchBlogList = async () => {
            const res = await fetch('/blogs', { mode: 'no-cors' })
            const json = res.json()
            return json
        }
        console.log(blogList)

        fetchBlogList().then(json => setBlogList(json))

    }, [])

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

            {blogList.map((blog, index) => (
                <BlogPreviewCard key={index} blog={blog} />
            ))}
        </Box>
    )
}