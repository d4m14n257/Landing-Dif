import { Box, Typography } from "@mui/material";
import { TypographyBody, TypographyBold } from "../src/components/general/TypographyHelp";

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
          sx={{ textAlign: "center", marginTop: 5, fontFamily: "arial black", color: "orange" }}
          variant="h4"
        >
          ATENCION CIUDADANA
        </Typography>
        <TypographyBody
          body="Se entiende por área  Atención Ciudadana  a la diseñada para atender en forma directa y continua a los 
            ciudadanos que demandan información, trámites, servicios, asesorías y quejas a través de distintos canales de
            comunicación (Presencial, Telefónico o Digital)."
        />
        <Box>
          <TypographyBold
            title="OBJETIVO:"
          />
          <TypographyBody body="Validar y verificar el cumplimiento de los diferentes programas que maneja el DIF 
            en las 8 regiones del estado, a través del ingreso, seguimiento y supervisión de solicitudes." />
          <TypographyBody
            body="Es competencia de la oficina de Atención Ciudadana" />
          <ul>
            <li><TypographyBody body="Atender los requerimientos de los ciudadanos que lleguen en forma personal o se comuniquen por vía telefónica o por medios electrónicos." /></li>
            <li><TypographyBody body="Responder las preguntas, atendiendo las demandas y proponiendo soluciones." /></li>
            <li><TypographyBody body="Proporcionar información de los procesos requeridos para la resolución de los trámites y requerimientos." /></li>
            <li><TypographyBody body="Gestionar los reclamos y sugerencias a las áreas correspondientes." /></li>
            <li><TypographyBody body="Proveer de formularios y la información requerida." /></li>
            <li><TypographyBody body="Gestionar la recepción y derivación de reclamos, quejas y sugerencias a través de los diferentes canales de acercamiento." /></li>
            <li><TypographyBody body="Apoyo a la gestión de sus demandas." /></li>
            <li><TypographyBody body="Asistir al ciudadano que lo requiera." /></li>
            <li><TypographyBody body="Resolver trámites de primer nivel." /></li>
          </ul>
          <TypographyBold
            title="ATRIBUTOS:"
          />
          <TypographyBody
            body="La oficina de Atención Ciudadana debe establecer los medios para generar un clima de confianza por ellos podemos definir los siguiente."
          />
          <ul>
            <li><TypographyBody body="Amabilidad: Comportamiento cortes y respetuoso con la cual se recibe y gestiona las solicitudes de los ciudadanos." /></li>
            <li><TypographyBody body="Accesibilidad:  Adecuación del servicio a las necesidades del ciudadano, en sus formas, canales y contenido (lenguaje claro y conciso)." /></li>
            <li><TypographyBody body="Competencia:  Personal con conocimientos necesarios, la información, capacitación y seguimiento del trámite." /></li>
            <li><TypographyBody body="Eficiencia:  Garantizar que el servicio que se da es confiable, capacidad para evitar demoras innecesarias en la atención." /></li>
            <li><TypographyBody body="Eficacia:  Resultado del servicio que brinda de parte del área de Atención Ciudadana." /></li>
          </ul>
          <TypographyBold title="¿Qué atiende el Área de Atención Ciudadana?" />
          <ul>
            <li><TypographyBody body="Solicitudes." /></li>
            <li><TypographyBody body="Seguimiento a Solicitudes." /></li>
            <li><TypographyBody body="Sugerencias." /></li>
            <li><TypographyBody body="Atenciones Directas." /></li>
            <li><TypographyBody body="Apoyos Varios." /></li>
            <li><TypographyBody body="Asesorías, canalización, Directorio a otras Dependencias." /></li>
          </ul>
          <TypographyBold title="Atención Directa" />
          <TypographyBody body="Por su orientación y como instrumento preventivo de la solicitud o queja, requiere esfuerzos para mejorar entre las diferentes áreas la comunicación
           y lineamientos a seguir del proceso del trámite, siempre atendiendo al ciudadano directamente informando el camino que lleva el trámite."/>
        </Box>
      </Box>
    </Box>
  );
}