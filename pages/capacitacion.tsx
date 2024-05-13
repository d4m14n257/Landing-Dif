import { Box, Typography, Divider, Chip } from "@mui/material";
import { Cards } from "../src/components/general/types/types";
import { TypographyBody, TypographyBold } from "../src/components/general/TypographyHelp";
import ProgramsCards from "../src/components/general/programs/ProgramsCards";
import { useState, useEffect } from "react";

const cardsList: Cards[] = [
    {
        src: "image/programs/capacitacion/desarrollo-humano.svg",
        title: "DESARROLLO HUMANO",
        path:
            [
                {
                    href: "image/programs/capacitacion/1/1.jpg"
                },
                {
                    href: "image/programs/capacitacion/1/2.jpg"
                },
                {
                    href: "image/programs/capacitacion/1/3.jpg"
                },
                {
                    href: "image/programs/capacitacion/1/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/capacitacion/derechos-humanos.svg",
        title: "DERECHOS HUMANOS",
        path:
            [
                {
                    href: "image/programs/capacitacion/2/1.jpg"
                },
                {
                    href: "image/programs/capacitacion/2/2.jpg"
                },
                {
                    href: "image/programs/capacitacion/2/3.jpg"
                },
                {
                    href: "image/programs/capacitacion/2/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/capacitacion/salud.svg",
        title: "SALUD",
        path:
            [
                {
                    href: "image/programs/capacitacion/3/1.jpg"
                },
                {
                    href: "image/programs/capacitacion/3/2.jpg"
                },
                {
                    href: "image/programs/capacitacion/3/3.jpg"
                },
                {
                    href: "image/programs/capacitacion/3/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/capacitacion/equidad-genero.svg",
        title: "EQUIDAD DE GÉNERO",
        path:
            [
                {
                    href: "image/programs/capacitacion/4/1.jpg"
                },
                {
                    href: "image/programs/capacitacion/4/2.jpg"
                },
                {
                    href: "image/programs/capacitacion/4/3.jpg"
                },
                {
                    href: "image/programs/capacitacion/4/4.jpg"
                },
            ]
    },
]
export default function Training() {

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
                width: "100%",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "90%",
                    gap: 2,
                }}
            >
                <Typography
                    sx={{
                        textAlign: "center",
                        marginTop: 5,
                        fontWeight: "bold",
                        color: "#6bdad5",
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
                    variant="h3"
                >
                    CAPACITACIÓN
                </Typography>

                <TypographyBody
                    body="La unidad de capacitación, como asistencia social, tiene el objetivo de impulsar el desarrollo de capacidades de personas 
                    en situación de vulnerabilidad, así como promover capacidades laborales del personal del sistema DIF del Estado de Oaxaca, 
                    a través de capacitaciones y vinculaciones interinstitucionales, buscando incrementar la calidad de vida de las personas y de 
                    los servicios que brinda el sistema por medio de 3 ejes."
                />
                <Box>
                    <TypographyBold title="ACTIVIDADES DE LA COORDINADORA DE CAPACITACIÓN" />
                    <ul>
                        <li>
                            <TypographyBody body="Coordinar y promover acciones de profesionalización al personal del Sistema DIF Oaxaca." />
                        </li>
                        <li>
                            <TypographyBody body="Coordinar y promover talleres, conferencias y pláticas encaminadas al mejoramiento de los problemas sociales de la localidad, comunidad o región del Estado, que así lo solicite." />
                        </li>
                        <li>
                            <TypographyBody body="Implementar, coordinar y promover acciones en tema de perspectiva y equidad de género, en pro de la erradicación de la violencia de las mujeres." />
                        </li>
                        <li>
                            <TypographyBody body="Impartición de talleres, conferencias y pláticas en los distintos centros educativos o comunidades que requieran el servicio." />
                        </li>
                        <li>
                            <TypographyBody body="Coordinar y promover las acciones de la sede de profesionalización en temas de estándares de competencia." />
                        </li>
                        <li>
                            <TypographyBody body="Coordinar, promocionar las videoconferencias de DIF NACIONAL dirigidas al personal del sistema." />
                        </li>
                        <li>
                            <TypographyBody body="Gestionar y promover cursos en línea para el personal de la institución." />
                        </li>
                        <li>
                            <TypographyBody body="Coordinar y promover acciones de capacitación y profesionalización en vinculación con las Direcciones del Sistema." />
                        </li>
                    </ul>
                    <TypographyBody body="Los temas de capacitación son:" />
                </Box>
                <ProgramsCards
                    cardsList={cardsList}
                    color="#6bdad5"
                    sizeWidth="685"
                    resize={{
                        marginTop: 2,
                        height: 60,
                        '@media screen and (max-width: 750px)': {
                            height: 50,
                        },
                        '@media screen and (max-width: 650px)': {
                            height: 40,
                        },
                        '@media screen and (max-width: 550px)': {
                            height: 35,
                        },
                        '@media screen and (max-width: 460px)': {
                            height: 30,
                        },
                        '@media screen and (max-width: 420px)': {
                            height: 25,
                        },
                        '@media screen and (max-width: 350px)': {
                            height: 22,
                        },

                    }}
                    rebuild={{
                        borderTopRightRadius: 20,
                        borderBottomLeftRadius: 20,
                    }}
                />
                <TypographyBody body="La Coordinación de capacitación cuenta con un Centro de Evaluación. (Sede de certificación)." />
                <TypographyBold title="OBJETIVO" />
                <Box>
                    <ul>
                        <li>
                            <TypographyBody
                                body="Profesionalizar a los servidores públicos a través de los procesos de alineación, evaluación y certificación de 
                            competencias laborales del CONOCER (Consejo Nacional de Normalización y Certificación de Competencias Laborales), 
                            que resulten en la calidad de los servicios que se brindan."
                            />
                        </li>
                        <br></br>
                        <TypographyBold title="Los estándares que actualmente se imparten en la sede de profesionalización son los siguientes:" />
                        <li>
                            <TypographyBody body="EC0028. Prestación del servicio de orientación para la integración familiar a nivel preventivo." />
                        </li>
                        <li>
                            <TypographyBody body="EC0076. Evaluación de la competencia de candidatos con base en Estándares de Competencia." />
                        </li>
                        <li>
                            <TypographyBody body="EC0105. Atención al ciudadano en el sector público." />
                        </li>
                        <li>
                            <TypographyBody body="EC0217. Impartición de cursos de formación del capital humano de manera presencial grupal." />
                        </li>
                        <li>
                            <TypographyBody body="EC0435. Prestación de servicios para la atención, cuidado y desarrollo integral de las niñas y los niños en Centros de Atención Infantil." />
                        </li>
                    </ul>
                </Box>

                <Divider textAlign="left" sx={{ textAlign: "center" }}>
                    <Chip
                        label="NUESTRAS CAPACITACIONES"
                        sx={{ background: "#6bdad5", fontWeight: "bold", color: "white" }}
                    />
                </Divider>
                <Box
                    sx={{
                        "@media screen and (max-width: 1050px)": {
                            display: "none",
                        },
                    }}
                >
                    <Box
                        sx={{
                            "@media screen and (max-width: 1200px)": {
                                gap: 10,
                            },
                            "@media screen and (max-width: 1100px)": {
                                gap: 5,
                            },
                            display: "flex",
                            flexDirection: "row",
                            gap: 15,
                            justifyContent: "space-evenly",
                        }}
                    >
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/Oe0yWm4TAZw"
                            title="Desinfección de superficies en área de rehabilitación."
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/FttNqeZzT5E"
                            title="Medidas preventivas ante el covid 19"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </Box>
                    <Box
                        sx={{
                            "@media screen and (max-width: 1200px)": {
                                gap: 10,
                            },
                            "@media screen and (max-width: 1100px)": {
                                gap: 5,
                            },
                            display: "flex",
                            flexDirection: "row",
                            gap: 15,
                            justifyContent: "space-evenly",
                        }}
                    >
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/k-QVT90K_u0"
                            title="Correcta desinfección en áreas de rehabilitación. parte 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/aN_rBll103E"
                            title="Tipos de agresiones - ponente: Lic.Psicólogo Jairo olmedo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </Box>
                    <Box
                        sx={{
                            "@media screen and (max-width: 1200px)": {
                                gap: 10,
                            },
                            "@media screen and (max-width: 1100px)": {
                                gap: 5,
                            },
                            display: "flex",
                            flexDirection: "row",
                            gap: 15,
                            justifyContent: "space-evenly",
                        }}
                    >
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/ZSXkqmDMKMA"
                            title="Manejo de residuos en terapia física y rehabilitación."
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/e68pApb9BpA"
                            title="Gestión emocional en adolescentes durante el confinamiento"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </Box>
                    <Box
                        sx={{
                            "@media screen and (max-width: 1200px)": {
                                gap: 10,
                            },
                            "@media screen and (max-width: 1100px)": {
                                gap: 5,
                            },
                            display: "flex",
                            flexDirection: "row",
                            gap: 15,
                            justifyContent: "space-evenly",
                        }}
                    >
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/6uBNav-_YHA"
                            title="Estrés y ansiedad en tiempos de confinamiento"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/TUh72IvWxo8"
                            title="Ética profesional"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
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
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/Oe0yWm4TAZw"
                            title="Desinfección de superficies en área de rehabilitación."
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/FttNqeZzT5E"
                            title="Medidas preventivas ante el covid 19"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/k-QVT90K_u0"
                            title="Correcta desinfección en áreas de rehabilitación. parte 2"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/aN_rBll103E"
                            title="Tipos de agresiones - ponente: Lic.Psicólogo Jairo olmedo"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/ZSXkqmDMKMA"
                            title="Manejo de residuos en terapia física y rehabilitación."
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/e68pApb9BpA"
                            title="Gestión emocional en adolescentes durante el confinamiento"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/6uBNav-_YHA"
                            title="Estrés y ansiedad en tiempos de confinamiento"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                        <iframe
                            width={width1}
                            height={height1}
                            src="https://www.youtube.com/embed/TUh72IvWxo8"
                            title="Ética profesional"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}