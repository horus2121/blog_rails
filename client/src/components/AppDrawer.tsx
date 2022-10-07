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
    Heading
} from '@chakra-ui/react';

import { ChakraLink } from './ChakraLink';
import { ToggleColorModeButton } from './ToggleColorModeButton';

interface DrawerListProps {
    onClose?: () => void
}

const DrawerList = ({ onClose }: DrawerListProps) => {
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
    return (
        <Drawer size='xs' placement='left' isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />

            <DrawerContent>
                <DrawerCloseButton />

                <DrawerHeader py={8}>
                    <Heading>Blogs!</Heading>
                </DrawerHeader>

                <DrawerBody>
                    <DrawerList />
                </DrawerBody>

                <ToggleColorModeButton />

            </DrawerContent>
        </Drawer>
    )
}