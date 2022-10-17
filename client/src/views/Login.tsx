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
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AppDispatch } from '../features/store'

import { RootState } from '../features/store'
import { loginUser } from '../features/usersSlice'

export const Login = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate()
    const user = useSelector((state: RootState) => state.users)

    const [username, setUsername] = useState<String>(user.username)
    const [password, setPassword] = useState<String>(user.password)


    const handleLogin = (event: any) => {
        event.preventDefault();

        let user = { username: username, password: password }
        setUsername("")
        setPassword("")

        dispatch(loginUser(user))
    }

    const handleSignUp = () => {
        navigate('/signup')
    }

    return (
        <Container>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type='text' placeholder='Username' value={username.toString()} onChange={(e) => setUsername(e.target.value)} />
                <FormHelperText>Please enter your username.</FormHelperText>
                <FormErrorMessage></FormErrorMessage>
                {/* 
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='Email' />
                <FormHelperText>We'll never share your email.</FormHelperText> */}

                <FormLabel>Password</FormLabel>
                <Input type='text' placeholder='Password' value={password.toString()} onChange={(e) => setPassword(e.target.value)} />
                <FormHelperText>Please enter your password.</FormHelperText>

                <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                    onClick={handleLogin}
                >
                    Log In
                </Button>

                <Button
                    mt={4}
                    ml={4}
                    colorScheme='teal'
                    type='submit'
                    onClick={handleSignUp}
                >
                    Sign Up
                </Button>
            </FormControl>
        </Container>
    )
}