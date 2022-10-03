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
        fetch('/blogs', { mode: 'no-cors' })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setBlogList(json)
            })
            .catch(error => console.log(error.message))

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