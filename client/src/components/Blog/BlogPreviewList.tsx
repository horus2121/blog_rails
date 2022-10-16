import { Box, Flex, Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';

import { BlogPreviewCard } from './BlogPreviewCard';

export const BlogPreviewList = () => {
    const blog = useSelector((state: RootState) => state.blogs)

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

            <BlogPreviewCard blog={blog} />
        </Box>
    )
}