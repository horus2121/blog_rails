import {
    Input,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Container,
} from '@chakra-ui/react'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { actionCreators } from '../redux'
import { RootState } from '../redux/store'

export interface User {
    logged_in?: Boolean,
    id?: Number,
    username: String,
    email?: String,
    password?: String
}

export const Login = () => {
    const [username, setUsername] = useState<String>({} as String)
    const [password, setPassword] = useState<String>({} as String)

    const dispatch = useDispatch();
    const { loginUser } = bindActionCreators(actionCreators, dispatch)
    const user = useSelector((state: RootState) => state.user)

    const handleSubmit = (event: any) => {
        event.preventDefault();

        let data = { username, password }

        loginUser(data)
    }

    return (
        <Container>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                <FormHelperText>Please enter a valid username.</FormHelperText>
                <FormErrorMessage></FormErrorMessage>
                {/* 
                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='Email' />
                <FormHelperText>We'll never share your email.</FormHelperText> */}

                <FormLabel>Password</FormLabel>
                <Input type='text' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                <FormHelperText>Please set up a secure password.</FormHelperText>

                {/* <FormLabel>Password Confirmation</FormLabel>
                <Input type='text' />
                <FormHelperText>Please enter the password again.</FormHelperText> */}

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