import React from 'react';
import { Link, Text, Button, Box, LinkOverlay, useColorMode } from '@chakra-ui/react';

type ChakraLinkProps = any

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

type ChakraButtonLinkProps = any

export const ChakraButtonLink = (props: ChakraButtonLinkProps) => {
    return (
        <ChakraLink ChakraComponent={Button} noUnderline {...props} />
    )
}