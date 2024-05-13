import { Typography, Box } from "@mui/material";
import { TypographyBody } from "../src/components/general/TypographyHelp";
import ProgramsCards from "../src/components/general/programs/ProgramsCards";
import { Cards } from "../src/components/general/types/types";
import SliderCard from "../src/components/general/SliderCard";
import { useState, useEffect } from "react";

const cardsList: Cards[] = [
    {
        src: "image/programs/family/cards/learning_be.png",
        title: "Aprender a ser",
        path:
            [
                {
                    href: "image/programs/family/learning_be/1.jpg"
                },
                {
                    href: "image/programs/family/learning_be/2.jpg"
                },
                {
                    href: "image/programs/family/learning_be/3.jpg"
                },
                {
                    href: "image/programs/family/learning_be/4.jpg"
                },
                {
                    href: "image/programs/family/learning_be/5.jpg"
                },
                {
                    href: "image/programs/family/learning_be/6.jpg"
                },
                {
                    href: "image/programs/family/learning_be/7.jpg"
                },
                {
                    href: "image/programs/family/learning_be/8.jpg"
                },
            ]
    },
    {
        src: "image/programs/family/cards/oldest_people.png",
        title: "Personas mayores",
        path:
            [
                {
                    href: "image/programs/family/oldest_people/1.jpg"
                },
                {
                    href: "image/programs/family/oldest_people/2.jpg"
                },
                {
                    href: "image/programs/family/oldest_people/3.jpg"
                },
                {
                    href: "image/programs/family/oldest_people/4.jpg"
                },
                {
                    href: "image/programs/family/oldest_people/5.jpg"
                },
                {
                    href: "image/programs/family/oldest_people/6.jpg"
                },
            ]
    },
    {
        src: "image/programs/family/cards/staying_infantile.png",
        title: "Estancia infantil",
        path:
            [
                {
                    href: "image/programs/family/staying_infantile/1.jpg"
                },
                {
                    href: "image/programs/family/staying_infantile/2.jpg"
                },
                {
                    href: "image/programs/family/staying_infantile/3.jpg"
                },
                {
                    href: "image/programs/family/staying_infantile/4.jpg"
                },
                {
                    href: "image/programs/family/staying_infantile/5.jpg"
                },
                {
                    href: "image/programs/family/staying_infantile/6.jpg"
                },
                {
                    href: "image/programs/family/staying_infantile/7.jpg"
                },
                {
                    href: "image/programs/family/staying_infantile/8.jpg"
                },
            ]
    },
    {
        src: "image/programs/family/cards/cadi.png",
        title: "CADI",
        path:
            [
                {
                    href: "image/programs/family/cadi/1.jpg"
                },
                {
                    href: "image/programs/family/cadi/2.jpg"
                },
                {
                    href: "image/programs/family/cadi/3.jpg"
                },
                {
                    href: "image/programs/family/cadi/4.jpg"
                },
                {
                    href: "image/programs/family/cadi/5.jpg"
                },
                {
                    href: "image/programs/family/cadi/6.jpg"
                },
                {
                    href: "image/programs/family/cadi/7.jpg"
                },
                {
                    href: "image/programs/family/cadi/8.jpg"
                },
            ]
    },
    {
        src: "image/programs/family/cards/caic.png",
        title: "CAIC",
        path:
            [
                {
                    href: "image/programs/family/caic/1.jpg"
                },
                {
                    href: "image/programs/family/caic/2.jpg"
                },
                {
                    href: "image/programs/family/caic/3.jpg"
                },
                {
                    href: "image/programs/family/caic/4.jpg"
                },
                {
                    href: "image/programs/family/caic/5.jpg"
                },
                {
                    href: "image/programs/family/caic/6.jpg"
                },
                {
                    href: "image/programs/family/caic/7.jpg"
                },
                {
                    href: "image/programs/family/caic/8.jpg"
                },
            ]
    }
]


export default function FamilyDevelopment() {

    let width1, height1
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

    if (screenWidth <= 290) {
        width1 = "230";
        height1 = "130"
    }
    if (screenWidth <= 330 && screenWidth > 290) {
        width1 = "260";
        height1 = "140"
    }
    if (screenWidth <= 350 && screenWidth > 330) {
        width1 = "280";
        height1 = "140"
    }
    if (screenWidth <= 380 && screenWidth > 350) {
        width1 = "310";
        height1 = "150"
    }
    if (screenWidth <= 400 && screenWidth > 380) {
        width1 = "340";
        height1 = "150"
    }
    if (screenWidth <= 450 && screenWidth > 400) {
        width1 = "370";
        height1 = "160"
    }
    if (screenWidth <= 500 && screenWidth > 450) {
        width1 = "400";
        height1 = "190"
    }
    if (screenWidth <= 560 && screenWidth > 500) {
        width1 = "450";
        height1 = "220"
    }
    if (screenWidth <= 680 && screenWidth > 560) {
        width1 = "500";
        height1 = "250"
    }
    if (screenWidth <= 1050 && screenWidth > 680) {
        width1 = "600";
        height1 = "300";
    }
    if (screenWidth <= 1150 && screenWidth > 1050) {
        width1 = "480";
        height1 = "240";
    }
    if (screenWidth <= 1250 && screenWidth > 1150) {
        width1 = "500";
        height1 = "250";
    }
    if (screenWidth < 1350 && screenWidth > 1250) {
        width1 = "530";
        height1 = "260";
    }
    if (screenWidth >= 1350) {
        width1 = "600";
        height1 = "300";
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
                    alignItems: "center",
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
                    ÁREA DE <span style={{ color: "#f4436c" }}>DESARROLLO FAMILIAR Y SOCIAL</span>
                </Typography>
                <TypographyBody
                    body="En la Dirección de Desarrollo Familiar y Social, estamos encargados de coordinar y dirigir acciones para promover y difundir el respeto de los derechos humanos de las personas en estado de vulnerabilidad, principalmente familias, niñas, niños, adolescentes y personas mayores." />
                <TypographyBody
                    body="Trabajamos en equipo con los sectores social, privado y público a nivel federal, estatal y municipal, para fomentar la integración social y comunitaria a través de programas de asistencia social y educativa." />
                <iframe width={width1} height={height1} src="https://www.youtube.com/embed/Q2SO9P7RtkU" title="Las personas mayores son motivo de unión y amor familiar"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <Box>
                    <SliderCard />
                </Box>
            </Box>
        </Box>
    )
}