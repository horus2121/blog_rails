import { Box, Flex, Heading } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { BlogPreviewCard } from './BlogPreviewCard';

interface Blog {
    title: String,
    content: Text,
}

interface Blogs {
    blog: Blog[]
}

export const BlogPreviewList = () => {
    const [blogs, setBlogs] = useState<Blogs>({} as Blogs)

    useEffect(() => {
        fetch('http://localhost:3000/blogs/1', { mode: 'no-cors' })
            .then(res => res.json())
            .then(json => console.log(json))
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

            {Array(10).fill(0).map((index) => (
                <BlogPreviewCard key={index} />
            ))}
        </Box>
    )
}