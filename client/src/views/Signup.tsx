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
import { SignUpUser } from '../features/usersSlice'

export const Signup = () => {
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((state: RootState) => state.users)

    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const [passwordConfirmation, setPasswordConfirmation] = useState(user.password)

    const handleSubmit = (event: any) => {
        event.preventDefault();

        const user = { username: username, email: email, password: password, password_confirmation: passwordConfirmation }
        setUsername("")
        setEmail("")
        setPassword("")
        setPasswordConfirmation("")

        dispatch(SignUpUser(user))
        navigate('/')
    }

    return (
        <Container>
            <FormControl>
                <FormLabel>Username</FormLabel>
                <Input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <FormHelperText>Please enter a valid username.</FormHelperText>
                <FormErrorMessage></FormErrorMessage>

                <FormLabel>Email address</FormLabel>
                <Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <FormHelperText>We'll never share your email.</FormHelperText>

                <FormLabel>Password</FormLabel>
                <Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <FormHelperText>Please set up a secure password.</FormHelperText>

                <FormLabel>Password Confirmation</FormLabel>
                <Input type='password' placeholder='Password Confirmation' value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
                <FormHelperText>Please enter the password again.</FormHelperText>

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