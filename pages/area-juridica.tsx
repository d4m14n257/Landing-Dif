import { Typography, Box } from "@mui/material"
import { TypographyBody } from "../src/components/general/TypographyHelp"
import ProgramsCards from "../src/components/general/programs/ProgramsCards"
import { Cards } from "../src/components/general/types/types"
import SliderCard from "../src/components/general/SliderCard"

const cardsList: Cards[] = [
    {
        src: "image/programs/legalArea/asesoria-juridica.jpg",
        title: "Asesoría Jurídica",
        path:
            [
                {
                    href: "image/programs/legalArea/1/1.jpg"
                },
                {
                    href: "image/programs/legalArea/1/2.jpg"
                },
                {
                    href: "image/programs/legalArea/1/3.jpg"
                },
                {
                    href: "image/programs/legalArea/1/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/legalArea/constancia-actividades.jpg",
        title: "Constancia de Actividaes",
        path:
            [
                {
                    href: "image/programs/legalArea/2/1.jpg"
                },
                {
                    href: "image/programs/legalArea/2/2.jpg"
                },
                {
                    href: "image/programs/legalArea/2/3.jpg"
                },
                {
                    href: "image/programs/legalArea/2/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/legalArea/sujetos-vulnerables.jpg",
        title: "Apoyo a Sujetos Vulnerables",
        path:
            [
                {
                    href: "image/programs/legalArea/3/1.jpg"
                },
                {
                    href: "image/programs/legalArea/3/2.jpg"
                },
                {
                    href: "image/programs/legalArea/3/3.jpg"
                },
                {
                    href: "image/programs/legalArea/3/4.jpg"
                },
            ]
    },
]

export default function LegalArea() {
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
                    color="#92579d"
                    title="PROGRAMAS"
                    sizeWidth="685"
                />

                <Typography
                    sx={{ textAlign: "center", marginTop: 5, fontWeight: "bold" }}
                    variant="h4"
                >
                    SERVICIOS <span style={{ color: "#92579d" }}>ITINERANTES</span>
                </Typography>
                <TypographyBody
                    body="La Dirección Jurídica del Sistema DIF Oaxaca, es la encarga de representar jurídicamente a este Sistema, 
                    así como supervisar todos los actos jurídicos necesarios para regularizar, legalizar e instrumentar las actividades del DIF Oaxaca."/>
                <TypographyBody
                    body="De igual manera, brindamos asistencia jurídica a todas las personas que así lo soliciten." />
                <Box>
                    <SliderCard />
                </Box>
            </Box>
        </Box>
    )
}