import React from 'react';
import {
    Flex,
    Spacer,
    Box,
    IconButton,
    Image,
    useDisclosure
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    SearchIcon
} from '@chakra-ui/icons';

import { AppDrawer } from './AppDrawer';
import { ChakraLink } from './ChakraLink';

interface CustomIconButtonProps {
    Icon: any,
    onClick?: () => void
}

const CustomIconButton = ({ Icon, ...props }: CustomIconButtonProps) => {
    return <IconButton aria-label={''} icon={<Icon />} {...props} size='lg' ml='1rem' />
}

const HamburgerNav = () => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <>
            <CustomIconButton Icon={HamburgerIcon} onClick={onOpen} />
            {isOpen && <AppDrawer isOpen={isOpen} onClose={onClose} />}
        </>
    )
}

const Logo = () => {
    const dimension = 70;

    return (
        <ChakraLink href='/'>
            <Image
                src='https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGljb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
                height={dimension}
                width={dimension}
                alt='Heyyyyy' />
        </ChakraLink>
    )
}

export const AppHeader = () => {
    return (
        <Box px='2rem' pt='5rem'>
            <Flex alignItems='center'>
                <Logo />

                <Spacer />

                <CustomIconButton Icon={SearchIcon} />
                <HamburgerNav />
            </Flex>
        </Box>
    )
}