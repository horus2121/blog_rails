import { Outlet } from "react-router-dom";
import {
    Container,
    Center,
    Text
} from "@chakra-ui/react";

import { AppHeader } from "../components/AppHeader";

export const Layout = () => {
    return (
        <>
            <AppHeader />

            <Container px={4} maxW='5xl' minH='5xl'>
                <Outlet />
            </Container>

            <Center m='2rem 0'>
                <Text>This is the footer.</Text>
            </Center>
        </>
    )
}