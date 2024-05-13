import { Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { TypographyBold, TypographyBody } from "../src/components/general/TypographyHelp";
import ListFiles from "../src/components/general/ListFiles";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const itemlist =
  [
    {
      "title": "Resumen de Convocatoria No. LA-920043987-E1-2020",
      "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2020/Fotradis2020-Publicación-DOF-Resumen-Convocatoria.pdf"
    },
    {
      "title": "Convocatoria de la Licitación Pública Nacional No. LA-920043987-E1-2020 (Presencial)",
      "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2020/Convocatoria-LA-920043987-E1-2020.pdf"
    },
    {
      "title": "Junta de Aclaraciones",
      "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2020/Junta-de-Aclaraciones-LA-920043987-E1-2020.pdf"
    },
    {
      "title": "Presentación y Apertura de Proposiciones",
      "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2020/LA-920043987-E1-2020-Presentacion-y-apertura-de-proposiciones.pdf"
    },
    {
      "title": "Aviso sobre Publicación de Fallo de la Licitación Pública Nacional Presencial No. LA-920043987-E1-2020",
      "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2020/Aviso-sobre-publicacion-de-Fallo-LPN-LA-920043987E1-2020.pdf"
    },
    {
      "title": "Fallo de la Licitación Pública Nacional Presencial No. LA-920043987-E1-2020",
      "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2020/Fallo-de-la-LPN-LA-920043987-E1-2020.pdf"
    },
    {
      "title": "Contrato de Adquisición e Instalación de Bienes de la Licitación Pública Nacional Presencial No. LA-920043987-E1-2020.",
      "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2020/55-CONTRATO-2020-FOTRADIS-2020-Bukbara.pdf"
    },
    {
      "title": "Actas de Entrega Recepción.",
      "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2020/Actas-de-entrega-recepcion.pdf"
    }
  ]

export default function Fotradis2020() {
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
          gap: 1,
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "#a4254b",
            textAlign: "center",
            fontWeight: "bold",
            '@media screen and (max-width: 900px)': {
              fontSize: 30,
            },
            '@media screen and (max-width: 700px)': {
              fontSize: 26,
            },
            '@media screen and (max-width: 500px)': {
              fontSize: 22,
            },
            '@media screen and (max-width: 400px)': {
              fontSize: 21,
            },
          }}
        >
          Fondo para la Accesibilidad en el Transporte Público para las Personas
          con Discapacidad
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "#5c5d62", textAlign: "center" }}
        >
          "Este programa es público, ajeno a cualquier partido político. Queda
          prohibido el uso para fines distintos a los establecidos en el
          programa"
        </Typography>
        <Box>
          <span style={{ fontWeight: "bold", fontSize: 20 }}>
            FOTRADIS 2020
          </span>
        </Box>
        <Typography sx={{ textAlign: "justify" }}>
          El Fondo para la Accesibilidad en el Transporte Público para Personas
          con Discapacidad (FOTRADIS) del Ramo 23, tiene como objetivo principal
          promover la integración y acceso de las personas con discapacidad en
          igualdad de condiciones con las demás, al entorno físico, mediante
          proyectos de inversión en infraestructura pública incluyente.
        </Typography>
        <Typography>
          En congruencia con este objetivo, el Estado de Oaxaca realizará los
          siguientes proyectos:
        </Typography>
        <Box>
          <span style={{ fontWeight: "bold", fontSize: 20 }}>
            1. Nombre de Proyecto:
          </span>
        </Box>
        <Typography sx={{ textAlign: "justify" }}>
          Equipamiento para la rehabilitación física de las personas con
          discapacidad beneficiadas en 7 Unidades Básicas de Rehabilitación de
          los municipios de:
          <span style={{ fontWeight: "bold" }}>
            {" "}
            El Barrio de la Soledad, Magdalena Tequisistlán, Santa María
            Mixtequilla, Santiago Niltepec, Heroica Ciudad de Ejutla de Crespo,
            San Agustín de la Juntas y San Francisco Telixtlahuaca{" "}
          </span>
          del Estado de Oaxaca
        </Typography>

        <Typography sx={{ fontSize: 20 }}>Ubicación:</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="NOMBRE" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="MUNICIPIO" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="LOCALIDAD" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="UBICACIÓN GEOGRÁFICA" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell >
                  <TypographyBold title="UBR 1 El Barrio de la Soledad" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="010 El Barrio de la Soledad" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="El Barrio de la Soledad" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/16%C2%B048'24.6%22N+95%C2%B006'40.5%22W/@16.8068333,-95.11125,17z/data=!3m1!4b1!4m4!3m3!8m2!3d16.8068333!4d-95.11125" target="_blank">16.806833, -95.111257</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 2 Magdalena Tequisistlán" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="052 Magdalena Tequisistlán" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="Magdalena Tequisistlán" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/16%C2%B024'04.4%22N+95%C2%B036'10.9%22W/@16.4012222,-95.6030278,17z/data=!3m1!4b1!4m4!3m3!8m2!3d16.4012222!4d-95.6030278" target="_blank">16.401226, -95.603033</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 3 Santa María Mixtequilla" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="421 Santa María Mixtequilla" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="Santa María Mixtequilla" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/16%C2%B022'25.2%22N+95%C2%B015'37.6%22W/@16.3736667,-95.2604444,17z/data=!3m1!4b1!4m4!3m3!8m2!3d16.3736667!4d-95.2604444" target="_blank">16.373665, -95.260454</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 4 Santiago Niltepec" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="066 Santiago Niltepec" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="Santiago Niltepec" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/16%C2%B033'45.7%22N+94%C2%B036'47.0%22W/@16.5626944,-94.6130556,17z/data=!3m1!4b1!4m4!3m3!8m2!3d16.5626944!4d-94.6130556" target="_blank">16.562681, -94.613054</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 5 Heroica Ciudad de Ejutla de Crespo" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="028 Heroica Ciudad de Ejutla de Crespo" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="Heroica Ciudad de Ejutla de Crespo" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/16%C2%B033'51.8%22N+96%C2%B043'54.1%22W/@16.56438,-96.731684,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d16.56438!4d-96.731684" target="_blank">16.56438, -96.731684</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 6 San Agustín de las Juntas" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="083 San Agustín de las Juntas" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="San Agustín de las Juntas" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/17%C2%B000'37.0%22N+96%C2%B042'41.2%22W/@17.0102778,-96.7114444,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.0102778!4d-96.7114444" target="_blank">17.01029, -96.711452</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 7 San Francisco Telixtlahuaca" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="150 San Francisco Telixtlahuaca" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="San Francisco Telixtlahuaca" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/17%C2%B017'44.4%22N+96%C2%B054'12.9%22W/@17.2956667,-96.9035833,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.2956667!4d-96.9035833" target="_blank">17.01029, -96.711452</a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography sx={{ fontSize: 20 }}>Descripción:</Typography>
        <Typography sx={{ textAlign: "justify" }}>
          De acuerdo a datos de INEGI en Oaxaca residen 227,262 personas con
          discapacidad (PCD) de las cuales el 7.8% corresponde a personas de 0 a
          14 años, el 45.7% de 15 a 65 años y el 46.4% de 65 en adelante, que
          representan 6% de la población estatal.
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          En Oaxaca se encuentran ubicadas las siguientes Unidades Básicas de
          Rehabilitación (UBR), señalando que los espacios físicos no fueron
          realizados ni apoyados con recursos de FOTRADIS de años anteriores:
        </Typography>
        <Box>
          <ul>
            <li>
              <TypographyBody body="UBR 1 El Barrio de la Soledad" />
            </li>
            <li>
              <TypographyBody body="UBR 2 Magdalena Tequisistlán" />
            </li>
            <li>
              <TypographyBody body="UBR 3 Santa María Mixtequilla" />
            </li>
            <li>
              <TypographyBody body="UBR 4 Santiago Niltepec" />
            </li>
            <li>
              <TypographyBody body="UBR 5 Heroica Ciudad de Ejutla de Crespo" />
            </li>
            <li>
              <TypographyBody body="UBR 6 San Agustín de las Juntas" />
            </li>
            <li>
              <TypographyBody body="UBR 7 San Francisco Telixtlahuaca" />
            </li>
          </ul>
        </Box>

        <Typography sx={{ fontSize: 20 }}>Metas:</Typography>
        <Typography sx={{ textAlign: "justify" }}>
          Instalar equipamiento fijo para brindar terapia física a las PCD
          motriz en 7 Unidades Básicas de Rehabilitación en los municipios de:
          El Barrio de la Soledad, Magdalena Tequisistlán, Santa María
          Mixtequilla, Santiago Niltepec, Heroica Ciudad de Ejutla de Crespo,
          San Agustín de las Juntas y San Francisco Telixtlahuaca del Estado de
          Oaxaca. El equipamiento será fijo empotrado al piso y con el proyecto
          se beneficiará a 6 901 PCD.
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="META" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="DESCRIPCIÓN" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="CANTIDAD" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="UNIDAD" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TypographyBold title="1" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA (COMPRESERO CALIENTE PARA 24 COMPRESAS, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="2" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(COMPRESERO FRÍO PARA 12 COMPRESAS, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="3" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA (BARRAS PARALELAS, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="4" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(TIMÓN DE HOMBRO,FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="5" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(CAMINADORA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="6" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(BICICLETA RECUMBENTE, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(COMBO MONOCROMÁTICO, UNIDAD DE ELECTRO Y ULTRASONIDO,FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="8" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(PARAFINERO TERAPÉUTICO, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="9" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(MESA DE TRATAMIENTO, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="10" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(BARRA SUECA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="11" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(ESCALERA CON RAMPA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="12" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PIEZA(TINA DE FLUIDOTERAPIA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="13" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(MESA DE KANA VEL, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="14" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(BANCO DE 2 PELDAÑOS, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="15" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(LÁMPARA DE RAYOS INFRARROJOS, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="16" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(ESCALERILLA DE DEDOS, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="14" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="17" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(ESPEJO DE POSTURA DE 1 SECCIÓN, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="14" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.2,
          }}
        >
          <Box>
            Monto asignado:{" "}
            <span style={{ fontWeight: "bold" }}>$7,231,862.00 </span>
          </Box>
          <Box>
            Monto disponible:{" "}
            <span style={{ fontWeight: "bold" }}>$7,152,311.52</span>
          </Box>
          <Box>
            Monto contratado:{" "}
            <span style={{ fontWeight: "bold" }}>$7,128,240.09</span>
          </Box>
          <Box>
            Economía Generada:{" "}
            <span style={{ fontWeight: "bold" }}>$24,071.43 </span>
          </Box>
          <span style={{ fontWeight: "bold" }}>Avance Físico: 100%</span>
          <span style={{ fontWeight: "bold" }}>Avance Financiero: 100%</span>
        </Box>
        <Box sx={{ marginBottom: 3 }}>
          <span style={{ fontWeight: "bold" }}>
            Nota: Los recursos remanentes, economías y/o rendimientos, serán
            reintegrados a la Tesorería de la Federación.{" "}
          </span>
        </Box>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="META" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="DESCRIPCIÓN" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="CANTIDAD" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="UNIDAD" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TypographyBold title="1" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA (COMPRESERO CALIENTE PARA 24 COMPRESAS, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="2" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(COMPRESERO FRÍO PARA 12 COMPRESAS, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="3" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA (BARRAS PARALELAS, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="4" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(TIMÓN DE HOMBRO,FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="5" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(CAMINADORA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="6" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(BICICLETA RECUMBENTE, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(COMBO MONOCROMÁTICO, UNIDAD DE ELECTRO Y ULTRASONIDO,FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="8" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(PARAFINERO TERAPÉUTICO, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="9" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(MESA DE TRATAMIENTO, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="10" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(BARRA SUECA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="11" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(ESCALERA CON RAMPA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="12" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PIEZA(TINA DE FLUIDOTERAPIA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="13" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(MESA DE KANA VEL, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="14" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(BANCO DE 2 PELDAÑOS, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="15" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(LÁMPARA DE RAYOS INFRARROJOS, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="16" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(ESCALERILLA DE DEDOS, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="14" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="10" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(ESPEJO DE POSTURA DE 1 SECCIÓN, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="14" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.2,
          }}
        >
          <Box>
            Monto asignado:{" "}
            <span style={{ fontWeight: "bold" }}>$7,231,862.00 </span>
          </Box>
          <Box>
            Monto disponible:{" "}
            <span style={{ fontWeight: "bold" }}>$7,152,311.52</span>
          </Box>
          <Box>
            Monto contratado:{" "}
            <span style={{ fontWeight: "bold" }}>$7,128,240.09</span>
          </Box>
          <Box>
            Economía Generada:{" "}
            <span style={{ fontWeight: "bold" }}>$24,071.43 </span>
          </Box>
          <span style={{ fontWeight: "bold" }}>Avance Físico: 100%</span>
          <span style={{ fontWeight: "bold" }}>Avance Financiero: 100%</span>
          <span style={{ fontWeight: "bold" }}>
            Nota: Los recursos remanentes, economías y/o rendimientos, serán
            reintegrados a la Tesorería de la Federación.{" "}
          </span>
        </Box>
        <Box>
          <span style={{ fontWeight: "bold", fontSize: 20 }}>
            2. Nombre de Proyecto:
          </span>
        </Box>
        <Typography sx={{ textAlign: "justify" }}>
          Equipamiento para la rehabilitación física de las personas con discapacidad beneficiadas en 7 Unidades Básicas de Rehabilitación en los municipios de:
          <span style={{ fontWeight: "bold" }}>
            {" "}
            Santa María Chilchotla, Santa María Tonameca, Santiago Chazumba, Santiago Yolomécatl, San Felipe Jalapa de Díaz,
            San Juan Bautista Valle Nacional y San Pedro y San Pablo Ayutla{" "}
          </span>
          del Estado de Oaxaca
        </Typography>
        <Typography sx={{ fontSize: 20 }}>Ubicación:</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="NOMBRE DE UBR" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="MUNICIPIO" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="LOCALIDAD" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="UBICACIÓN GEOGRÁFICA" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 1 Santa María Chilchotla" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="406 Santa María Chilchotla" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="Santa María Chilchotla" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/18%C2%B014'03.3%22N+96%C2%B049'49.5%22W/@18.23425,-96.8304167,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.23425!4d-96.8304167" target="_blank">18.234248, -96.830405</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 2 Santa María Tonameca" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="439 Santa María Tonameca" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="Santa María Tonameca" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/15%C2%B044'50.8%22N+96%C2%B032'45.1%22W/@15.7474444,-96.5458611,17z/data=!3m1!4b1!4m4!3m3!8m2!3d15.7474444!4d-96.5458611" target="_blank">15.747432, -96.545871</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 3 Santiago Chazumba" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="459 Santiago Chazumba" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="Santiago Chazumba" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/18%C2%B011'18.1%22N+97%C2%B040'48.7%22W/@18.188357,-97.680198,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d18.188357!4d-97.680198" target="_blank">18.188357, -97.680198</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 4 Santiago Yolomécatl" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="499 Santiago Yolomécatl" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="Santiago Yolomécatl" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/17%C2%B028'09.8%22N+97%C2%B034'05.4%22W/@17.4693889,-97.5681667,17z/data=!3m1!4b1!4m4!3m3!8m2!3d17.4693889!4d-97.5681667" target="_blank">17.469394, -97.568154</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 5 San Felipe Jalapa de Díaz" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="134 San Felipe Jalapa de Díaz" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="Arroyo Venado (Sección Tercera)" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/18%C2%B004'47.3%22N+96%C2%B031'44.3%22W/@18.0798056,-96.5289722,17z/data=!3m1!4b1!4m4!3m3!8m2!3d18.0798056!4d-96.5289722" target="_blank">18.079792, -96.528979</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 6 San Juan Bautista Valle Nacional" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="559 San Juan Bautista Valle Nacional" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="San Juan Bautista Valle Nacional" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/17%C2%B046'40.1%22N+96%C2%B017'48.6%22W/@17.777805,-96.296823,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d17.777805!4d-96.296823" target="_blank">17.777805, -96.296823</a>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="UBR 7 San Pedro y San Pablo Ayutla" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="337 San Pedro y San Pablo Ayutla" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="San Pedro y San Pablo Ayutla" />
                </TableCell>
                <TableCell>
                  <LocationOnOutlinedIcon />
                  <a href="https://www.google.com/maps/place/17%C2%B002'05.9%22N+96%C2%B004'27.3%22W/@17.034965,-96.074261,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d17.034965!4d-96.074261" target="_blank">17.034965, -96.074261</a>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={{ fontSize: 20 }}>Descripción:</Typography>
        <Typography sx={{ textAlign: "justify" }}>
          De acuerdo a datos de INEGI en Oaxaca residen 227,262 personas con discapacidad (PCD) de las cuales el 7.8%
          corresponde a personas de 0 a 14 años, el 45.7% de 15 a 65 años y el 46.4% de 65 en adelante, que representan 6% de la población estatal.
        </Typography>
        <Typography sx={{ textAlign: "justify" }}>
          En Oaxaca se encuentran ubicadas las siguientes Unidades Básicas de Rehabilitación (UBR), señalando que los espacios físicos
          no fueron realizados ni apoyados con recursos de FOTRADIS de años anteriores:
        </Typography>
        <Box>
          <ul>
            <li>
              <TypographyBody body="UBR 1 Santa María Chilchotla" />
            </li>
            <li>
              <TypographyBody body="UBR 2 Santa María Tonameca" />
            </li>
            <li>
              <TypographyBody body="UBR 3 Santiago Chazumba" />
            </li>
            <li>
              <TypographyBody body="UBR 4 Santiago Yolomécatl" />
            </li>
            <li>
              <TypographyBody body="UBR 5 Arroyo Venado (Sección Tercera), San Felipe Jalapa de Díaz" />
            </li>
            <li>
              <TypographyBody body="UBR 6 San Juan Bautista Valle Nacional" />
            </li>
            <li>
              <TypographyBody body="UBR 7 San Pedro y San Pablo Ayutla" />
            </li>
          </ul>
        </Box>
        <Typography sx={{ textAlign: "justify" }}>
          Las cuales brindan terapia de rehabilitación a las PCD en un horario de 8am a 4pm, esas unidades son operadas por los municipios
          mencionados, actualmente las Unidades Básicas de Rehabilitación no cuentan con el equipo necesario, por lo cual se quiere equipar
          mediante el proyecto “Equipamiento para la rehabilitación física de las personas con discapacidad beneficiadas en 7 Unidades
          Básicas de Rehabilitación en los municipios de: Santa María Chilchotla, Santa María Tonameca, Santiago Chazumba, Santiago Yolomécatl,
          San Felipe Jalapa de Díaz, San Juan Bautista Valle Nacional y San Pedro y San Pablo Ayutla del Estado de Oaxaca”.
        </Typography>
        <Typography sx={{ fontSize: 20 }}>Metas:</Typography>
        <Typography sx={{ textAlign: "justify" }}>
          Instalar equipamiento fijo para brindar terapia física a las PCD motriz en 7 Unidades Básicas de Rehabilitación en los municipios de:
          Santa María Chilchotla, Santa María Tonameca, Santiago Chazumba, Santiago Yolomécatl,
          San Felipe Jalapa de Díaz, San Juan Bautista Valle Nacional y San Pedro y San Pablo Ayutla del Estado de Oaxaca.
          El equipamiento será fijo empotrado al piso y con el proyecto se beneficiará a 7 811 PCD.
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="META" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="DESCRIPCIÓN" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="CANTIDAD" />
                </TableCell>
                <TableCell sx={{ textAlign: "left" }}>
                  <TypographyBold title="UNIDAD" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TypographyBold title="1" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA (COMPRESERO CALIENTE PARA 24 COMPRESAS, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="2" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(COMPRESERO FRÍO PARA 12 COMPRESAS, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="3" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA (BARRAS PARALELAS, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="4" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(TIMÓN DE HOMBRO,FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="5" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(CAMINADORA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="6" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(BICICLETA RECUMBENTE, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(COMBO MONOCROMÁTICO, UNIDAD DE ELECTRO Y ULTRASONIDO,FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="8" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(PARAFINERO TERAPÉUTICO, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="9" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(MESA DE TRATAMIENTO, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="10" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(BARRA SUECA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="11" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(ESCALERA CON RAMPA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="12" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PIEZA(TINA DE FLUIDOTERAPIA, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="13" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(MESA DE KANA VEL, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="14" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(BANCO DE 2 PELDAÑOS, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="15" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(LÁMPARA DE RAYOS INFRARROJOS, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="7" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="16" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(ESCALERILLA DE DEDOS, FIJA)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="14" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TypographyBold title="17" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA(ESPEJO DE POSTURA DE 1 SECCIÓN, FIJO)" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="14" />
                </TableCell>
                <TableCell>
                  <TypographyBody body="PZA" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <ListFiles
          itemlist={itemlist}
        />
      </Box>
    </Box>
  );
}
