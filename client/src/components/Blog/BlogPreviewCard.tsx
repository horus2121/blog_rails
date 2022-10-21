import { Box, HStack, VStack, Text, Heading, LinkBox, Image, Button } from '@chakra-ui/react';

import { ChakraLink, ChakraButtonLink } from '../ChakraLink';

import { Blog } from '../../types';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../features/store';
import { deleteBlog } from '../../features/blogsSlice';

interface Props {
    blog: Blog
}

export const BlogPreviewCard = ({ blog }: Props) => {

    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    let { id } = useParams()

    const handleDeletePost = (e: any) => {
        id = e.target.value

        if (id) {
            dispatch(deleteBlog(+id))
        }

        navigate('/bloglist')
    }

    return (
        <VStack as={LinkBox} spacing='1rem' mb='2rem'>
            <Box>
                <Image src='https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                    rounded='full'
                    width='100%'
                    alt=''
                    objectFit='cover' />
            </Box>

            <Heading>
            </Heading>
            <ChakraLink ChakraComponent={Heading} href={'/blog/' + blog.id} overlay>
                {blog.title}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ChakraLink>

            <HStack spacing='1rem' wrap='wrap' textTransform='uppercase'>
                <Text>Thu 18 2000</Text>
                <Text>100 views</Text>
                <Text>4 min read</Text>
            </HStack>

            <Text noOfLines={3}>
                {blog.description}
            </Text>

            {id &&
                <Text>
                    {blog.content}
                </Text>
            }

            {/* <Button textTransform='uppercase'>
                Read More
            </Button> */}
            {id ?
                <ChakraButtonLink href={'/blog/' + blog.id + '/edit'}>Edit Post</ChakraButtonLink>
                :
                <ChakraButtonLink href={'/blog/' + blog.id}>Read More</ChakraButtonLink>
            }

            {id &&
                <Button value={id} onClick={handleDeletePost}>Delete Post</Button>
            }
        </VStack>

    )
}