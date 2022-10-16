import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    List,
    ListItem,
    Heading,
    Button
} from '@chakra-ui/react';
import { useDispatch, useSelector } from "react-redux";

import { ChakraLink } from './ChakraLink';
import { ToggleColorModeButton } from './ToggleColorModeButton';
import { AppDispatch, RootState } from "../features/store";
import { logoutUser } from "../features/usersSlice";

interface DrawerListProps {
    onClose?: () => void
}

const listItems = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'BlogList',
        path: '/bloglist'
    }
]

const DrawerList = ({ onClose }: DrawerListProps) => {

    return (
        <List>
            {
                listItems.map((item, index) => (
                    <ChakraLink
                        key={index}
                        ChakraComponent={ListItem}
                        sx={{ display: 'block', mt: 5, fontSize: 'lg' }}
                        href={item.path}
                        chakraLinkProps={{ _focus: { outline: 0 } }}
                        onClick={onClose}
                    >
                        {item.name}
                    </ChakraLink>
                ))
            }
        </List>
    )
}

interface AppDrawerProps {
    isOpen: boolean,
    onClose: () => void
}

export const AppDrawer = ({ isOpen, onClose }: AppDrawerProps) => {

    const dispatch: AppDispatch = useDispatch()
    const user = useSelector((state: RootState) => state.users)

    const handleLogout = () => {
        dispatch(logoutUser())
    }

    return (
        <Drawer size='xs' placement='left' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader py={8}>
                    <Heading>
                        {user.username ? 'Hi ' + user.username + '!' : 'Hi there!'}
                    </Heading>
                </DrawerHeader>

                <DrawerBody>
                    <DrawerList />
                </DrawerBody>

                <ToggleColorModeButton />

                <Button onClick={handleLogout}>Log Out</Button>

            </DrawerContent>
        </Drawer>
    )
}