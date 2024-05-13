import { useEffect, useState } from "react";
import { Typography, Box, Grid, CardActionArea, Card, CardContent } from "@mui/material";
import { Cards } from "../types/types";
import ModalCards from "./ModalCards";

export default function ProgramsCards(props) {
    const { cardsList, color, title, sizeWidth, resize, rebuild } = props;

    let sizeWidth2 = sizeWidth

    useEffect(() => {
        if (cardsList) {
            setGridSize(12 / cardsList.length)
        }
    }, [cardsList])

    useEffect(() => {
        if (title == "CAMPAÑAS")
            setPrefix("NUESTRAS")
    }, [title])

    useEffect(() => {
        if (rebuild) {
            setBoxStyle({ ...boxStyle, ...rebuild })
        }
    }, [rebuild])

    useEffect(() => {
        if (resize) {
            setMedia(resize)
        }
    }, [resize])

    const [open, setOpen] = useState(false)
    const [selectCard, setSelectCard] = useState(null)
    const [gridSize, setGridSize] = useState(0)
    const [prefix, setPrefix] = useState("NUESTROS")
    const [boxStyle, setBoxStyle] = useState({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: color,
        color: "white",
        height: "100%",
        width: "100%"
    })
    const [media, setMedia] = useState({
        marginTop: 1,
        width: "95%",
        alignContent: "center"
    })
    const handleOpen = (card: Cards) => {
        if (card.href) {
            window.open(card.href, '_blank');
        }
        else if (card.path) {
            setSelectCard(card)
            setOpen(true)
        }
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

    if (screenWidth < 370) {
        sizeWidth2 = "195";
    }
    if (screenWidth <= 480 && screenWidth > 370) {
        sizeWidth2 = "290";
    }
    if (screenWidth <= 600 && screenWidth > 480) {
        sizeWidth2 = "390";
    }
    if (screenWidth <= 750 && screenWidth > 600) {
        sizeWidth2 = "500";
    }
    if (screenWidth <= 900 && screenWidth > 750) {
        sizeWidth2 = "650";
    }
    if (screenWidth > 900) {
        sizeWidth2 = sizeWidth;
    }



    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2
            }}
        >
            {title && <Typography sx={{
                textAlign: "center", marginTop: 3, fontWeight: "bold", fontSize: 48,
                '@media screen and (max-width: 700px)': {
                    fontSize: 43,
                },
                '@media screen and (max-width: 450px)': {
                    fontSize: 38,
                },
                '@media screen and (max-width: 380px)': {
                    fontSize: 30,
                },
                '@media screen and (max-width: 290px)': {
                    fontSize: 27,
                },
            }}>
                {prefix} <span style={{ color: color }}>{title}</span>
            </Typography>}
            <Grid container spacing={0.5} textAlign="center">
                {cardsList.map((card, index) => (
                    <Grid item xs={gridSize} key={index}>
                        <CardActionArea
                            onClick={() => {
                                handleOpen(card)
                            }}
                            sx={{ height: "100%" }}
                        >
                            <Card
                                sx={boxStyle}
                            >
                                <Box
                                    component="img"
                                    src={card.src}
                                    sx={media}
                                />
                                <CardContent>
                                    <Typography sx={{
                                        textAlign: "center", fontWeight: "bold", fontSize: 16,
                                        '@media screen and (max-width: 770px)': {
                                            fontSize: 14,
                                            fontWeight: "light"
                                        },
                                        '@media screen and (max-width: 600px)': {
                                            fontSize: 12,
                                            fontWeight: "light"
                                        },
                                        '@media screen and (max-width: 500px)': {
                                            fontSize: 10,
                                            fontWeight: "light"
                                        },
                                        '@media screen and (max-width: 400px)': {
                                            fontSize: 8,
                                            fontWeight: "light"
                                        },
                                        '@media screen and (max-width: 350px)': {
                                            fontSize: 6,
                                            fontWeight: "light"
                                        },
                                    }}>
                                        {card.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
            {open &&
                <ModalCards
                    open={open}
                    handleClose={handleClose}
                    card={selectCard}
                    sizeWidth={sizeWidth2}
                />}
        </Box>
    );
}