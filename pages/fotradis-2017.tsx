import { Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { TypographyBold, TypographyBody } from "../src/components/general/TypographyHelp";
import ListFiles from "../src/components/general/ListFiles";

const itemlist = [
  {
    title: "Convocatoria a la licitación Pública Nacional Electrónica",
    href: "https://difoaxaca.gob.mx/dowload/pdf/fotradis/LicitacionDIFfederal.pdf",
  },
  {
    title: "Fallo de la lícitación",
    href: "https://difoaxaca.gob.mx/dowload/pdf/fotradis/FalloLA-920043987-E1-2017.pdf",
  },
  {
    title: "Convocatoria a la licitación Pública Nacional Electrónica",
    href: "https://difoaxaca.gob.mx/dowload/pdf/fotradis/Convocatoria.pdf",
  },
  {
    title: "Acta de fallo",
    href: "https://difoaxaca.gob.mx/dowload/pdf/fotradis/Acta de fallo.pdf",
  },
  {
    title: "Contrato Compra-Venta Stella Automotriz",
    href: "https://difoaxaca.gob.mx/dowload/pdf/fotradis/STELLA.pdf",
  },
  {
    title: "Acta Entrega-Recepción Stella Automotriz",
    href: "https://difoaxaca.gob.mx/dowload/pdf/fotradis/ActaEntrega-RecepcionStellaAutomotriz.pdf",
  },
  {
    title: "Justificación",
    href: "https://difoaxaca.gob.mx/dowload/pdf/fotradis/Justificacion.pdf",
  },
  {
    title: "Contrato Compra-Venta MED Evolution",
    href: "https://difoaxaca.gob.mx/dowload/pdf/fotradis/MED.pdf",
  },
  {
    title: "Acta Entrega-Recepción MED Evolution",
    href: "https://difoaxaca.gob.mx/dowload/pdf/fotradis/ActaEntrega-RecepcionMedEvolution.pdf",
  },
];

export default function Fotradis2017() {
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
          FOTRADIS (Fondo para la Accesibilidad en el Transporte Público para
          las Personas con Discapacidad)
        </Typography>
        <Typography>
          El <span style={{ fontWeight: "bold" }}>Ramo 23</span> del Fondo para
          la Accesibilidad en el Transporte Publico para Personas con
          Discapacidad <span style={{ fontWeight: "bold" }}>(FOTRADIS)</span>,
          tiene como objetivos principales:
        </Typography>
        <Box>
          <ul>
            <li>
              <TypographyBody body="Proteger los derechos de las personas con discapacidad y contribuir a su desarrollo integral e inclusión plena, a través de la construcción y adecuación de los espacios, para garantizar el derecho a la accesibilidad, diseño universal, transporte, y tecnologías de información y comunicación." />
            </li>
            <li>
              <TypographyBody body="Promover la integración y acceso de las personas con discapacidad, en igualdad de condiciones con las demás, al entorno físico; mediante el transporte público adaptado e infraestructura pública incluyente." />
            </li>
            <li>
              <TypographyBody body="Fomentar la ejecución de obras y/o acciones enfocadas a que las personas con discapacidad cuenten con medios que promuevan su inclusión social." />
            </li>
          </ul>
        </Box>
        <Typography>
          En 2017 el Sistema DIF Oaxaca adquirirá a través de este Ramo,{" "}
          <span style={{ fontWeight: "bold" }}>
            20 vehículos adaptados para personas con discapacidad, con una
            inversión de $13,986,470.00.
          </span>
        </Typography>
        <Box>
          <span style={{ fontWeight: "bold" }}>
            NOMBRE DEL PROYECTO DEL FOTRADIS:
          </span>
          <br /> “ADQUISICIÓN DE 20 VEHÍCULOS ADAPTADOS PARA PERSONAS CON
          DISCAPACIDAD”
        </Box>
        <Box>
          <span style={{ fontWeight: "bold" }}>
            ADQUISICIÓN DE 8 VEHICULOS TIPO SEDAN ADAPTADOS PARA PERSONAS CON
            DISCAPACIDAD
          </span>
          <br />
          El sistema para el desarrollo integral de la familia (DIF) Oaxaca
          ofrecerá un transporte accesible e incluyente a las personas con
          discapacidad mediante vehículos adaptados tipo sedán (Capacidad
          mínima: 1 espacio adaptado con sujeción de silla de ruedas y 3
          espacios adicionales, que permita atender sus necesidades de movilidad
          y comunicación, los vehículos serán adaptados a 1 espacio con anclas y
          rieles para sujetar silla de ruedas y 3 espacios adicionales con
          cinturón de seguridad, rampa manual de fierro aligerado y piso
          antiderrapante).
        </Box>
        <TypographyBody body="El proyecto permitirá un desplazamiento eficaz dentro del municipio de Oaxaca de Juárez y zona conurbada, así como con rutas y paraderos que cuentan con infraestructura adecuada, con la señalización y ubicación estratégica que permita a las personas con discapacidad su acceso. El proyecto beneficiará a 8,888 Personas con Discapacidad del total de 26,928 Personas con Discapacidad las cuales usarán los vehículos en las 3 rutas diseñadas para el proyecto." />
        <Box>
          RUTA 1: CD. ADMINISTRATIVA – VIGUERA.
          <br />
          RUTA 2: CD. JUDICIAL - SAN LUIS BELTRÁN.
          <br />
          RUTA 3: ATZOMPA - H. CÁMARA DE DIPUTADOS.
          <br />
        </Box>
        <Box>
          <span style={{ fontWeight: "bold" }}>
            ADQUISICIÓN DE 12 VEHICULOS TIPO VAN ADAPTADOS PARA PERSONAS CON
            DISCAPACIDAD
          </span>
          <br />
          El sistema para el desarrollo integral de la familia (DIF) Oaxaca
          ofrecerá un transporte accesible e incluyente a las personas con
          discapacidad mediante vehículos adaptados tipo van con capacidad
          mínima de 3 espacios con sujeción de silla de ruedas, puerta lateral
          (mm) (An x Al) 1,244 x 1,745 corrediza, puertas traseras (mm) (An x
          Al): 1,568 x 1,789 apertura 270º, asientos banca doble asiento
          pasajero; asiento conductor regulable manualmente (Al/Lg/Pro), volante
          con dirección hidráulica y regulable en altura), que permita atender
          sus necesidades de movilidad y comunicación, los vehículos serán
          adaptados con 3 asientos abatibles dobles con cinturón de seguridad de
          tres puntos, rampa hidráulica con kits de sujetadores retractiles para
          3 sillas de ruedas y 5 espacios adicionales, piso antiderrapante,
          pasamanos de poliuretano tipo soft touch en puerta lateral, pasamanos
          en toldo con agarraderas, pasamanos en costado lateral izquierdo).
        </Box>
        <TypographyBody body="El proyecto permitirá un desplazamiento eficaz dentro del municipio de Oaxaca de Juárez y zona conurbada, así como con rutas y paraderos que cuenten con infraestructura adecuada, con la señalización y ubicación estratégica que permita a las personas con discapacidad su acceso. El proyecto beneficiará a 26,928 Personas con Discapacidad, las cuales usarán los vehículos en las 3 rutas diseñadas para el proyecto." />
        <Box>
          RUTA 1: CD. ADMINISTRATIVA – VIGUERA.
          <br />
          RUTA 2: CD. JUDICIAL - SAN LUIS BELTRÁN.
          <br />
          RUTA 3: ATZOMPA - H. CÁMARA DE DIPUTADOS.
          <br />
        </Box>
        <TypographyBold title="Avances físicos y financiero: 0" />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <TypographyBold title="PROYECTO" />
                </TableCell>
                <TableCell>
                  <TypographyBold title="PROCESO" />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <TypographyBold title="ADQUISICIÓN DE 20 VEHÍCULOS ADAPTADOS PARA PERSONAS CON DISCAPACIDAD." />
                </TableCell>
                <TableCell rowSpan={2}>
                  <TypographyBody body="Junta de aclaración, 14 de septiembre de 2017, 10:00 horas." />
                  <br />
                  <TypographyBody body="Acto de presentación y apertura de proposiciones, 25 de septiembre de 2017, 10:00 horas" />
                  <br />
                  <TypographyBody body="Junta pública para dar a conocer el fallo, 28 de septiembre de 2017, 10:00 horas." />
                  <br />
                  <TypographyBody body="Firma del Contrato, 29 de septiembre de 2017, 10:00 horas." />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography>
                    Licitación{" "}
                    <span style={{ fontWeight: "bold" }}>
                      No. LA-920043987-EI-2017
                    </span>{" "}
                    Adquisición de vehículos adaptados para personas con
                    discapacidad.
                  </Typography>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TypographyBody body="Responsable: Edgar Nazario Cruz Luján" />
        <ListFiles
          itemlist={itemlist}
        />
      </Box>
    </Box>
  );
}
