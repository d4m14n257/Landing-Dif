import * as React from 'react';
import Divider from '@mui/material/Divider';
import Carousel from 'react-material-ui-carousel';
import { Box, Card, CardMedia, Chip, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';

type Notes = {
  id: number
  path: string
}

const notes4: Notes[][] = [
  [
    { id: 1, path: "image/slide-out/0-1.jpg" },
    { id: 2, path: "image/slide-out/0-2.jpg" },
    { id: 3, path: "image/slide-out/0-3.jpg" },
    { id: 4, path: "image/slide-out/0-4.jpg" },
  ],
  [
    { id: 5, path: "image/slide-out/0.jpg" },
    { id: 6, path: "image/slide-out/1.jpg" },
    { id: 7, path: "image/slide-out/2.jpg" },
    { id: 8, path: "image/slide-out/3.jpg" },
  ],
  [
    { id: 9, path: "image/slide-out/4.jpg" },
    { id: 10, path: "image/slide-out/2020-1.jpg" },
    { id: 11, path: "image/slide-out/2020-2.jpg" },
    { id: 12, path: "image/slide-out/2020-3.jpg" },
  ],
  [
    { id: 13, path: "image/slide-out/a.jpg" },
    { id: 14, path: "image/slide-out/apaga-luces.jpg" },
    { id: 15, path: "image/slide-out/b.jpg" },
    { id: 16, path: "image/slide-out/c.jpg" },
  ],
  [
    { id: 17, path: "image/slide-out/c-1.jpg" },
    { id: 18, path: "image/slide-out/c-2.jpg" },
    { id: 19, path: "image/slide-out/c-3.jpg" },
    { id: 20, path: "image/slide-out/c-4.jpg" },
  ],
  [
    { id: 21, path: "image/slide-out/c-5.jpg" },
    { id: 22, path: "image/slide-out/c-6.jpg" },
    { id: 23, path: "image/slide-out/colaciones-divertidas.jpg" },
    { id: 24, path: "image/slide-out/covid-1.jpg" },
  ],
  [
    { id: 25, path: "image/slide-out/covid-2.jpg" },
    { id: 26, path: "image/slide-out/covid-3.jpg" },
    { id: 27, path: "image/slide-out/covid-4.jpg" },
    { id: 28, path: "image/slide-out/covid-5.jpg" },
  ],
  [
    { id: 29, path: "image/slide-out/covid-6.jpg" },
    { id: 30, path: "image/slide-out/covid-7.jpg" },
    { id: 31, path: "image/slide-out/covid-8.jpg" },
    { id: 32, path: "image/slide-out/cubreboca-1.jpg" },
  ],
  [
    { id: 33, path: "image/slide-out/cubreboca-2.jpg" },
    { id: 34, path: "image/slide-out/cubreboca-3.jpg" },
    { id: 35, path: "image/slide-out/cubreboca-4.jpg" },
    { id: 36, path: "image/slide-out/cubreboca-5.jpg" },
  ],
  [
    { id: 37, path: "image/slide-out/cubreboca-6.jpg" },
    { id: 38, path: "image/slide-out/cubreboca-7.jpg" },
    { id: 39, path: "image/slide-out/cubreboca-8.jpg" },
    { id: 40, path: "image/slide-out/d.jpg" },
  ],
  [
    { id: 41, path: "image/slide-out/derechos-humanos.jpg" },
    { id: 42, path: "image/slide-out/DISCAPACIDAD-1.jpg" },
    { id: 43, path: "image/slide-out/DISCAPACIDAD-2.jpg" },
    { id: 44, path: "image/slide-out/DISCAPACIDAD-3.jpg" },
  ],
  [
    { id: 45, path: "image/slide-out/DISCAPACIDAD-4.jpg" },
    { id: 46, path: "image/slide-out/DISCAPACIDAD-5.jpg" },
    { id: 47, path: "image/slide-out/DISCAPACIDAD-6.jpg" },
    { id: 48, path: "image/slide-out/duelo-adolescentes.jpg" },
  ],
  [
    { id: 49, path: "image/slide-out/e.jpg" },
    { id: 50, path: "image/slide-out/embarazo-adolescente.jpg" },
    { id: 51, path: "image/slide-out/empatia.jpg" },
    { id: 52, path: "image/slide-out/estrategia-psicologica.jpg" },
  ],
  [
    { id: 53, path: "image/slide-out/f.jpg" },
    { id: 54, path: "image/slide-out/g.jpg" },
    { id: 55, path: "image/slide-out/J1-1.jpg" },
    { id: 56, path: "image/slide-out/J1.png" },
  ],
  [
    { id: 57, path: "image/slide-out/J2-1.jpg" },
    { id: 58, path: "image/slide-out/J2.png" },
    { id: 59, path: "image/slide-out/J3-1.jpg" },
    { id: 60, path: "image/slide-out/J3.png" },
  ],
  [
    { id: 61, path: "image/slide-out/J4-1.jpg" },
    { id: 62, path: "image/slide-out/J4.png" },
    { id: 63, path: "image/slide-out/J5-1.jpg" },
    { id: 64, path: "image/slide-out/J5.png" },
  ],
  [
    { id: 65, path: "image/slide-out/J6-1.jpg" },
    { id: 66, path: "image/slide-out/J6.png" },
    { id: 67, path: "image/slide-out/J7-1.jpg" },
    { id: 68, path: "image/slide-out/J7.png" },
  ],
  [
    { id: 69, path: "image/slide-out/J8.png" },
    { id: 70, path: "image/slide-out/J9.png" },
    { id: 71, path: "image/slide-out/J10.png" },
    { id: 72, path: "image/slide-out/J11.png" },
  ],
  [
    { id: 73, path: "image/slide-out/m1.jpg" },
    { id: 74, path: "image/slide-out/m2.jpg" },
    { id: 75, path: "image/slide-out/m3.jpg" },
    { id: 76, path: "image/slide-out/m4.jpg" },
  ],
  [
    { id: 77, path: "image/slide-out/m5.jpg" },
    { id: 78, path: "image/slide-out/m6.jpg" },
    { id: 79, path: "image/slide-out/m7.jpg" },
    { id: 80, path: "image/slide-out/m8.jpg" },
  ],
  [
    { id: 81, path: "image/slide-out/m9.jpg" },
    { id: 82, path: "image/slide-out/m10.jpg" },
    { id: 83, path: "image/slide-out/m11.jpg" },
    { id: 84, path: "image/slide-out/m12.jpg" },
  ],
  [
    { id: 85, path: "image/slide-out/m13.jpg" },
    { id: 86, path: "image/slide-out/m14.jpg" },
    { id: 87, path: "image/slide-out/m15.jpg" },
    { id: 88, path: "image/slide-out/m16.jpg" },
  ],
  [
    { id: 89, path: "image/slide-out/m17.jpg" },
    { id: 90, path: "image/slide-out/m18.jpg" },
    { id: 91, path: "image/slide-out/m19.jpg" },
    { id: 92, path: "image/slide-out/m20.jpg" },
  ],
  [
    { id: 93, path: "image/slide-out/m21.jpg" },
    { id: 94, path: "image/slide-out/m22.jpg" },
    { id: 95, path: "image/slide-out/m23.jpg" },
    { id: 96, path: "image/slide-out/m24.jpg" },
  ],
  [
    { id: 97, path: "image/slide-out/m25.jpg" },
    { id: 98, path: "image/slide-out/m26.jpg" },
    { id: 99, path: "image/slide-out/m27.jpg" },
    { id: 100, path: "image/slide-out/m28.jpg" },
  ],
  [
    { id: 101, path: "image/slide-out/NBG1.jpg" },
    { id: 102, path: "image/slide-out/NBG2.jpg" },
    { id: 103, path: "image/slide-out/NBG3.jpg" },
    { id: 104, path: "image/slide-out/NBG4.jpg" },
  ],
  [
    { id: 105, path: "image/slide-out/NBG5.jpg" },
    { id: 106, path: "image/slide-out/NBG6.jpg" },
    { id: 107, path: "image/slide-out/NBG7.jpg" },
    { id: 108, path: "image/slide-out/NBG8.jpg" },
  ],
  [
    { id: 109, path: "image/slide-out/NBG9.jpg" },
    { id: 110, path: "image/slide-out/NBG10.jpg" },
    { id: 111, path: "image/slide-out/NBG11.jpg" },
    { id: 112, path: "image/slide-out/NBG12.jpg" },
  ],
  [
    { id: 113, path: "image/slide-out/NBG13.jpg" },
    { id: 114, path: "image/slide-out/NBG14.jpg" },
    { id: 115, path: "image/slide-out/NBG15.jpg" },
    { id: 116, path: "image/slide-out/NBG16.jpg" },
  ],
  [
    { id: 117, path: "image/slide-out/NBG17.jpg" },
    { id: 118, path: "image/slide-out/reparar-infancia.jpg" },
    { id: 119, path: "image/slide-out/salud-bucal-adultos.jpg" },
    { id: 120, path: "image/slide-out/tareas-hogar-nn.jpg" },
  ],
  [
    { id: 121, path: "image/slide-out/tiempo-familia.jpg" },
    { id: 122, path: "image/slide-out/VEDA_PARTICIPACION.png" },
    { id: 123, path: "image/slide-out/VEDA_PREVENCION.png" },
    { id: 124, path: "image/slide-out/VEDA_TRABAJO.png" },
  ],
]

const notes2: Notes[][] = [
  [
    { id: 1, path: "image/slide-out/0-1.jpg" },
    { id: 2, path: "image/slide-out/0-2.jpg" },
  ],
  [
    { id: 3, path: "image/slide-out/0-3.jpg" },
    { id: 4, path: "image/slide-out/0-4.jpg" },
  ],
  [
    { id: 5, path: "image/slide-out/0.jpg" },
    { id: 6, path: "image/slide-out/1.jpg" },
  ],
  [
    { id: 7, path: "image/slide-out/2.jpg" },
    { id: 8, path: "image/slide-out/3.jpg" },
  ],
  [
    { id: 9, path: "image/slide-out/4.jpg" },
    { id: 10, path: "image/slide-out/2020-1.jpg" },
  ],
  [
    { id: 11, path: "image/slide-out/2020-2.jpg" },
    { id: 12, path: "image/slide-out/2020-3.jpg" },
  ],
  [
    { id: 13, path: "image/slide-out/a.jpg" },
    { id: 14, path: "image/slide-out/apaga-luces.jpg" },
  ],
  [
    { id: 15, path: "image/slide-out/b.jpg" },
    { id: 16, path: "image/slide-out/c.jpg" },
  ],
  [
    { id: 17, path: "image/slide-out/c-1.jpg" },
    { id: 18, path: "image/slide-out/c-2.jpg" },
  ],
  [
    { id: 19, path: "image/slide-out/c-3.jpg" },
    { id: 20, path: "image/slide-out/c-4.jpg" },
  ],
  [
    { id: 21, path: "image/slide-out/c-5.jpg" },
    { id: 22, path: "image/slide-out/c-6.jpg" },
  ],
  [
    { id: 23, path: "image/slide-out/colaciones-divertidas.jpg" },
    { id: 24, path: "image/slide-out/covid-1.jpg" },
  ],
  [
    { id: 25, path: "image/slide-out/covid-2.jpg" },
    { id: 26, path: "image/slide-out/covid-3.jpg" },
  ],
  [
    { id: 27, path: "image/slide-out/covid-4.jpg" },
    { id: 28, path: "image/slide-out/covid-5.jpg" },
  ],
  [
    { id: 29, path: "image/slide-out/covid-6.jpg" },
    { id: 30, path: "image/slide-out/covid-7.jpg" },
  ],
  [
    { id: 31, path: "image/slide-out/covid-8.jpg" },
    { id: 32, path: "image/slide-out/cubreboca-1.jpg" },
  ],
  [
    { id: 33, path: "image/slide-out/cubreboca-2.jpg" },
    { id: 34, path: "image/slide-out/cubreboca-3.jpg" },
  ],
  [
    { id: 35, path: "image/slide-out/cubreboca-4.jpg" },
    { id: 36, path: "image/slide-out/cubreboca-5.jpg" },
  ],
  [
    { id: 37, path: "image/slide-out/cubreboca-6.jpg" },
    { id: 38, path: "image/slide-out/cubreboca-7.jpg" },
  ],
  [
    { id: 39, path: "image/slide-out/cubreboca-8.jpg" },
    { id: 40, path: "image/slide-out/d.jpg" },
  ],
  [
    { id: 41, path: "image/slide-out/derechos-humanos.jpg" },
    { id: 42, path: "image/slide-out/DISCAPACIDAD-1.jpg" },
  ],
  [
    { id: 43, path: "image/slide-out/DISCAPACIDAD-2.jpg" },
    { id: 44, path: "image/slide-out/DISCAPACIDAD-3.jpg" },
  ],
  [
    { id: 45, path: "image/slide-out/DISCAPACIDAD-4.jpg" },
    { id: 46, path: "image/slide-out/DISCAPACIDAD-5.jpg" },
  ],
  [
    { id: 47, path: "image/slide-out/DISCAPACIDAD-6.jpg" },
    { id: 48, path: "image/slide-out/duelo-adolescentes.jpg" },
  ],
  [
    { id: 49, path: "image/slide-out/e.jpg" },
    { id: 50, path: "image/slide-out/embarazo-adolescente.jpg" },
  ],
  [
    { id: 51, path: "image/slide-out/empatia.jpg" },
    { id: 52, path: "image/slide-out/estrategia-psicologica.jpg" },
  ],
  [
    { id: 53, path: "image/slide-out/f.jpg" },
    { id: 54, path: "image/slide-out/g.jpg" },
  ],
  [
    { id: 55, path: "image/slide-out/J1-1.jpg" },
    { id: 56, path: "image/slide-out/J1.png" },
  ],
  [
    { id: 57, path: "image/slide-out/J2-1.jpg" },
    { id: 58, path: "image/slide-out/J2.png" },
  ],
  [
    { id: 59, path: "image/slide-out/J3-1.jpg" },
    { id: 60, path: "image/slide-out/J3.png" },
  ],
  [
    { id: 61, path: "image/slide-out/J4-1.jpg" },
    { id: 62, path: "image/slide-out/J4.png" },
  ],
  [
    { id: 63, path: "image/slide-out/J5-1.jpg" },
    { id: 64, path: "image/slide-out/J5.png" },
  ],
  [
    { id: 65, path: "image/slide-out/J6-1.jpg" },
    { id: 66, path: "image/slide-out/J6.png" },
  ],
  [
    { id: 67, path: "image/slide-out/J7-1.jpg" },
    { id: 68, path: "image/slide-out/J7.png" },
  ],
  [
    { id: 69, path: "image/slide-out/J8.png" },
    { id: 70, path: "image/slide-out/J9.png" },
  ],
  [
    { id: 71, path: "image/slide-out/J10.png" },
    { id: 72, path: "image/slide-out/J11.png" },
  ],
  [
    { id: 73, path: "image/slide-out/m1.jpg" },
    { id: 74, path: "image/slide-out/m2.jpg" },
  ],
  [
    { id: 75, path: "image/slide-out/m3.jpg" },
    { id: 76, path: "image/slide-out/m4.jpg" },
  ],
  [
    { id: 77, path: "image/slide-out/m5.jpg" },
    { id: 78, path: "image/slide-out/m6.jpg" },
  ],
  [
    { id: 79, path: "image/slide-out/m7.jpg" },
    { id: 80, path: "image/slide-out/m8.jpg" },
  ],
  [
    { id: 81, path: "image/slide-out/m9.jpg" },
    { id: 82, path: "image/slide-out/m10.jpg" },
  ],
  [
    { id: 83, path: "image/slide-out/m11.jpg" },
    { id: 84, path: "image/slide-out/m12.jpg" },
  ],
  [
    { id: 85, path: "image/slide-out/m13.jpg" },
    { id: 86, path: "image/slide-out/m14.jpg" },
  ],
  [
    { id: 87, path: "image/slide-out/m15.jpg" },
    { id: 88, path: "image/slide-out/m16.jpg" },
  ],
  [
    { id: 89, path: "image/slide-out/m17.jpg" },
    { id: 90, path: "image/slide-out/m18.jpg" },
  ],
  [
    { id: 91, path: "image/slide-out/m19.jpg" },
    { id: 92, path: "image/slide-out/m20.jpg" },
  ],
  [
    { id: 93, path: "image/slide-out/m21.jpg" },
    { id: 94, path: "image/slide-out/m22.jpg" },
  ],
  [
    { id: 95, path: "image/slide-out/m23.jpg" },
    { id: 96, path: "image/slide-out/m24.jpg" },
  ],
  [
    { id: 97, path: "image/slide-out/m25.jpg" },
    { id: 98, path: "image/slide-out/m26.jpg" },
  ],
  [
    { id: 99, path: "image/slide-out/m27.jpg" },
    { id: 100, path: "image/slide-out/m28.jpg" },
  ],
  [
    { id: 101, path: "image/slide-out/NBG1.jpg" },
    { id: 102, path: "image/slide-out/NBG2.jpg" },
  ],
  [
    { id: 103, path: "image/slide-out/NBG3.jpg" },
    { id: 104, path: "image/slide-out/NBG4.jpg" },
  ],
  [
    { id: 105, path: "image/slide-out/NBG5.jpg" },
    { id: 106, path: "image/slide-out/NBG6.jpg" },
  ],
  [
    { id: 107, path: "image/slide-out/NBG7.jpg" },
    { id: 108, path: "image/slide-out/NBG8.jpg" },
  ],
  [
    { id: 109, path: "image/slide-out/NBG9.jpg" },
    { id: 110, path: "image/slide-out/NBG10.jpg" },
  ],
  [
    { id: 111, path: "image/slide-out/NBG11.jpg" },
    { id: 112, path: "image/slide-out/NBG12.jpg" },
  ],
  [
    { id: 113, path: "image/slide-out/NBG13.jpg" },
    { id: 114, path: "image/slide-out/NBG14.jpg" },
  ],
  [
    { id: 115, path: "image/slide-out/NBG15.jpg" },
    { id: 116, path: "image/slide-out/NBG16.jpg" },
  ],
  [
    { id: 117, path: "image/slide-out/NBG17.jpg" },
    { id: 118, path: "image/slide-out/reparar-infancia.jpg" },
  ],
  [
    { id: 119, path: "image/slide-out/salud-bucal-adultos.jpg" },
    { id: 120, path: "image/slide-out/tareas-hogar-nn.jpg" },
  ],
  [
    { id: 121, path: "image/slide-out/tiempo-familia.jpg" },
    { id: 122, path: "image/slide-out/VEDA_PARTICIPACION.png" },
  ],
  [
    { id: 123, path: "image/slide-out/VEDA_PREVENCION.png" },
    { id: 124, path: "image/slide-out/VEDA_TRABAJO.png" },
  ],
];

let notes = notes4

export default function SliderCard() {

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

  if (screenWidth < 1300) {
    notes = notes2
  } else {
    notes = notes4
  }

  return (
    <>
      <Divider textAlign="left" sx={{ margin: 4 }}>
        <Chip label="NUESTRAS JORNADAS" sx={{ background: "#003d7f", fontWeight: "bold", color: "white" }} />
      </Divider>
      <Box
        sx={{
          display: 'flex'
        }}>
        <Carousel sx={{
          '@media screen and (max-width: 1700px)': {
            width: 1600
          },
          '@media screen and (max-width: 1650px)': {
            width: 1500
          },
          '@media screen and (max-width: 1550px)': {
            width: 1400
          },
          '@media screen and (max-width: 1450px)': {
            width: 1300
          },
          '@media screen and (max-width: 1350px)': {
            width: 1200
          },
          '@media screen and (max-width: 1300px)': {
            width: 1150
          },
          '@media screen and (max-width: 1200px)': {
            width: 1050
          },
          '@media screen and (max-width: 1100px)': {
            width: 950
          },
          '@media screen and (max-width: 1000px)': {
            width: 850
          },
          '@media screen and (max-width: 900px)': {
            width: 750
          },
          '@media screen and (max-width: 800px)': {
            width: 650
          },
          '@media screen and (max-width: 700px)': {
            width: 600
          },
          '@media screen and (max-width: 650px)': {
            width: 500
          },
          '@media screen and (max-width: 500px)': {
            width: 400
          },
          '@media screen and (max-width: 400px)': {
            width: 350
          },
          width: 1700, flexGrow: 1
        }}>
          {notes.map((page, index) => (
            <Box
              key={index + 200}
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'start',
                justifyContent: 'space-evenly',
                '@media screen and (max-width: 650px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: "space-evenly"
                },

              }}
            >
              {page.map((notes, idx) => (
                <Box
                  key={notes.id}
                >
                  <Card
                    key={idx}
                    sx={{ maxwidth: 2080, boxShadow: 0, minHeight: 350, margin: 0.5 }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        borderRadius: 3, maxWidth: 580, boxShadow: 0, minHeight: 180, width: 340,
                        '@media screen and (max-width: 1700px)': {
                          width: 330
                        },
                        '@media screen and (max-width: 1650px)': {
                          width: 320
                        },
                        '@media screen and (max-width: 1550px)': {
                          width: 310
                        },
                        '@media screen and (max-width: 1450px)': {
                          width: 300
                        },
                        '@media screen and (max-width: 1350px)': {
                          width: 280
                        },
                        '@media screen and (max-width: 1300px)': {
                          width: 340
                        },
                        '@media screen and (max-width: 800px)': {
                          width: 320
                        },
                        '@media screen and (max-width: 700px)': {
                          width: 290
                        },
                        '@media screen and (max-width: 650px)': {
                          width: 340
                        },
                        '@media screen and (max-width: 500px)': {
                          width: 320
                        },
                        '@media screen and (max-width: 400px)': {
                          width: 310
                        },
                      }}
                      src={notes.path}
                    />
                  </Card>
                </Box>
              ))}
            </Box>
          ))}
        </Carousel>
      </Box>
    </>
  );
}
