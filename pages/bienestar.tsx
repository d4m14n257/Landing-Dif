import { Typography, Box } from "@mui/material";
import { TypographyBody } from "../src/components/general/TypographyHelp";
import ProgramsCards from "../src/components/general/programs/ProgramsCards";
import { Cards } from "../src/components/general/types/types";
import SliderCard from "../src/components/general/SliderCard";

const cardsList: Cards[] = [
    {
        src: "image/programs/welfare/apoyos-funcionales.png",
        title: "Apoyos Funcionales",
        path:
            [
                {
                    href: "image/programs/welfare/1/1.jpg"
                },
                {
                    href: "image/programs/welfare/1/2.jpg"
                },
                {
                    href: "image/programs/welfare/1/3.jpg"
                },
                {
                    href: "image/programs/welfare/1/4.jpg"
                },
                {
                    href: "image/programs/welfare/1/5.jpg"
                },
                {
                    href: "image/programs/welfare/1/6.jpg"
                },
                {
                    href: "image/programs/welfare/1/7.jpg"
                },
                {
                    href: "image/programs/welfare/1/8.jpg"
                },
            ]
    },
    {
        src: "image/programs/welfare/canna.png",
        title: "CANNA",
        path:
            [
                {
                    href: "image/programs/welfare/2/1.jpg"
                },
                {
                    href: "image/programs/welfare/2/2.jpg"
                },
                {
                    href: "image/programs/welfare/2/3.jpg"
                },
                {
                    href: "image/programs/welfare/2/4.jpg"
                },
                {
                    href: "image/programs/welfare/2/5.jpg"
                },
                {
                    href: "image/programs/welfare/2/6.jpg"
                },
                {
                    href: "image/programs/welfare/2/7.jpg"
                },
            ]
    },
    {
        src: "image/programs/welfare/cecyd.png",
        title: "CECYD",
        path:
            [
                {
                    href: "image/programs/welfare/3/1.jpg"
                },
                {
                    href: "image/programs/welfare/3/2.jpg"
                },
                {
                    href: "image/programs/welfare/3/3.jpg"
                },
                {
                    href: "image/programs/welfare/3/4.jpg"
                },
                {
                    href: "image/programs/welfare/3/5.jpg"
                },
                {
                    href: "image/programs/welfare/3/6.jpg"
                },
                {
                    href: "image/programs/welfare/3/7.jpg"
                },
            ]
    },
    {
        src: "image/programs/welfare/credencializacion.png",
        title: "Credencialización",
        path:
            [
                {
                    href: "image/programs/welfare/4/1.jpg"
                },
                {
                    href: "image/programs/welfare/4/2.jpg"
                },
                {
                    href: "image/programs/welfare/4/3.jpg"
                },
                {
                    href: "image/programs/welfare/4/4.jpg"
                },
                {
                    href: "image/programs/welfare/4/5.jpg"
                },
                {
                    href: "image/programs/welfare/4/6.jpg"
                },
                {
                    href: "image/programs/welfare/4/7.jpg"
                },
            ]
    },
    {
        src: "image/programs/welfare/ortesis.png",
        title: "Órtesis y Prótesis",
        path:
            [
                {
                    href: "image/programs/welfare/5/1.jpg"
                },
                {
                    href: "image/programs/welfare/5/2.jpg"
                },
                {
                    href: "image/programs/welfare/5/3.jpg"
                },
                {
                    href: "image/programs/welfare/5/4.jpg"
                },
                {
                    href: "image/programs/welfare/5/5.jpg"
                },
                {
                    href: "image/programs/welfare/5/6.jpg"
                },
                {
                    href: "image/programs/welfare/5/7.jpg"
                },
            ]
    },
    {
        src: "image/programs/welfare/sencibilizacion.png",
        title: "Sensibilización",
        path:
            [
                {
                    href: "image/programs/welfare/6/1.jpg"
                },
                {
                    href: "image/programs/welfare/6/2.jpg"
                },
                {
                    href: "image/programs/welfare/6/3.jpg"
                },
                {
                    href: "image/programs/welfare/6/4.jpg"
                },
                {
                    href: "image/programs/welfare/6/5.jpg"
                },
                {
                    href: "image/programs/welfare/6/6.jpg"
                },
                {
                    href: "image/programs/welfare/6/7.jpg"
                },
            ]
    },
    {
        src: "image/programs/welfare/ubr.png",
        title: "UBR",
        path:
            [
                {
                    href: "image/programs/welfare/7/1.jpg"
                },
                {
                    href: "image/programs/welfare/7/2.jpg"
                },
                {
                    href: "image/programs/welfare/7/3.jpg"
                },
                {
                    href: "image/programs/welfare/7/4.jpg"
                },
                {
                    href: "image/programs/welfare/7/5.jpg"
                },
                {
                    href: "image/programs/welfare/7/6.jpg"
                },
                {
                    href: "image/programs/welfare/7/7.jpg"
                },
                {
                    href: "image/programs/welfare/7/8.jpg"
                },
            ]
    },
    {
        src: "image/programs/welfare/unidad-deportiva.png",
        title: "Unidad Deportiva",
        path:
            [
                {
                    href: "image/programs/welfare/8/1.jpg"
                },
                {
                    href: "image/programs/welfare/8/2.jpg"
                },
                {
                    href: "image/programs/welfare/8/3.jpg"
                },
                {
                    href: "image/programs/welfare/8/4.jpg"
                },
                {
                    href: "image/programs/welfare/8/5.jpg"
                },
                {
                    href: "image/programs/welfare/8/6.jpg"
                },
                {
                    href: "image/programs/welfare/8/7.jpg"
                },
                {
                    href: "image/programs/welfare/8/8.jpg"
                },
            ]
    },
    {
        src: "image/programs/welfare/vale.png",
        title: "Vale",
        path:
            [
                {
                    href: "image/programs/welfare/9/1.jpg"
                },
                {
                    href: "image/programs/welfare/9/2.jpg"
                },
                {
                    href: "image/programs/welfare/9/3.jpg"
                },
                {
                    href: "image/programs/welfare/9/4.jpg"
                },
                {
                    href: "image/programs/welfare/9/5.jpg"
                },
                {
                    href: "image/programs/welfare/9/6.jpg"
                },
                {
                    href: "image/programs/welfare/9/7.jpg"
                },
            ]
    },
]

export default function Welfare() {
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
                    color="#00ae8d"
                    title="PROGRAMAS"
                    sizeWidth="685"
                />

                <Typography
                    sx={{
                        textAlign: "center", marginTop: 5, fontWeight: "bold",
                        '@media screen and (max-width: 450px)': {
                            fontSize: 33,
                        },
                        '@media screen and (max-width: 380px)': {
                            fontSize: 30,
                        },
                        '@media screen and (max-width: 290px)': {
                            fontSize: 25,
                        },
                    }}
                    variant="h4"
                >
                    ÁREA DE <span style={{ color: "#00ae8d" }}>BIENESTAR</span>
                </Typography>
                <TypographyBody
                    body="Brindamos Atención, servicios y programas a todas las personas con discapacidad del Estado de Oaxaca. 
                    Queremos mejorar la calidad de vida de las personas con algún tipo de discapacidad y lograr con ello hacer de Oaxaca un Estado incluyente."/>
                <Box
                    sx={{
                        alignItems: 'center'
                    }}>
                    <SliderCard />
                </Box>
            </Box>
        </Box>
    )
}