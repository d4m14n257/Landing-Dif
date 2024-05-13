import { Box, Typography } from "@mui/material";
import { TypographyBody } from "../src/components/general/TypographyHelp";
import SliderCard from "../src/components/general/SliderCard";

export default function SimplifyPrivacityAdvertisementPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          gap: 2
        }}
      >
        <Typography
          sx={{ textAlign: "center", marginTop: 5, fontWeight: "bold" }}
          variant="h4"
        >
          ÁREA DE <span style={{ color: "#009bac" }}>VINCULACIÓN</span>
        </Typography>
        <TypographyBody
          body="A través de la Dirección de Vinculación, se gestionan apoyos en diferentes sectores públicos y privados, 
            para resolver necesidades que se tienen en los grupos vulnerables que atiende este sistema asistencial en el Estado."
        />
        <TypographyBody
          body="Le damos seguimiento a las necesidades de primera instancia de los grupos vulnerables, 
          asociaciones e instituciones, que atienden las diferentes Direcciones del Sistema Estatal DIF Oaxaca."/>
        <Box>
          <SliderCard />
        </Box>
      </Box>
    </Box>
  );
}