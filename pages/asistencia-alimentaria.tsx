import { Typography, Box } from "@mui/material";
import { TypographyBody } from "../src/components/general/TypographyHelp";
import ProgramsCards from "../src/components/general/programs/ProgramsCards";
import { Cards } from "../src/components/general/types/types";
import SliderCard from "../src/components/general/SliderCard";
import { useState, useEffect } from "react";
import ListFiles from "../src/components/general/ListFiles";

const cardsList: Cards[] = [
    {
        src: "image/programs/foodAssistance/cards/Mesa de trabajo-2.png",
        title: "Alimentación escolar",
        href: "https://difoaxaca.gob.mx/public/AsistenciaAlimentaria/EXTRA_ROP_ALIMENTACION_ESCOLAR.pdf"
    },
    {
        src: "image/programs/foodAssistance/cards/Mesa de trabajo-4.png",
        title: "Programa de atención alimentaria en los primeros 1000 días",
        href: "https://difoaxaca.gob.mx/public/AsistenciaAlimentaria/EXTRA_ROP_1000_DIAS.pdf"
    },
    {
        src: "image/programs/foodAssistance/cards/Mesa de trabajo-3.png",
        title: "Programa de atención alimentaria a grupos prioritarios",
        href: "https://difoaxaca.gob.mx/public/AsistenciaAlimentaria/EXTRA_ROP_ATENCION_ALIMENTARIA_GRUPOS_PRIORITARIOS.pdf"
    },
    {
        src: "image/programs/foodAssistance/cards/Mesa de trabajo-1.png",
        title: "Atención social alimentaria a personas en situación de emergencia",
        href: "https://difoaxaca.gob.mx/public/AsistenciaAlimentaria/EXTRA_ROP_EMERGENCIA_DESASTRE.pdf"
    },
    {
        src: "image/programs/foodAssistance/cards/Mesa de trabajo-5.png",
        title: "Comedores populares para el bienestar",
        href: "https://difoaxaca.gob.mx/public/AsistenciaAlimentaria/EXTRA_ROP_PSBC.pdf"
    },
]

const itemList = [
    {
        title: "Reglas de operación de comedores populares para el bienestar.",
        href: "https://difoaxaca.gob.mx/public/AsistenciaAlimentaria/EXTRA_ROP_CPB.pdf"
    },
    {
        title: 'Reglas de operación del programa de atención a grupos prioritarios.',
        href: 'https://difoaxaca.gob.mx/public/AsistenciaAlimentaria/EXT-REGLASDIF-2023-04-04.pdf'
    }
]

export default function FoodAssistance() {

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
                }}>
                <ProgramsCards
                    cardsList={cardsList}
                    color="#f49a28"
                    title="PROGRAMAS"
                    sizeWidth="685"
                />
                <Typography
                    sx={{ textAlign: "center", marginTop: 5, fontWeight: "bold" }}
                    variant="h4"
                >
                    ÁREA DE <span style={{ color: "#f49a28" }}>DESARROLLO FAMILIAR Y SOCIAL</span>
                </Typography>
                <TypographyBody
                    body="En la Dirección de Operación de Asistencia Alimentaria, se diseñan, planean, ejecutan y evalúan Programas de Asistencia Social Alimentaria y de Desarrollo Comunitario 
                    conforme a la Estrategia Integral de Asistencia Social Alimentaria y de Desarrollo Comunitario (EIASADC), para contribuir a la seguridad alimentaria de personas de atención prioritaria."/>

                <Box
                    sx={{
                        "@media screen and (max-width: 1050px)": {
                            display: "none",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 15,
                            "@media screen and (max-width: 1200px)": {
                                gap: 10,
                            },
                            "@media screen and (max-width: 1100px)": {
                                gap: 5,
                            },
                        }}
                    >
                        <iframe width={width1} height={height1} src="https://www.youtube.com/embed/GwBtphW0YDU" title="Recetario DIF 01 Quintoniles la sierra con frijoles"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width={width1} height={height1} src="https://www.youtube.com/embed/qz5OFsvvdD4" title="Recetario DIF 05 Frijoles con hierba de conejo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 15,
                            "@media screen and (max-width: 1200px)": {
                                gap: 10,
                            },
                            "@media screen and (max-width: 1100px)": {
                                gap: 5,
                            },
                        }}
                    >
                        <iframe width={width1} height={height1} src="https://www.youtube.com/embed/NN0cu0jwjGM" title="Recetario DIF 08 Pescadillas de atún"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width={width1} height={height1} src="https://www.youtube.com/embed/B3X7J3O5z2o" title="Recetario DIF 12 Molotes rellenos de frijol con queso"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </Box>
                </Box>
                <Box
                    sx={{
                        "@media screen and (min-width: 1050px)": {
                            display: "none",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                            gap: 5,
                            justifyContent: "center",
                            '@media screen and (max-width: 350px)': {
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            },
                        }}
                    >
                        <iframe width={width1} height={height1} src="https://www.youtube.com/embed/GwBtphW0YDU" title="Recetario DIF 01 Quintoniles la sierra con frijoles"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width={width1} height={height1} src="https://www.youtube.com/embed/qz5OFsvvdD4" title="Recetario DIF 05 Frijoles con hierba de conejo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width={width1} height={height1} src="https://www.youtube.com/embed/NN0cu0jwjGM" title="Recetario DIF 08 Pescadillas de atún"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        <iframe width={width1} height={height1} src="https://www.youtube.com/embed/B3X7J3O5z2o" title="Recetario DIF 12 Molotes rellenos de frijol con queso"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </Box>
                </Box>
                <Box>
                    <ListFiles
                        itemlist={itemList}
                    />
                    <SliderCard />
                </Box>
            </Box>
        </Box>
    )
}