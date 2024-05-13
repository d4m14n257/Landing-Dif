import { useState, useEffect } from "react";
import StepperCard from "../src/components/general/StepperCard";
import ProgramsCards from "../src/components/general/programs/ProgramsCards";
import { Cards } from "../src/components/general/types/types";
import { Box } from "@mui/material";

const cards: Cards = {
    path:
        [
            {
                href: 'image/programs/prodennao/banner/1.jpg',
            },
            {
                href: 'image/programs/prodennao/banner/2.jpg',
            },
            {
                href: 'image/programs/prodennao/banner/3.jpg',
            },
            {
                href: 'image/programs/prodennao/banner/4.jpg',
            },
            {
                href: 'image/programs/prodennao/banner/5.jpg'
            },
            {
                href: 'image/programs/prodennao/banner/6.jpg'
            },
            {
                href: 'image/programs/prodennao/banner/7.jpg'
            },
            {
                href: 'image/programs/prodennao/banner/8.jpg'
            },
        ]
};

const cardsList: Cards[] = [
    {
        src: "image/programs/prodennao/menu/1.jpg",
        title: "¿Lo ves o NO lo quieres ver?",
        path:
            [
                {
                    href: "image/programs/prodennao/menu/1/1.jpg"
                },
                {
                    href: "image/programs/prodennao/menu/1/2.jpg"
                },
                {
                    href: "image/programs/prodennao/menu/1/3.jpg"
                },
                {
                    href: "image/programs/prodennao/menu/1/4.jpg"
                },
            ]
    },
    {
        src: "image/programs/prodennao/menu/2.jpg",
        title: "Niñez Libre",
        path:
            [
                {
                    href: "image/programs/prodennao/menu/2/1.jpg"
                },
                {
                    href: "image/programs/prodennao/menu/2/2.jpg"
                },
            ]
    },
    {
        src: "image/programs/prodennao/menu/3.jpg",
        title: "Rompe el Silencio",
        path:
            [
                {
                    href: "image/programs/prodennao/menu/3/1.jpg"
                },
            ]
    },
]


export default function Prodennao() {

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

    let sisewidth2 = "1070"

    if (screenWidth <= 290) {
        sisewidth2 = "230";
        width1 = "230";
        height1 = "130"
    }
    if (screenWidth <= 330 && screenWidth > 290) {
        sisewidth2 = "260";
        width1 = "260";
        height1 = "140"
    }
    if (screenWidth <= 350 && screenWidth > 330) {
        sisewidth2 = "280";
        width1 = "280";
        height1 = "140"
    }
    if (screenWidth <= 380 && screenWidth > 350) {
        sisewidth2 = "310";
        width1 = "310";
        height1 = "150"
    }
    if (screenWidth <= 400 && screenWidth > 380) {
        sisewidth2 = "340";
        width1 = "340";
        height1 = "150"
    }
    if (screenWidth <= 450 && screenWidth > 400) {
        sisewidth2 = "370";
        width1 = "370";
        height1 = "160"
    }
    if (screenWidth <= 500 && screenWidth > 450) {
        sisewidth2 = "400";
        width1 = "400";
        height1 = "190"
    }
    if (screenWidth <= 560 && screenWidth > 500) {
        sisewidth2 = "450";
        width1 = "450";
        height1 = "220"
    }
    if (screenWidth <= 680 && screenWidth > 560) {
        sisewidth2 = "500";
        width1 = "500";
        height1 = "250"
    }
    if (screenWidth <= 900 && screenWidth > 680) {
        sisewidth2 = "600";
        width1 = "600";
        height1 = "300";
    }
    if (screenWidth <= 1000 && screenWidth > 900) {
        sisewidth2 = "650";
        width1 = "600";
        height1 = "300";
    }
    if (screenWidth <= 1100 && screenWidth > 1000) {
        sisewidth2 = "800";
        width1 = "600";
        height1 = "300";
    }
    if (screenWidth <= 1200 && screenWidth > 1100) {
        sisewidth2 = "900";
        width1 = "600";
        height1 = "300";
    }
    if (screenWidth > 1200) {
        width1 = "600";
        height1 = "300";
        sisewidth2 = "1070"
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
                <StepperCard
                    path={cards.path}
                    sizeWidth={sisewidth2}
                />
                <iframe width={width1} height={height1} src="https://www.youtube.com/embed/2VVRXRQrd4E"
                    title="PRODENNAO" allow="accelerometer; autoplay; clipboard-write;
                encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <ProgramsCards
                    cardsList={cardsList}
                    color="#212121"
                    title="CAMPAÑAS"
                    sizeWidth="685"
                />
            </Box>
        </Box>
    )
}