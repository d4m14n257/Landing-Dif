import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

import { Box, Container, Toolbar } from "@mui/material";

export default function Layout({ children }) {

    return (
        <Container maxWidth={false} disableGutters>
            <Header />
            <Toolbar sx={{
                height: 106.5
            }}
            />
            <Box
                component="main"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    minHeight: "100vh"
                }}
            >
                {children}
            </Box>
            <Box
                component="footer"
            >
                <Footer />
            </Box>
        </Container>
    )
}