import { useState, useEffect } from "react";
import StepperCard from "../src/components/general/StepperCard";
import { Cards } from "../src/components/general/types/types";
import { Box } from "@mui/material";

const cards: Cards = {
    path:
        [
            {
                href: 'image/programs/volunteering/1/1.jpg',
            },
            {
                href: 'image/programs/volunteering/1/2.jpg',
            },
            {
                href: 'image/programs/volunteering/1/3.jpg',
            },
            {
                href: 'image/programs/volunteering/1/4.jpg',
            },
            {
                href: 'image/programs/volunteering/1/5.jpg',
            },
            {
                href: 'image/programs/volunteering/1/6.jpg',
            },
            {
                href: 'image/programs/volunteering/1/7.jpg',
            },
            {
                href: 'image/programs/volunteering/1/8.jpg',
            },
            {
                href: 'image/programs/volunteering/1/9.jpg',
            },
            {
                href: 'image/programs/volunteering/1/10.jpg',
            },
        ]
};

export default function Volunteering() {

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
    }
    if (screenWidth <= 330 && screenWidth > 290) {
        sisewidth2 = "260";
    }
    if (screenWidth <= 350 && screenWidth > 330) {
        sisewidth2 = "280";
    }
    if (screenWidth <= 380 && screenWidth > 350) {
        sisewidth2 = "310";
    }
    if (screenWidth <= 400 && screenWidth > 380) {
        sisewidth2 = "340";
    }
    if (screenWidth <= 450 && screenWidth > 400) {
        sisewidth2 = "370";
    }
    if (screenWidth <= 500 && screenWidth > 450) {
        sisewidth2 = "400";
    }
    if (screenWidth <= 560 && screenWidth > 500) {
        sisewidth2 = "450";
    }
    if (screenWidth <= 680 && screenWidth > 560) {
        sisewidth2 = "500";
    }
    if (screenWidth <= 900 && screenWidth > 680) {
        sisewidth2 = "600";
    }
    if (screenWidth <= 1000 && screenWidth > 900) {
        sisewidth2 = "650";
    }
    if (screenWidth <= 1100 && screenWidth > 1000) {
        sisewidth2 = "800";
    }
    if (screenWidth <= 1200 && screenWidth > 1100) {
        sisewidth2 = "900";
    }
    if (screenWidth > 1200) {
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
            </Box>
        </Box>
    )
}