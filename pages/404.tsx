import { Box, Typography } from "@mui/material"

export default function Custom404() {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                minHeight: "100vh",
                gap: 4
            }}
        >
            <Box
                component="img"
                src="image\logo_header_dif.png"
            />
            <Typography
                sx={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "#a4254b"
                }}
            >
                404 | Esta pagina no existe.
            </Typography>
        </Box>
    )
}