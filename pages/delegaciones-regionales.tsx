import { Typography, Box } from "@mui/material";
import { TypographyBody } from "../src/components/general/TypographyHelp";
import ProgramsCards from "../src/components/general/programs/ProgramsCards";
import { Cards } from "../src/components/general/types/types";
import SliderCard from "../src/components/general/SliderCard";

const cardsList: Cards[] = [
    {
        src: "image/programs/delegations/family-solidarity.png",
        title: "Solidaridad en Familia",
    },
    {
        src: "image/programs/delegations/warmth-family.png",
        title: "Calidez en Familia",
    },
    {
        src: "image/programs/delegations/support-municipal-dif.png",
        title: "Apoyo a DIF Municipales",
    },
    {
        src: "image/programs/delegations/regional-delegates.png",
        title: "Delegados Regionales",
    },
]

export default function RegionalDelegations() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "center",
                    width: "90%",
                    gap: 1
                }}
            >
                <ProgramsCards
                    cardsList={cardsList}
                    color="#f4436c"
                    title="PROGRAMAS"
                    sizeWidth="685"
                />

                <Typography
                    sx={{ textAlign: "center", marginTop: 5, fontWeight: "bold" }}
                    variant="h4"
                >
                    ÁREA DE <span style={{ color: "#f4436c" }}>DELEGACIONES REGIONALES</span>
                </Typography>
                <TypographyBody
                    body="En la Dirección de Delegaciones Regionales tenemos por 
                    objetivo llegar a cada rincón del Estado, prueba de ellos es que tenemos 10 oficinas delegacionales activas en las 8 regiones de Oaxaca."/>
                <TypographyBody
                    body="Proponemos y supervisamos los procesos, procedimientos 
                    y acciones de los Programas del Sistema DIF Oaxaca coadyuvando con los Comités Municipales DIF de todo el Estado, atendiendo integralmente la asistencia social."/>
                <Box>
                    <SliderCard />
                </Box>
            </Box>
        </Box>
    )
}