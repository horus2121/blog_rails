import React from 'react';
import { Link, Button, Box, LinkOverlay } from '@chakra-ui/react';

interface ChakraLinkProps {
    href: any,
    ChakraComponent?: any,
    children: React.ReactNode,
    chakraLinkProps?: any,
    noUnderline?: boolean,
    overlay?: boolean,
    sx?: any,
    onClick?: () => void
}

export const ChakraLink = ({ href, ChakraComponent = Box, children, chakraLinkProps = {}, noUnderline, overlay, ...props }: ChakraLinkProps) => {

    const LinkComponent = overlay ? LinkOverlay : Link

    if (noUnderline) {
        chakraLinkProps._hover = chakraLinkProps._hover || {}
        chakraLinkProps._hover.textDecoration = 'none'
    }

    return (
        <LinkComponent href={href} {...chakraLinkProps}>
            <ChakraComponent {...props}>{children}</ChakraComponent>
        </LinkComponent>
    )
}

interface ChakraButtonLinkProps extends ChakraLinkProps { }

export const ChakraButtonLink = (props: ChakraButtonLinkProps) => {
    return (
        <ChakraLink ChakraComponent={Button} noUnderline {...props} />
    )
}