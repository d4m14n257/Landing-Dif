import { Typography, Box } from "@mui/material";
import { TypographyBody } from "../src/components/general/TypographyHelp";
import ProgramsCards from "../src/components/general/programs/ProgramsCards";
import { Cards } from "../src/components/general/types/types";
import { useState, useEffect } from "react";

let cards: Cards[]

let band = false

const cards2: Cards[] = [
    {
        src: "image/programs/roaming-services/menu/2.png",
        title: "Ginecología",
    },
    {
        src: "image/programs/roaming-services/menu/3.png",
        title: "M. Infecciosa",
        path:
            [
                {
                    href: "image/programs/roaming-services/2/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/2/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/2/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/2/4.jpg"
                },
                {
                    href: "image/programs/roaming-services/2/5.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/5.png",
        title: "Medicina General",
        path:
            [
                {
                    href: "image/programs/roaming-services/3/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/3/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/3/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/3/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/6.png",
        title: "Odontología",
        path:
            [
                {
                    href: "image/programs/roaming-services/4/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/4/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/4/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/4/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/7.png",
        title: "Oftlamología",
        path:
            [
                {
                    href: "image/programs/roaming-services/5/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/5/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/5/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/5/4.jpg"
                },
            ]
    },
]

const cards3: Cards[] = [
    {
        src: "image/programs/roaming-services/menu/8.png",
        title: "Pediatría",
        path:
            [
                {
                    href: "image/programs/roaming-services/6/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/6/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/6/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/6/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/10.png",
        title: "Vitaminas",
        path:
            [
                {
                    href: "image/programs/roaming-services/7/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/7/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/7/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/7/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/1.png",
        title: "Don Mecánico",
        path:
            [
                {
                    href: "image/programs/roaming-services/8/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/8/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/8/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/8/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/4.png",
        title: "Ludoteca Móvil",
        path:
            [
                {
                    href: "image/programs/roaming-services/9/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/9/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/9/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/9/4.jpg"
                },
            ]
    },
]

const cardsList: Cards[] = [
    {
        src: "image/programs/roaming-services/menu/2.png",
        title: "Ginecología",
    },
    {
        src: "image/programs/roaming-services/menu/3.png",
        title: "M. Infecciosa",
        path:
            [
                {
                    href: "image/programs/roaming-services/2/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/2/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/2/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/2/4.jpg"
                },
                {
                    href: "image/programs/roaming-services/2/5.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/5.png",
        title: "Medicina General",
        path:
            [
                {
                    href: "image/programs/roaming-services/3/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/3/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/3/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/3/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/6.png",
        title: "Odontología",
        path:
            [
                {
                    href: "image/programs/roaming-services/4/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/4/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/4/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/4/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/7.png",
        title: "Oftlamología",
        path:
            [
                {
                    href: "image/programs/roaming-services/5/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/5/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/5/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/5/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/8.png",
        title: "Pediatría",
        path:
            [
                {
                    href: "image/programs/roaming-services/6/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/6/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/6/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/6/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/10.png",
        title: "Vitaminas",
        path:
            [
                {
                    href: "image/programs/roaming-services/7/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/7/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/7/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/7/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/1.png",
        title: "Don Mecánico",
        path:
            [
                {
                    href: "image/programs/roaming-services/8/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/8/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/8/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/8/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/roaming-services/menu/4.png",
        title: "Ludoteca Móvil",
        path:
            [
                {
                    href: "image/programs/roaming-services/9/1.jpg"
                },
                {
                    href: "image/programs/roaming-services/9/2.jpg"
                },
                {
                    href: "image/programs/roaming-services/9/3.jpg"
                },
                {
                    href: "image/programs/roaming-services/9/4.jpg"
                },
            ]
    },
]

export default function RoamingServices() {

    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);

    const updateScreenSize = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    };

    useEffect(() => {
        updateScreenSize();
        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    if (screenWidth < 350) {
        cards = cards2
        band = true
    }
    if (screenWidth <= 530 && screenWidth > 350) {
        cards = cards2
        band = true
    }
    if (screenWidth <= 850 && screenWidth > 530) {
        cards = cards2
        band = true
    }
    if (screenWidth <= 1070 && screenWidth > 850) {
        cards = cardsList
        band = false
    }
    if (screenWidth > 1070) {
        cards = cardsList
        band = false
    }



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
                    cardsList={cards}
                    color="#ff9e18"
                    title="PROGRAMAS"
                    sizeWidth="685"
                />
                {band && <ProgramsCards
                    cardsList={cards3}
                    color="#ff9e18"
                    // title="PROGRAMAS"
                    sizeWidth="685"
                />}

                <Typography
                    sx={{ textAlign: "center", marginTop: 5, fontWeight: "bold" }}
                    variant="h4"
                >
                    SERVICIOS <span style={{ color: "#ff9e18" }}>ITINERANTES</span>
                </Typography>
                <TypographyBody
                    body="La dirección de servicios Itinerantes inicia operaciones el 21 de marzo de 2017 con la Unidad de Ginecología y 
                    el 23 de mayo amplia sus servicios con la integración de las Unidades de Oftalmología y Medicina General logrando 
                    impactar en más de 200 localidades del Estado de Oaxaca. Para el 14 de mayo en un esfuerzo conjunto de Gobierno del 
                    Estado, DIF Estatal, Monte de Piedad y la Secretaría de Salud se suman las Unidades de: Odontología,
                    Don Mecánico, Ludoteca, Vitaminita, Atención Ciudadana y Pediatría; con el encomienda de ser un gobierno cercano a 
                    la gente, brindando servicios de calidad y calidez humana."/>
            </Box>
        </Box>
    )
}