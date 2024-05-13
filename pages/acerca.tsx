import { Typography, Box } from "@mui/material"
import ColorLabel from "../src/components/general/layout/ColorLabel"
import Carousel from "react-material-ui-carousel"

const image = [
    { path: "image/banner/baners web_page-1.jpg" },
    { path: "image/banner/baners web_page-2.jpg" },
    { path: "image/banner/baners web_page-3.jpg" },
    { path: "image/banner/baners web_page-4.jpg" }
]

export default function AboutUs() {
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
                    width: "70%",
                    flexDirection: "column",
                    marginY: 5,
                    gap: 2,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        color: "#a4254b",
                        textAlign: "center",
                        fontWeight: "bold",
                    }}
                >
                    Acerca de nosotros
                </Typography>
                <Carousel
      sx={{ maxWidth: '100%', flexGrow: 1, margin: 0}}
    >  
      {image.map((image, index) => (
          <Box
            key={index * 13}
          >
            <Box
                component="img"
                sx={{
                  height: '100%',
                  display: 'block',
                  maxWidth: '100%',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={image.path}
            />
            <ColorLabel />
          </Box>
      ))}
    </Carousel>
                {/* <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20"
                    }}
                >
                    {image.map((img) => (
                        <Box
                        component="img"
                        src={img.path}
                        />
                    ))}
                </Box> */}
            </Box>
        </Box>
    )
}