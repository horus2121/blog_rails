import React from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export const ToggleColorModeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            size='lg'
            colorScheme='teal'
            sx={{
                pos: 'fixed',
                bottom: '3rem',
                left: '2rem',
                zIndex: 1,
            }}
            onClick={toggleColorMode}
            aria-label={""} />
    )
}