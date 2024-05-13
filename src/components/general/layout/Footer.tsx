import { Toolbar, Typography, Box } from "@mui/material";
import ColorLabel from "./ColorLabel";
import SocialNetworks from "./SocialNetworks";
import { About } from "../types/types";

const about: About = {
    slogan: "Nadie se queda atrás, nadie se queda afuera",
    address: `Vicente Guerrero 114, Col. Miguel Alemán Valdez, C.P. 68120. Oaxaca de Juárez, Oaxaca.`
}


export default function Footer() {
    return (
        <Box
            sx={{
                position: "sticky",
                borderTopColor: '5px solid #000',
                marginTop: 2,
                top: "100%"
            }}
        >
            <ColorLabel />
            <Toolbar
                sx={{
                    justifyContent: { md: "space-between", xs: "center" },
                    background: "linear-gradient(to right, #009ee1, #009542)",
                    minHeight: "160px !important"
                }}
            >
                <Box
                    component="img"
                    src="image\logo_bottom_dif.png"
                    sx={{
                        display: { xs: "none", md: "block" },
                        marginLeft: 3,
                        marginRight: 2,
                        height: 45
                    }}
                />
                <Box
                    sx={{
                        color: "white",
                        width: "25em"
                    }}
                >
                    <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                    >
                        "{about.slogan.toUpperCase()}"
                    </Typography>
                    <hr />
                    <Typography
                        variant="caption"
                    >
                        {about.address}
                    </Typography>
                </Box>
                <Box sx={{ display: { xs: "none", lg: "block" } }}>
                    <SocialNetworks index={5} />
                </Box>
            </Toolbar>
        </Box>
    )
}