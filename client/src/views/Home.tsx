import { Box, Flex, Heading } from "@chakra-ui/react"

export const Home = () => {
    return (
        <Box mt={8} mb={16}>
            <Flex justifyContent='center'>
                <Heading
                    sx={{
                        textTransform: 'uppercase',
                        mb: 8,
                        fontSize: '5xl'
                    }}>
                    Welcome!
                </Heading>
            </Flex>
        </Box>
    )
}