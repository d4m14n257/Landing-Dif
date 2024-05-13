import { Box, Typography } from "@mui/material"

export default function EthicsCommittee() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "70%",
                    gap: 1
                }}
            >
                <Typography
                    sx={{ textAlign: "center", marginTop: 5, fontWeight: "bold", color: "#a4254b" }}
                    variant="h4"
                >
                    Comité de Ética
                </Typography>
                <iframe id="content_comite" width="100%" height="820px" src="https://sisei.oaxaca.gob.mx:8081/public/principal/6102249473fc8229308e6aec%C3%A7"></iframe>
            </Box>
        </Box>
    )
}