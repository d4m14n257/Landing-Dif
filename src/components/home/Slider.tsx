import * as React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ColorLabel from '../general/layout/ColorLabel';
import AddIcon from '@mui/icons-material/Add';
import Carousel from "react-material-ui-carousel";

type Image = {
  title?: string
  description?: string
  imgPath: string
}

const images: Image[] = [
  // {
  //   title: 'La primavera de oaxaca',
  //   description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
  //                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
  //                 a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, 
  //                 remaining essentially unchanged.`,
  //   imgPath:
  //     '/image/home/home_image_dif.png',
  // },
  // {
  //   imgPath:
  //     '/image/home/home_bidao_tsi_dif.gif',
  // },
  {
    imgPath:
      '/image/home/home_funny_minutes_dif.png'
  }
];

export default function Slider() {
  return (
    <Carousel
      sx={{
        maxWidth: '100%',
        flexGrow: 1,
        margin: 0
      }}
    >
      {images.map((image, index) => (
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
            src={image.imgPath}
          />
          <ColorLabel />
          {image.imgPath == "/image/home/home_image_dif.png" &&
            <>
              <Box
                sx={{
                  display: 'grid',
                  position: 'relative',
                  bottom: '24em',
                  left: '6em',
                  gap: 5,
                  height: 0,
                  width: '38%',
                  userSelect: 'none'
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    paddingX: 2,
                    background: 'linear-gradient(to right, #009542, #009ee1);',
                    fontStyle: 'italic',
                    width: 'max-content',
                    borderRadius: 1.5,
                    textShadow: '1px 1px black'
                  }}
                >
                  {image.title}
                </Typography>
                <Typography variant='caption' sx={{ color: 'white', fontSize: '0.8rem' }}>
                  {image.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  bottom: '5em',
                  display: 'flex',
                  flexGrow: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 0
                }}
              >
                <Button
                  sx={{
                    gap: '0.2em',
                    background: 'linear-gradient(to right, #009542, #009ee1);',
                    width: '10em'
                  }}
                >
                  <AddIcon style={{ color: "white" }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "white" }}>
                    Leer más
                  </Typography>
                </Button>
              </Box>
            </>
          }
        </Box>
      ))}
    </Carousel>
  );
}