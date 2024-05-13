import { Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, tableCellClasses } from "@mui/material";
import { TypographyBold, TypographyBody } from "../src/components/general/TypographyHelp";
import { styled } from '@mui/material/styles';
import ListFiles from "../src/components/general/ListFiles";

const itemlist =
    [
        {
            "title": "Convocatoria a la licitación Pública Nacional Electrónica",
            "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis/Bases-Parque-Incluyente.pdf"
        },
        {
            "title": "Acta de fallo de la licitación Pública Nacional Electrónica",
            "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis/FalloLPN-LA-920043987-E1-2018.pdf"
        },
        {
            "title": "Contrato de adquisición de bienes para parques incluyentes",
            "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis/37-CONSORCIO-METAL-PLASTICO.pdf"
        },
        {
            "title": "Acta de Entrega - Recepción",
            "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis/acta_entrega_recepcion.pdf"
        }
    ]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(
    evento: string,
    fecha: string,
    hora: string,
) {
    return { evento, fecha, hora };
}

const rows = [
    createData('Visita al lugar', '25 de julio de 2018', '10:00 hrs'),
    createData('Junta de aclaraciones', '26 de julio de 2018', '10:00 hrs'),
    createData('Acto de presentación y apertura de proposiciones', '02 de agosto de 2018', '10:00 hrs'),
    createData('Junta pública para dar a conocer el fallo', '09 de agosto de 2018', '10:00 hrs'),
    createData('Firma del contrato', '13 de agosto de 2018', '10:00 hrs'),
];

export default function Fotradis2018() {
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
                    width: "70%",
                    flexDirection: "column",
                    marginY: 5,
                    gap: 1
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
                    Fondo para la Accesibilidad en el Transporte Público para las Personas con Discapacidad
                </Typography>
                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>FOTRADIS 2018</span>
                </Box>
                <Box>
                    El <span style={{ fontWeight: "bold" }}>Ramo 23</span> del Fondo para la Accesibilidad en el Transporte Público para Personas con Discapacidad (FOTRADIS) tiene como objetivo principal:
                </Box>
                <Box>
                    <ul>
                        <li><TypographyBody body="Los proyectos de inversión se destinarán para promover la integración y acceso de las personas con discapacidad, en igualdad de condiciones con las demás, al entorno físico, mediante el transporte público adaptado e infraestructura pública incluyente." /></li>
                    </ul>
                </Box>
                <Typography>
                    En congruencia con este objetivo el Estado de Oaxaca realizará los siguientes proyectos:
                </Typography>
                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>Proyecto Parque Incluyente</span>
                </Box>
                <Box>
                    Parque Incluyente, “Parque Luis Donaldo Colosio” Oaxaca de Juárez, Oaxaca con dirección en la Agencia San Felipe del Agua, Municipio Oaxaca de Juárez calle Aldama S/N. Consta de lo siguiente:
                    <span style={{ fontWeight: "bold" }}>Monto contratado $9, 715, 045.99</span>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="PART" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="DESCRIPCIÓN" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="CANTIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="UNIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="PRECIO UNITARIO" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="IMPORTE" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="1" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MULTIJUEGO COMBI SOCIAL INCLUSIVO MARCA JUMBO, MODELO PCM200106-0004 PARA SILLA DE RUEDAS CON RESBALADILLA, COLUMPIOS Y TUBO COMUNICADOR FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$2,510,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$2,510,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="2" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MULTIJUEGO GALAXY ALTAIR II INCLUSIVO MARCA JUMBO, MODELO GXY951010-5017 : 2 COLUMPIOS, 1 GIRATORIO, 2 PASA PIES PCD MOTRIZ FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$1,145,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$1,145,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="3" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MULTIJUEGO MILWAUKEE INCLUSIVO MARCA JUMBO, MODELO EOS-2412 7.0 DC: 2 RESBALADILLAS, 1 TUBO COMUNICADOR, 1 PANEL SORDOMUDO FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$450,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$450,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="4" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="COLUMPIO HAMACA DOBLE INCLUSIVO MARCA JUMBO, MODELO CP-316 DC: ARCO DE ACERO, 2 HAMACAS CON CADENA FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="4" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$65,780.17" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$263,120.68" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="5" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="JUEGO DE MOTRICIDAD INCLUSIVO CABALLITO MARCA JUMBO, MODELO IRE-214 FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$18,899.14" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$18,899.14" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="6" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="JUEGO DE MOTRICIDAD INCLUSIVO CAMIONCITO MARCA JUMBO, MODELO IRE-216 FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$19,754.31" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$19,754.31" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="7" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="JUEGO DE MOTRICIDAD INCLUSIVO MOTO MARCA JUMBO, MODELO IRE-416 FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$18,362.93" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$18,362.93" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="8" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="JUEGO DE MOTRICIDAD INCLUSIVO ABEJA MARCA JUMBO, MODELO IRE-116 FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$20,555.17" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$20,555.17" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="9" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="JUEGO DE MOTRICIDAD INCLUSIVO DELFÍN MARCA JUMBO, MODELO IRE-316 FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$20,216.38" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$20,216.38" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="10" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="GUÍA PODOTACTIL MARCA JUMBO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="300" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="ML" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$3,170.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$951,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="11" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="EJERCITADOR INCLUSIVO BARRAS FIJAS MARCA JUMBO, MODELO AEF-315 DC, FIJOS" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$21,525.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$21,525.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="12" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="EJERCITADOR INCLUSIVO COMBINADO DE BRAZO Y MUÑECA MARCA JUMBO, MODELO AEF-415 DC, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$22,464.66" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$22,464.66" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="13" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="EJERCITADOR INCLUSIVO DE BRAZO Y PIERNA MARCA JUMBO, MODELO AEF-515 DC, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$21,495.69" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$21,495.69" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="14" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="EJERCITADOR INCLUSIVO BRAZOS MUÑECAS Y HOMBRO MARCA JUMBO, MODELO AEF-215 DC, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$21,641.38" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$21,641.38" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="15" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="EJERCITADOR INCLUSIVO BRAZOS Y MUÑECAS MARCA JUMBO, MODELO AEM-0212 DC, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$20,439.66" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$20,439.66" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="16" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="CONJUNTO DE REHABILITACIÓN MARCA JUMBO, MODELO AEM-118 RE: 1 BANCA EJERCITADORA FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$87,907.76" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$87,907.76" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="17" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MESA DE AJEDREZ PARA SILLA DE RUEDAS INCLUSIVO MARCA JUMBO, MODELO MUM-513-3, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="4" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$37,787.07" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$151,148.28" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="18" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PLANO HÁPTICO PARA UBICACIÓN EN BRAILE MARCA JUMBO FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$25,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$25,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="19" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MESA DE PICNIC INCLUSIVA MARCA JUMBO, MODELO MUM-118, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="6" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$24,530.17" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$147,181.02" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="20" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="RAMPA COMUNICADORA MARCA JUMBO, MODELO PPT-118, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$785,303.45" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$785,303.45" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="21" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="BANCA INCLUSIVA LOGAN MARCA JUMBO, MODELO MUA-1015 DC, FIJA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="6" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$30,670.69" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$184,024.14" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="22" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PISO ANTI IMPACTO COLADO EN SITIO MARCA JUMBO, MODELO PPG1-2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="750" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$1,960.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$1,470,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="SUBTOTAL" /></TableCell>
                                <TableCell align="left"><TypographyBold title="$8,375,039.65" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="IVA" /></TableCell>
                                <TableCell align="right"><TypographyBold title="$1,340,006.34" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="TOTAL" /></TableCell>
                                <TableCell align="right"><TypographyBold title="$707,600.00" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box>
                    <ul>
                        <li><TypographyBody body="Parque Incluyente, “Parque Bosque del Deporte”, Santa Lucía del Camino, Oaxaca con dirección en la Agencia Municipal Sta. María Ixcotel, Municipio Santa Lucía del Camino calle 21 de marzo esquina con Ignacio Pérez S/N. Consta de lo que se describe:" />
                            <span style={{ fontWeight: "bold" }}>Monto contratado $9, 715, 045.99</span></li>
                    </ul>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="META" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="DESCRIPCIÓN" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="CANTIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="UNIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="PRECIO UNITARIO" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="IMPORTE" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="1" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="	MULTIJUEGO MINE INCLUSIVO MARCA JUMBO, MODELO EOS-1612 7.0 DC CON PANEL SORDOMUDO, 3 RESBALADILLAS, 1 PANEL GATO FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$135,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$135,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="2" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MULTIJUEGO MILWAUKEE INCLUSIVO MARCA JUMBO, MODELO EOS-2412 7.0 DC: 2 RESBALADILLAS, 1 TUBO COMUNICADOR, 1 PANEL SORDOMUDO FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$450,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$450,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="3" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PLANO HÁPTICO BRAILE MARCA JUMBO FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$25,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$25,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="SUBTOTAL" /></TableCell>
                                <TableCell align="left"><TypographyBold title="$610,000.00" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="IVA" /></TableCell>
                                <TableCell align="right"><TypographyBold title="$97,600.00" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="TOTAL" /></TableCell>
                                <TableCell align="right"><TypographyBold title="$707,600.00" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box>
                    <ul>
                        <li><TypographyBody body="Parque Incluyente, “Parque Plaza Jardín”, Santa María Huatulco, Oaxaca, con dirección en el Sector A del Municipio de Santa María Huatulco sobre avenida Mitla S/N. Consta de lo siguiente:" />
                            <span style={{ fontWeight: "bold" }}>Monto contratado $1, 823, 520.00</span></li>
                    </ul>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="META" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="DESCRIPCIÓN" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="CANTIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="UNIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="PRECIO UNITARIO" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="IMPORTE" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="1" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MULTIJUEGO MILWAUKEE INCLUSIVO MARCA JUMBO, MODELO EOS-2412 7.0 DC, PRIMER DE PROTECCION PARA ZONAS COSTERAS: 2 RESBALADILLAS, 1 TUBO COMUNICADOR, 1 PANEL SORDOMUDO FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$1,076,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$1,076,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="2" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PISO ANTI IMPACTO COLADO EN SITIO MARCA JUMBO, MODELO PPG1-2 CON PREVIA CAPA ANTI SALITRE PARA UNA MAYOR DURABILIDAD EN ZONAS COSTERAS." />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="100" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="M2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$4,960.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$496,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="SUBTOTAL" /></TableCell>
                                <TableCell align="left"><TypographyBold title="$1,572,000.00" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="IVA" /></TableCell>
                                <TableCell align="right"><TypographyBold title="$251,520.00" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="TOTAL" /></TableCell>
                                <TableCell align="right"><TypographyBold title="$1,823,520.00" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box>
                    <ul>
                        <li><TypographyBody body="Parque Incluyente, “Parque el Llano”, Oaxaca de Juárez, Oaxaca con dirección en Ruta Independencia S/N, Centro, Oaxaca, Oax. Consta de lo siguiente:" />
                            <span style={{ fontWeight: "bold" }}>Monto contratado $2, 955, 863.84</span></li>
                    </ul>
                </Box>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="META" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="DESCRIPCIÓN" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="CANTIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="UNIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="PRECIO UNITARIO" /></TableCell>
                                <TableCell sx={{ textAlign: 'center' }}><TypographyBold title="IMPORTE" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="1" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MULTIJUEGO MINE INCLUSIVO MARCA JUMBO, MODELO EOS-1612 7.0 DC CON PANEL SORDOMUDO, 3 RESBALADILLAS, 1 PANEL GATO FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$135,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$135,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="2" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MULTIJUEGO GALAXY ALTAIR II INCLUSIVO MARCA JUMBO, MODELO GXY951010-5017: 2 COLUMPIOS, 1 GIRATORIO, 2 PASA PIES FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$1,145,000.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$1,145,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="3" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="COLUMPIO MULTIFUNCIONAL INCLUSIVO MARCA JUMBO, MODELO CMF-213 7.0: 2 COLUMPIOS, 1 COLUMPIO SILLA DE RUEDAS FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$42,851.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$85,702.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="4" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="JUEGO DE MOTRICIDAD INCLUSIVO CABALLITO MARCA JUMBO, MODELO IRE-214 FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$18,899.14" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$37,798.28" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="5" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="JUEGO DE MOTRICIDAD INCLUSIVO CAMIONCITO MARCA JUMBO, MODELO IRE-216 FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$19,754.31" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$39,508.62" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="6" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="JUEGO DE MOTRICIDAD INCLUSIVO MOTO MARCA JUMBO, MODELO IRE-416 FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$18,362.93" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$36,725.86" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="7" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="EJERCITADOR INCLUSIVO BARRAS FIJAS MARCA JUMBO, MODELO AEF-315 DC, FIJOS" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$21,525.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$43,050.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="8" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="EJERCITADOR INCLUSIVO COMBINADO DE BRAZO Y MUÑECA MARCA JUMBO, MODELO AEF-415 DC, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$22,464.66" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$44,929.32" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="9" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="EJERCITADOR INCLUSIVO DE BRAZO Y PIERNA MARCA JUMBO, MODELO AEF-515 DC, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$21,495.69" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$42,991.38" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="10" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="MESA DE PICNIC INCLUSIVA MARCA JUMBO, MODELO MUM-118, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="6" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$24,530.17" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$147,181.02" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="11" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PIANO PISO CON LUCES Y SONIDO ''LUCENDI'' MARCA JUMBO, MODELO PTJ-117-1, FIJO" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$150,136.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$300,272.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="12" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PISO ANTI IMPACTO COLADO EN SITIO MARCA JUMBO, MODELO PPG1-2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="250" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="M2" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$1,960.00" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="$490,000.00" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="SUBTOTAL" /></TableCell>
                                <TableCell align="left"><TypographyBold title="$2,548,158.48" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="IVA" /></TableCell>
                                <TableCell align="right"><TypographyBold title="$407,705.36" /></TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell />
                                <TableCell><TypographyBold title="TOTAL" /></TableCell>
                                <TableCell align="right"><TypographyBold title="$2,955,863.84" /></TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography sx={{ textAlign: 'justify', marginY: 3 }}>
                    De acuerdo a cifras del Instituto Nacional de Estadística y Geografía (INEGI) 5.7 por ciento de la población en
                    Oaxaca padece alguna discapacidad, es decir, son 227 mil 262 Personas con discapacidad (PcD). En el municipio
                    de Oaxaca de Juárez la población con discapacidad es de 8,859 PcD, de las cuales 5,170 presentan limitación en
                    movilidad y 2,304 limitación visual. La recreación es una necesidad básica para todas las personas, es un elemento
                    fundamental para su desarrollo. Es importante recalcar que es también un derecho al que deben ejercer todos los
                    ciudadanos, de ahí la necesidad de construir espacios recreativos que permitan a PcD, adultos mayores y a sus familias,
                    convivir, participar, jugar, rehabilitar e integrarse en la sociedad. Actualmente las PcD que buscan el esparcimiento
                    lo hacen en espacios no habilitados para su uso, poniendo en riesgo su integridad y ocasionando daños, en lugar de beneficios;
                    por ello, los espacios del parque incluyente estarán integrados por juegos, que permitan el uso independiente a las niñas y
                    niños con discapacidad el fácil acceso, beneficiando a 3047 personas.
                </Typography>
                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>Proceso de Licitación</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    Forma y términos que regirán los diversos actos de licitación pública
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>EVENTO</StyledTableCell>
                                <StyledTableCell align="center">FECHA</StyledTableCell>
                                <StyledTableCell align="center">HORA</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.evento}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.evento}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.fecha}</StyledTableCell>
                                    <StyledTableCell align="center">{row.hora}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography sx={{ textAlign: 'right' }}>
                    Calendario de eventos
                </Typography>

                <Box>
                    El monto asignado por FOTRADIS 2018 para el Estado de Oaxaca es de <span style={{ fontWeight: "bold" }}> $15, 472, 727.97</span>
                </Box>
                <Box>
                    Una vez realizado el proceso de licitación el monto contratado total es de <span style={{ fontWeight: "bold" }}> $15, 202, 029.83</span>
                </Box>
                <Box>
                    Obteniendo una economía de <span style={{ fontWeight: "bold" }}> $270, 698.14</span>
                </Box>
                <ListFiles
                    itemlist={itemlist}
                />
            </Box>
        </Box>
    );
}