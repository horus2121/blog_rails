import {
    Input,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Container,
} from '@chakra-ui/react'
import { useState } from 'react'

interface User {
    username: String,
    email: String,
    password: String
}

export const Login = () => {
    const [username, setUsername] = useState<String>({} as String)
    const [password, setPassword] = useState<String>({} as String)

    const handleLogin = () => {
        fetch('/login',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username,
                    password
                }
                )
            })
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(error => console.log(error))
    }

    return (
        <Container>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type='text' onChange={(e) => e.target.value} />
                <FormHelperText>Please enter a valid username.</FormHelperText>
                <FormErrorMessage></FormErrorMessage>

                <FormLabel>Email address</FormLabel>
                <Input type='email' />
                <FormHelperText>We'll never share your email.</FormHelperText>

                <FormLabel>Password</FormLabel>
                <Input type='text' onChange={(e) => e.target.value} />
                <FormHelperText>Please set up a secure password.</FormHelperText>

                {/* <FormLabel>Password Confirmation</FormLabel>
                <Input type='text' />
                <FormHelperText>Please enter the password again.</FormHelperText> */}

                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    onClick={handleLogin}
                >
                    Submit
                </Button>
            </FormControl>
        </Container>
    )
}