import { useEffect, useState } from "react";
import { Box, Typography, Button, Card, CardContent, CardActionArea } from "@mui/material";
import { useRouter } from "next/router";
import { styled } from "@mui/material/styles";

import Carousel from "react-material-ui-carousel";
import TitleLogo from "./TitleLogo";
import ModalCommunique from "./ModalCommunique";

type Communiques = {
    success: boolean,
    message: string
    data: {
        id: number
        title: string
        date: string
        sumary: string
        description: string
        image: string
        zip: string
    }[][] | null
}

type Communique = {
    id: number
    title: string
    date: string
    sumary: string
    description: string
    image: string
    zip: string
}

type Badges = {
    id: number
    title: string
    path: string
    href: string
}



let badges: Badges[][] = [

]
const badges1: Badges[][] = [
    [
        { id: 1001, title: "Desarrollo Familiar", path: "image/badges/family_develop_dif.png", href: "/desarrollo-familiar" },
        { id: 1002, title: "Asistencia Alimentaria", path: "image/badges/food_assistance_dif.png", href: "/asistencia-alimentaria" },
        { id: 1003, title: "PRODENNAO", path: "image/badges/family_attention_dif.png", href: "/prodennao" },
        { id: 1004, title: "Atención Ciudadana", path: "image/badges/people_attention_dif.png", href: "/atencion-ciudadana" },
        { id: 1005, title: "Área Bienestar", path: "image/badges/welfare_dif.png", href: "/bienestar" },
        { id: 1006, title: "Área de Delegaciones", path: "image/badges/delegations_dif.png", href: "/delegaciones-regionales" },
    ],
    [
        { id: 1007, title: "Servicios Itinerantes", path: "image/badges/itinerary_service_dif.png", href: "/servicios-itinerantes" },
        { id: 1008, title: "Voluntariado", path: "image/badges/volunteering_dif.png", href: "/voluntariado" },
        { id: 1009, title: "Capacitación", path: "image/badges/training_dif.png", href: "/capacitacion" },
        { id: 1010, title: "Área Jurídica", path: "image/badges/legal_area_dif.png", href: "/area-juridica" },
        { id: 1011, title: "Área de Vinculación", path: "image/badges/bonding_dif.png", href: "/vinculacion" },
    ]
]
const badges2: Badges[][] = [
    [
        { id: 1001, title: "Desarrollo Familiar", path: "image/badges/family_develop_dif.png", href: "/desarrollo-familiar" },
        { id: 1002, title: "Asistencia Alimentaria", path: "image/badges/food_assistance_dif.png", href: "/asistencia-alimentaria" },
        { id: 1003, title: "PRODENNAO", path: "image/badges/family_attention_dif.png", href: "/prodennao" },
        { id: 1004, title: "Atención Ciudadana", path: "image/badges/people_attention_dif.png", href: "/atencion-ciudadana" },

    ],
    [
        { id: 1005, title: "Área Bienestar", path: "image/badges/welfare_dif.png", href: "/bienestar" },
        { id: 1006, title: "Área de Delegaciones", path: "image/badges/delegations_dif.png", href: "/delegaciones-regionales" },
        { id: 1007, title: "Servicios Itinerantes", path: "image/badges/itinerary_service_dif.png", href: "/servicios-itinerantes" },
        { id: 1008, title: "Voluntariado", path: "image/badges/volunteering_dif.png", href: "/voluntariado" },
    ],
    [
        { id: 1009, title: "Capacitación", path: "image/badges/training_dif.png", href: "/capacitacion" },
        { id: 1010, title: "Área Jurídica", path: "image/badges/legal_area_dif.png", href: "/area-juridica" },
        { id: 1011, title: "Área de Vinculación", path: "image/badges/bonding_dif.png", href: "/vinculacion" },
    ],

]
const badges3: Badges[][] = [
    [
        { id: 1001, title: "Desarrollo Familiar", path: "image/badges/family_develop_dif.png", href: "/desarrollo-familiar" },
        { id: 1002, title: "Asistencia Alimentaria", path: "image/badges/food_assistance_dif.png", href: "/asistencia-alimentaria" },
        { id: 1003, title: "PRODENNAO", path: "image/badges/family_attention_dif.png", href: "/prodennao" },
    ],
    [
        { id: 1004, title: "Atención Ciudadana", path: "image/badges/people_attention_dif.png", href: "/atencion-ciudadana" },
        { id: 1005, title: "Área Bienestar", path: "image/badges/welfare_dif.png", href: "/bienestar" },
        { id: 1006, title: "Área de Delegaciones", path: "image/badges/delegations_dif.png", href: "/delegaciones-regionales" },
    ],
    [
        { id: 1007, title: "Servicios Itinerantes", path: "image/badges/itinerary_service_dif.png", href: "/servicios-itinerantes" },
        { id: 1008, title: "Voluntariado", path: "image/badges/volunteering_dif.png", href: "/voluntariado" },
        { id: 1009, title: "Capacitación", path: "image/badges/training_dif.png", href: "/capacitacion" },
    ],
    [
        { id: 1010, title: "Área Jurídica", path: "image/badges/legal_area_dif.png", href: "/area-juridica" },
        { id: 1011, title: "Área de Vinculación", path: "image/badges/bonding_dif.png", href: "/vinculacion" },
    ]
]

const badges4: Badges[][] = [
    [
        { id: 1001, title: "Desarrollo Familiar", path: "image/badges/family_develop_dif.png", href: "/desarrollo-familiar" },
        { id: 1002, title: "Asistencia Alimentaria", path: "image/badges/food_assistance_dif.png", href: "/asistencia-alimentaria" },
    ],
    [
        { id: 1003, title: "PRODENNAO", path: "image/badges/family_attention_dif.png", href: "/prodennao" },
        { id: 1004, title: "Atención Ciudadana", path: "image/badges/people_attention_dif.png", href: "/atencion-ciudadana" },
    ],
    [
        { id: 1005, title: "Área Bienestar", path: "image/badges/welfare_dif.png", href: "/bienestar" },
        { id: 1006, title: "Área de Delegaciones", path: "image/badges/delegations_dif.png", href: "/delegaciones-regionales" },
    ],
    [
        { id: 1007, title: "Servicios Itinerantes", path: "image/badges/itinerary_service_dif.png", href: "/servicios-itinerantes" },
        { id: 1008, title: "Voluntariado", path: "image/badges/volunteering_dif.png", href: "/voluntariado" },
    ],
    [
        { id: 1009, title: "Capacitación", path: "image/badges/training_dif.png", href: "/capacitacion" },
        { id: 1010, title: "Área Jurídica", path: "image/badges/legal_area_dif.png", href: "/area-juridica" },
    ],
    [
        { id: 1011, title: "Área de Vinculación", path: "image/badges/bonding_dif.png", href: "/vinculacion" },
    ]
]
const badges5: Badges[][] = [
    [
        { id: 1001, title: "Desarrollo Familiar", path: "image/badges/family_develop_dif.png", href: "/desarrollo-familiar" },
    ],
    [
        { id: 1002, title: "Asistencia Alimentaria", path: "image/badges/food_assistance_dif.png", href: "/asistencia-alimentaria" },
    ],
    [
        { id: 1003, title: "PRODENNAO", path: "image/badges/family_attention_dif.png", href: "/prodennao" },
    ],
    [
        { id: 1004, title: "Atención Ciudadana", path: "image/badges/people_attention_dif.png", href: "/atencion-ciudadana" },
    ],
    [
        { id: 1005, title: "Área Bienestar", path: "image/badges/welfare_dif.png", href: "/bienestar" },
    ],
    [
        { id: 1006, title: "Área de Delegaciones", path: "image/badges/delegations_dif.png", href: "/delegaciones-regionales" },
    ],
    [
        { id: 1007, title: "Servicios Itinerantes", path: "image/badges/itinerary_service_dif.png", href: "/servicios-itinerantes" },
    ],
    [
        { id: 1008, title: "Voluntariado", path: "image/badges/volunteering_dif.png", href: "/voluntariado" },
    ],
    [
        { id: 1009, title: "Capacitación", path: "image/badges/training_dif.png", href: "/capacitacion" },
    ],
    [
        { id: 1010, title: "Área Jurídica", path: "image/badges/legal_area_dif.png", href: "/area-juridica" },
    ],
    [
        { id: 1011, title: "Área de Vinculación", path: "image/badges/bonding_dif.png", href: "/vinculacion" },
    ],
]

const Body = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 12
}))


export default function BodyPrograms(props: Communiques) {


    const { success, message, data } = props;
    const router = useRouter()
    const [open, setOpen] = useState(false);
    const [selectCommunique, setSelectCommunique] = useState(null)

    let data8;

    let data2;
    let data3;
    let data4;
    let data5;
    let data6;
    let data7;

    const newArray = [];
    const newArray2 = [];

    for (let i = 0; i < data.length; i += 2) {
        data2 = JSON.stringify(data[i][0])
        if (data[i][1])
            data3 = JSON.stringify(data[i][1])
        if (data[i][2])
            data4 = JSON.stringify(data[i][2])
        if (data.length != i + 1) {
            data5 = JSON.stringify(data[i + 1][0])
            data6 = JSON.stringify(data[i + 1][1])
            data7 = JSON.stringify(data[i + 1][2])
        }

        newArray.push([JSON.parse(data2), JSON.parse(data3)]);
        if (i + 1 < data.length) {
            newArray.push([JSON.parse(data4), JSON.parse(data5)]);
            newArray.push([JSON.parse(data6), JSON.parse(data7)]);
        }
        else
            newArray.push([JSON.parse(data4)])
    }
    for (let i = 0; i < data.length; i += 2) {

        data2 = JSON.stringify(data[i][0])
        if (data[i][1])
            data3 = JSON.stringify(data[i][1])
        if (data[i][2])
            data4 = JSON.stringify(data[i][2])
        if (data.length != i + 1) {
            data5 = JSON.stringify(data[i + 1][0])
            data6 = JSON.stringify(data[i + 1][1])
            data7 = JSON.stringify(data[i + 1][2])
        }

        newArray2.push([JSON.parse(data2)]);
        newArray2.push([JSON.parse(data3)]);
        newArray2.push([JSON.parse(data4)]);
        if (i + 1 < data.length) {
            newArray2.push([JSON.parse(data5)]);
            newArray2.push([JSON.parse(data6)]);
            newArray2.push([JSON.parse(data7)]);
        }

    }

    const handleOpen = (communique: Communique) => {
        setSelectCommunique(communique)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
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
        badges = badges5
    } else
        if (screenWidth < 530) {
            badges = badges4
        } else {
            if (screenWidth < 720) {
                badges = badges3
            } else {
                if (screenWidth < 1070) {
                    badges = badges2
                } else {
                    badges = badges1
                }
            }
        }
    if (screenWidth < 550) {
        data8 = newArray2
    } else {
        if (screenWidth < 720) {
            data8 = newArray
        } else {
            if (screenWidth < 950) {
                data8 = newArray
            } else {
                data8 = data
            }
        }
    }

    return (
        <>
            <Body>
                <TitleLogo
                    title="PROGRAMAS"
                    description="Selecciona cualquier de nuestos programas para conocer mas informacion."
                />
                <Box
                    sx={{ width: "90%" }}
                >
                    <Carousel
                        sx={{

                        }}>
                        {badges.map((page, index) => (
                            <Box
                                key={index + 2000}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly'
                                }}
                            >
                                {page.map((badge) => (
                                    <Box
                                        key={badge.id}
                                    >
                                        <Button
                                            onClick={() => { router.push(badge.href) }}
                                            sx={{
                                                display: "block",
                                                height: 200,
                                                width: 160,
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                                gap: 1,
                                                borderRadius: 5
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={badge.path}
                                                sx={{
                                                    width: 144,
                                                    height: 144
                                                }}
                                            />
                                            <Typography
                                                sx={{
                                                    position: "relative",
                                                    fontSize: 16,
                                                    color: "black",
                                                    fontWeight: "bold",
                                                    textAlign: "center",
                                                    '@media screen and (max-width: 350px)': {
                                                        fontSize: 13,
                                                    },
                                                }}
                                            >
                                                {badge.title}
                                            </Typography>
                                        </Button>
                                    </Box>
                                ))}
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Body>
            <Body>
                <TitleLogo
                    title="ACCIONES DIF"
                    description="En el Sistema Estatal para el Desarrollo Integral de la Familia velamos por el bien común.<br><br>Entérate cómo lo hacemos."
                />
                {success && data.length ?
                    <Carousel
                        sx={{ width: "95%" }}
                    >
                        {data8.map((communiques, index) => (
                            <Box
                                key={index + 2000}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    alignItems: 'start',
                                    justifyContent: 'space-evenly',
                                }}
                            >
                                {communiques.map((communique, idx) => (
                                    <Box
                                        key={communique.id}
                                    >
                                        <Card
                                            key={idx}
                                            sx={{
                                                '@media screen and (max-width: 1300px)': {
                                                    maxWidth: 350, minHeight: 350
                                                },
                                                '@media screen and (max-width: 1200px)': {
                                                    maxWidth: 325, minHeight: 325
                                                },
                                                '@media screen and (max-width: 1150px)': {
                                                    maxWidth: 300, minHeight: 300
                                                },
                                                '@media screen and (max-width: 1050px)': {
                                                    maxWidth: 275, minHeight: 275
                                                },
                                                '@media screen and (max-width: 950px)': {
                                                    maxWidth: 350, minHeight: 350
                                                },
                                                '@media screen and (max-width: 820px)': {
                                                    maxWidth: 300, minHeight: 300
                                                },
                                                '@media screen and (max-width: 700px)': {
                                                    maxWidth: 250, minHeight: 250
                                                },
                                                '@media screen and (max-width: 600px)': {
                                                    maxWidth: 230, minHeight: 230
                                                },
                                                '@media screen and (max-width: 550px)': {
                                                    maxWidth: 250, minHeight: 250
                                                },

                                                maxWidth: 380, boxShadow: 0, minHeight: 380
                                            }}
                                        >
                                            <CardActionArea
                                                onClick={() => { handleOpen(communique) }}
                                            >
                                                <Box
                                                    component="img"
                                                    src="image/frame_images_dif.png"
                                                    sx={{
                                                        '@media screen and (max-width: 1300px)': {
                                                            width: 350, height: 250
                                                        },
                                                        '@media screen and (max-width: 1200px)': {
                                                            width: 325, height: 225
                                                        },
                                                        '@media screen and (max-width: 1150px)': {
                                                            width: 300, height: 200
                                                        },
                                                        '@media screen and (max-width: 1050px)': {
                                                            width: 275, height: 175
                                                        },
                                                        '@media screen and (max-width: 950px)': {
                                                            width: 350, height: 250
                                                        },
                                                        '@media screen and (max-width: 820px)': {
                                                            width: 300, height: 200
                                                        },
                                                        '@media screen and (max-width: 700px)': {
                                                            width: 250, height: 150
                                                        },
                                                        '@media screen and (max-width: 600px)': {
                                                            width: 230, height: 130
                                                        },
                                                        '@media screen and (max-width: 550px)': {
                                                            width: 250, height: 150
                                                        },
                                                        borderRadius: 5,
                                                        width: 380,
                                                        height: 280,
                                                        background: `url('${communique.image}')`,
                                                        backgroundSize: "cover",
                                                    }}
                                                />
                                                <CardContent>
                                                    <Typography
                                                        variant="h5"
                                                        sx={{

                                                            '@media screen and (max-width: 800px)': {
                                                                fontSize: 21,
                                                            }, '@media screen and (max-width: 650px)': {
                                                                fontSize: 19,
                                                            },
                                                            fontWeight: "bold",
                                                            textAlign: "center"
                                                        }}
                                                    >
                                                        {communique.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{ opacity: 0.8, textAlign: "justify" }}
                                                    >
                                                        {communique.sumary}
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Box>
                                ))}
                            </Box>
                        ))}
                    </Carousel> :
                    <Typography
                        variant="h4"
                        sx={{
                            userSelect: 'none',
                            opacity: '0.4'
                        }}
                    >
                        No hay comunicados que mostrar
                    </Typography>
                }
            </Body>
            <Body>
                <Button
                    sx={{
                        marginTop: 2,
                        background: 'linear-gradient(to right, #009ee1, #009542)'
                    }}
                    variant="contained"
                    onClick={() => { router.push('/comunicados') }}
                >
                    Ver más acciones
                </Button>
            </Body>
            {open && <ModalCommunique
                open={open}
                handleClose={handleClose}
                communique={selectCommunique}
            />}
        </>
    );
}