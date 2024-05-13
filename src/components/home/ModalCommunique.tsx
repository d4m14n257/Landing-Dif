import React from "react";
import ModalBase from "../general/ModalBase";
import { Box, Button, Typography } from "@mui/material";
import GetAppIcon from '@mui/icons-material/GetApp';

type Modal = {
  open: boolean
  handleClose: Function
  communique: {
    id: number
    title: string
    date: string
    sumary: string
    description: string
    image: string
    zip: string
  }
}

export default function ModalCommunique(props: Modal) {
  const { open, handleClose, communique } = props
  const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  let date: Date | string = new Date((communique.date) + " UTC")
  date.setHours(24)
  date = date.toLocaleDateString('es-MX', options).toString()
  date = date.charAt(0).toUpperCase() + date.slice(1)

  return (
    <ModalBase
      isOpen={open}
      handleClose={handleClose}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1
        }}
      >
        <Box
          component="img"
          src={communique.image}
          sx={{
            //   '@media screen and (max-width: 900px)': {
            //   maxWidth: 600, minWidth: 400, borderRadius: 5
            // }, 
            '@media screen and (max-width: 750px)': {
              maxWidth: 500, minWidth: 300, borderRadius: 5

            },
            '@media screen and (max-width: 600px)': {
              maxWidth: 400, minWidth: 200, borderRadius: 5

            },
            '@media screen and (max-width: 480px)': {
              maxWidth: 300, minWidth: 100, borderRadius: 5

            },
            '@media screen and (max-width: 370px)': {
              maxWidth: 200, minWidth: 50, borderRadius: 5

            },
            maxWidth: 600, minWidth: 400, borderRadius: 5
          }}
        />
        <Box
          sx={{
            display: "flex",
            width: '100%',
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <Box
            sx={{
              '@media screen and (max-width: 750px)': {
                minWidth: 200, gap: 0.3,
              },
              '@media screen and (max-width: 600px)': {
                minWidth: 200, gap: 0.3,
              },
              '@media screen and (max-width: 480px)': {
                minWidth: 140, gap: 0.3,
              },
              '@media screen and (max-width: 370px)': {
                minWidth: 110, gap: 0.3,
              },
              display: "flex",
              flexDirection: "row",
              justifyContent: "start",
              maxWidth: 600,
              minWidth: 400,
              gap: 0.3,
            }}
          >
            <Box
              component="img"
              src="icon/icon_dif.png"
              sx={{ maxWidth: 20, maxHeight: 20 }}
            />
            <Typography sx={{
              '@media screen and (max-width: 370px)': {
                fontSize: 12,
              },
              fontWeight: 850, color: "#92237b", fontSize: 14
            }}>
              DIF Oaxaca
            </Typography>
          </Box>
          <Typography
            sx={{
              '@media screen and (max-width: 370px)': {
                fontSize: 12,
              },
            }}>
            {date}
          </Typography>
        </Box>
        <Box
          sx={{
            '@media screen and (max-width: 660px)': {
              maxWidth: 500, minWidth: 300, gap: 0.3,

            },
            '@media screen and (max-width: 450px)': {
              maxWidth: 400, minWidth: 200, gap: 0.3,

            },
            '@media screen and (max-width: 370px)': {
              maxWidth: 300, minWidth: 100, gap: 0.3,

            },
            maxWidth: 600, minWidth: 400, textAlign: "justify"
          }}
        >
          <Typography
            variant="h5"
            sx={{
              '@media screen and (max-width: 660px)': {
                fontSize: 21,
              },
              '@media screen and (max-width: 450px)': {
                fontSize: 18.5,
              },
              '@media screen and (max-width: 370px)': {
                fontSize: 15.5,
              },
              textAlign: "center", marginBottom: 1, fontWeight: "bold"
            }}
          >
            {communique.title}
          </Typography>
          <Typography
            sx={{}}
            variant="body2"
            dangerouslySetInnerHTML={{ __html: communique.description }}
          />
        </Box>
        <a href={communique.zip} download>
          <Button
            sx={{
              color: "#177d99",
              fontSize: 12.5
            }}
          >
            <GetAppIcon />Descargar comunicado
          </Button>
        </a>
      </Box>
    </ModalBase>
  )
}