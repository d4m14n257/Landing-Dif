import { Typography, Box, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { TypographyBold, TypographyBody } from "../src/components/general/TypographyHelp";
import ListFiles from "../src/components/general/ListFiles";

const itemlist =
    [
        {
            "title": "Contrato FOTRADIS 2019",
            "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2019/contrato-2019.pdf"
        },
        {
            "title": "Actas de entrega FOTRADIS 2019",
            "href": "https://difoaxaca.gob.mx/dowload/pdf/fotradis2019/Actas-de-entrega-2019.pdf"
        }
    ]

export default function Fotradis2019() {
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
                    gap: 2
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
                <Typography variant="caption" sx={{ textAlign: "center", color: "#5c5d62" }}>
                    "Este programa es público, ajeno a cualquier partido político. Queda prohibido el uso para fines distintos a los establecidos en el programa"
                </Typography>
                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>FOTRADIS 2019</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    El <span style={{ fontWeight: "bold" }}>Ramo 23</span> del Fondo para la Accesibilidad en el Transporte Público para Personas con Discapacidad (FOTRADIS) tiene como objetivo principal promover la integración y acceso de las personas con discapacidad, en igualdad de condiciones con las demás, al entorno físico, mediante proyectos de inversión en infraestructura pública incluyente.
                </Typography>
                <Typography>
                    En congruencia con este objetivo el Estado de Oaxaca realizará los siguientes proyectos:
                </Typography>
                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>1. Nombre de Proyecto:</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    Equipamiento para la Rehabilitación Física de las Personas con Discapacidad Beneficiadas en el
                    <span style={{ fontWeight: "bold" }}> Centro de Rehabilitación y Educación Especial (CREE) </span>
                    del Estado de Oaxaca
                </Typography>

                <Typography sx={{ fontSize: 20 }}>
                    Ubicación:
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="NOMBRE" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="MUNICIPIO" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="LOCALIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="UBICACIÓN GEOGRÁFICA" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="CREE" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="115 San Bartolo Coyotepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="San Bartolo Coyotepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.9481082, -96.7157426" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography sx={{ fontSize: 20 }}>
                    Descripción:
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    Según INEGI, en Oaxaca residen 227,262 personas con algún tipo de discapacidad, de las cuales el 7.8%
                    corresponde a personas de 0 a 14 años, el 45.7% de 15 a 65 años y el 46.4% de 65 años en adelante.
                    El Centro de Rehabilitación y Educación Especial (CREE) Oaxaca, inició sus actividades el 4 de noviembre
                    del 1974, en las instalaciones del DIF Estatal; posteriormente, el 30 de abril de 2010 se inauguraron las
                    nuevas instalaciones, con una superficie construida de 4,124 m2 en un terreno de 18,405 m2, especialmente
                    diseñado para la atención de personas con discapacidad (PCD). El CREE tiene como objetivo proporcionar
                    servicios de prevención, rehabilitación e integración social a PCD o en riesgo, mediante la instrumentación,
                    coordinación, supervisión y evaluación de sistemas, políticas y procedimientos que permitan la operación y
                    funcionamiento del centro, para planear y aplicar programas de valoración y tratamiento integral, con el
                    propósito de facilitar y contribuir a su reintegración familiar y social, actualmente su horario de operación
                    es de 7am a 3 pm, asimismo no cuenta con equipamiento para brindar terapia física a las PCD, es por eso que con
                    el proyecto Equipamiento para la Rehabilitación Física de las Personas con Discapacidad Beneficiadas en el CREE
                    del Estado de Oaxaca, se realizará la instalación de equipamiento fijo.
                </Typography>

                <Typography sx={{ fontSize: 20 }}>
                    Contrato y Proveedor:
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><TypographyBold title="CONTRATO" /></TableCell>
                                <TableCell><TypographyBold title="PROVEEDOR" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBody body="37/CONTRATO/2019" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="Distribuidora Médica DOSANA S.A. de C.V." />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography sx={{ fontSize: 20 }}>
                    Meta:
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    Instalar equipamiento en el CREE que será utilizado para brindar terapia física a las PCD motriz.
                    Cabe señalar que todo el equipamiento será fijo empotrado al piso y se beneficiará a 1200 PCD.
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="META" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="DESCRIPCIÓN" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="CANTIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="UNIDAD" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="1" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA (BARRA PARALELA ADULTO-INFANTE, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="2" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA (COMPRESERO FRÍO, FIJO)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="4" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="3" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(COMPRESERO CALIENTE PARA 24 COMP., FIJO)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="4" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="4" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(BARRA SUECA, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="5" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(RUEDA O TIMÓN PARA EJERCICIOS DE HOMBRO, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="6" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(CAMINADORA, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="7" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(BICICLETA RECUMBENTE, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="8" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(MESA KANAVEL, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="9" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(ESCALERA CON RAMPA, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="10" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(TINA DE REMOLINO PARA MIEMBROS SUPERIORES E INFERIORES, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
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
                        gap: 0.2
                    }}
                >
                    <Box>Monto asignado: <span style={{ fontWeight: "bold" }}>$1,015,240.64 </span></Box>
                    <Box>Monto disponible: <span style={{ fontWeight: "bold" }}>$1,004,072.99</span></Box>
                    <Box>Monto contratado: <span style={{ fontWeight: "bold" }}>$941,627.68</span></Box>
                    <Box>Economía Generada: <span style={{ fontWeight: "bold" }}>$62, 445.31 </span></Box>
                    <span style={{ fontWeight: "bold" }}>Avance Físico: 100%</span>
                    <span style={{ fontWeight: "bold" }}>Avance Financiero: 100%</span>
                    <span style={{ fontWeight: "bold" }}>Nota: Los recursos remanentes, economías y/o rendimientos, serán reintegrados a la Tesorería de la Federación. </span>
                </Box>

                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>2. Nombre de Proyecto:</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    Equipamiento para la Rehabilitación Física de las Personas con Discapacidad Beneficiadas en 10 Unidades Básicas de Rehabilitación de las Regiones:
                    <span style={{ fontWeight: "bold" }}> Cañada, Mixteca, Sierra Norte, Sierra Sur y Papaloapan </span>del Estado de Oaxaca.
                </Typography>

                <Typography sx={{ fontSize: 20 }}>
                    Ubicación:
                </Typography>
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="NOMBRE" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="MUNICIPIO" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="LOCALIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="UBICACIÓN GEOGRÁFICA" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 1 Acatlán de Pérez Figueroa" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="002 Acatlán de Pérez Figueroa" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Acatlán de Pérez Figueroa	" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="18.539444, -96.607222" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 2 Cosolapa" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="021 Cosolapa" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Cosolapa	" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="18.601944, -96.682500" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 3 Heroica Ciudad de Huajuapan de León" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="039 Heroica Ciudad de Huajuapan de León" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Heroica Ciudad de Huajuapan de León	" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="17.791044, -97.786143" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 4 Ixtlán de Juárez" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="042 Ixtlán de Juárez" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Ixtlán de Juárez	" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="17.333575, -96.489045" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 5 Loma Bonita" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="044 Loma Bonita" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Loma Bonita" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="18.103716, -95.889714" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 6 Putla Villa de Guerrero" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="073 Putla Villa de Guerrero" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Putla Villa de Guerrero" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="17.030556, -97.928333" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 7 San Juan Bautista Cuicatlán" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="177 San Juan Bautista Cuicatlán" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="San Juan Bautista Cuicatlán" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="17.797464, -96.960076" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 8 San Juan Bautista Tuxtepec" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="184 San Juan Bautista Tuxtepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="San Juan Bautista Tuxtepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="18.252222, -96.396111" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 9 San Miguel Soyaltepec" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="278 San Miguel Soyaltepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Temascal" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="18.094444, -96.128333" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 10 Teotitlán de Flores Magón" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="545 Teotitlán de Flores Magón" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Teotitlán de Flores Magón" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="18.134738, -97.073559" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box>
                    <span style={{ fontSize: 20 }}>Descripción:</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    De acuerdo a datos de INEGI en Oaxaca residen 227,262 personas con discapacidad (PCD) de las cuales el 7.8%
                    corresponde a personas de 0 a 14 años, el 45.7% de 15 a 65 años y el 46.4% de 65 en adelante, que representan
                    6% de la población estatal.
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    En el Estado de Oaxaca se ubican las siguientes Unidades Básicas de Rehabilitación (UBR):
                </Typography>
                <Box>
                    <ul>
                        <li><TypographyBody body="UBR 1 Acatlán de Pérez Figueroa" /></li>
                        <li><TypographyBody body="UBR 2 Cosolapa" /></li>
                        <li><TypographyBody body="UBR 3 Heroica Ciudad de Huajuapan de León" /></li>
                        <li><TypographyBody body="UBR 4 Ixtlán de Juárez" /></li>
                        <li><TypographyBody body="UBR 5 Loma Bonita" /></li>
                        <li><TypographyBody body="UBR 6 Putla Villa de Guerrero" /></li>
                        <li><TypographyBody body="UBR 7 San Juan Bautista Cuicatlán" /></li>
                        <li><TypographyBody body="UBR 8 San Juan Bautista Tuxtepec" /></li>
                        <li><TypographyBody body="UBR 9 San Miguel Soyaltepec" /></li>
                        <li><TypographyBody body="UBR 10 Teotitlán de Flores Magón" /></li>
                    </ul>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    Las cuales brindan terapia de rehabilitación a las PCD en un horario de 8am a 4pm, esas unidades son operadas por los
                    municipios mencionados, actualmente el equipo que tienen ha cumplido su vida útil, por la cual con el proyecto
                    Equipamiento para la Rehabilitación Física de las PCD beneficiadas en 10 UBR de las Regiones: Cañada, Mixteca,
                    Sierra Norte, Sierra Sur y Papaloapan del Estado de Oaxaca.
                </Typography>

                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>Contrato y Proveedor:</span>
                </Box>
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="CONTRATO" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="PROVEEDOR" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <TypographyBody body="37/CONTRATO/2019	" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Distribuidora Médica DOSANA S.A. de C.V." />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography sx={{ fontSize: 20 }}>
                    Meta:
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    Instalar equipamiento fijo para brindar terapia física a las PCD motriz en 10 Unidades Básicas de Rehabilitación de las
                    Regiones: Cañada, Mixteca, Sierra Norte, Sierra Sur y Paloapan del Estado de Oaxaca. El equipamiento será fijo empotrado
                    al piso y con el proyecto se beneficiará a 4750 PCD.
                </Typography>
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="META" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="DESCRIPCIÓN" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="CANTIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="UNIDAD" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="1" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA (COMPRESERO FRÍO, FIJO)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10	" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="2" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA (COMPRESERO CALIENTE PARA 24 COMPRESAS, FIJO)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="3" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(BARRA PARALELA ADULTO-INFANTE, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="4" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(BARRA SUECA, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="5" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(RUEDA O TIMÓN PARA EJERCICIOS DE HOMBRO, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="6" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(CAMINADORA, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="7" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(BICICLETA RECUMBENTE, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="20" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="8" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(MESA DE KANAVEL, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="9" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(ESCALERA CON RAMPA, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="10" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(TINA DE REMOLINO PARA MIEMBROS SUPERIORES E INFERIORES, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
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
                        gap: 0.2
                    }}
                >
                    <Box>Monto asignado: <span style={{ fontWeight: "bold" }}>$ 5,761,829.32 </span></Box>
                    <Box>Monto disponible: <span style={{ fontWeight: "bold" }}>$ 5,698,449.20</span></Box>
                    <Box>Monto contratado: <span style={{ fontWeight: "bold" }}>$ 5,694,300.80</span></Box>
                    <Box>Economía Generada: <span style={{ fontWeight: "bold" }}>$4,148.40 </span></Box>
                    <span style={{ fontWeight: "bold" }}>Avance Físico: 100%</span>
                    <span style={{ fontWeight: "bold" }}>Avance Financiero: 100%</span>
                    <span style={{ fontWeight: "bold" }}>Nota: Los recursos remanentes, economías y/o rendimientos, serán reintegrados a la Tesorería de la Federación. </span>
                </Box>
                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>3. Nombre de Proyecto:</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    Equipamiento para la Rehabilitación Física de las Personas con Discapacidad beneficiadas en 10 Unidades Básicas de Rehabilitación de las Regiones:
                    <span style={{ fontWeight: "bold" }}> Costa, Istmo y Valles Centrales </span>, del Estado de Oaxaca.
                </Typography>

                <Typography sx={{ fontSize: 20 }}>
                    Dirección:
                </Typography>
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="NOMBRE" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="MUNICIPIO" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="LOCALIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="UBICACIÓN GEOGRÁFICA" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 1: Ciudad Ixtepec" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="014 Ciudad Ixtepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Ciudad Ixtepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.555833, -95.105000" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 2: San Pablo Huixtepec" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="295 San Pablo Huixtepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="San Pablo Huixtepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.825412, -96.778213" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 3: San Pablo Villa de Mitla" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="298 San Pablo Villa de Mitla" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="San Pablo Villa de Mitla" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.917399, -96.369629" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 4: San Pedro Mixtepec Distrito 22" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="318 San Pedro Mixtepec Distrito 22" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="San Pedro Mixtepec Distrito 22" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="15.982500, -97.083889" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 5: Villa de Tututepec de Melchor Ocampo" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="334 Villa de Tututepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Villa de Tututepec de Melchor Ocampo" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.126448, -97.604232" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 6: Santa María Huatulco" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="413 Santa María Huatulco" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Santa María Huatulco" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="15.829167, -96.319444" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 7: Santiago Llano Grande" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="474 Santiago Llano Grande" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Santiago Llano Grande" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.489280, -98.287868" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 8: Santiago Pinotepa Nacional" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="482 Santiago Pinotepa Nacional" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Santiago Pinotepa Nacional" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.331366, -98.061729" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 9: Santos Reyes Nopala" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="526 Santos Reyes Nopala" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Santos Reyes Nopala" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.103889, -97.143056" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="UBR 10: Villa de Zaachila" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="565 Villa de Zaachila" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Villa de Zaachila" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.950000, -96.753889" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box>
                    <span style={{ fontSize: 20 }}>Descripción:</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    De acuerdo a datos de INEGI en Oaxaca residen 227,262 personas con discapacidad (PCD) de las cuales el 7.8% corresponde
                    a personas de 0 a 14 años, el 45.7% de 15 a 65 años y el 46.4% de 65 en adelante, que representan 6% de la población estatal.
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    En el Estado de Oaxaca se ubican las siguientes Unidades Básicas de Rehabilitación (UBR):
                </Typography>
                <Box>
                    <ul>
                        <li><TypographyBody body="UBR 1 Ciudad Ixtepec" /></li>
                        <li><TypographyBody body="UBR 2 San Pablo Huixtepec" /></li>
                        <li><TypographyBody body="UBR 3 San Pablo Villa de Mitla" /></li>
                        <li><TypographyBody body="UBR 4 San Pedro Mixtepec Distrito 22" /></li>
                        <li><TypographyBody body="UBR 5 Villa de Tututepec de Melchor Ocampo" /></li>
                        <li><TypographyBody body="UBR 6 Santa María Huatulco" /></li>
                        <li><TypographyBody body="UBR 7 Santiago Llano Grande" /></li>
                        <li><TypographyBody body="UBR 8 Pinotepa Nacional" /></li>
                        <li><TypographyBody body="UBR 9 Santos Reyes Nopala" /></li>
                        <li><TypographyBody body="UBR 10 Villa de Zaachila" /></li>
                    </ul>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    Las cuales brindan terapia de rehabilitación a las PCD en un horario de 8am a 4pm, esas unidades son operadas por los municipios
                    mencionados, actualmente el equipo que tienen ha cumplido su vida útil, por la cual con el proyecto Equipamiento para la
                    Rehabilitación Física de las PCD se beneficiará a 10 UBR de las Regiones: Costa, Istmo y Valles Centrales, del Estado de Oaxaca.
                </Typography>

                <Typography sx={{ fontSize: 20 }}>
                    Contrato y Proveedor:
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><TypographyBold title="CONTRATO" /></TableCell>
                                <TableCell><TypographyBold title="PROVEEDOR" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBody body="37/CONTRATO/2019" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="Distribuidora Médica DOSANA S.A. de C.V." />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography sx={{ fontSize: 20 }}>
                    Metas:
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    Instalar equipamiento fijo para brindar terapia física a las PCD motriz en 10 Unidades Básicas de Rehabilitación de las
                    Regiones: Costa, Istmo y Valles Centrales, del Estado de Oaxaca. El equipamiento será fijo empotrado al piso y con el
                    proyecto se beneficiará a 2926 PCD.
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="META" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="DESCRIPCIÓN" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="CANTIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="UNIDAD" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="1" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA (COMPRESERO FRÍO, FIJO)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="2" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA (COMPRESERO CALIENTE PARA 24 COMPRESAS, FIJO)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="3" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(BARRA PARALELA ADULTO-INFANTE, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="4" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(BARRA SUECA, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="5" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(RUEDA O TIMÓN PARA EJERCICIOS DE HOMBRO, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="6" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(CAMINADORA, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="7" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(BICICLETA RECUMBENTE, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="20" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="8" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(MESA KANAVEL, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="9" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(ESCALERA CON RAMPA, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="10" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(TINA DE REMOLINO PARA MIEMBROS SUPERIORES E INFERIORES, FIJA)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="10" />
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
                        gap: 0.2
                    }}
                >
                    <Box>Monto asignado: <span style={{ fontWeight: "bold" }}>$ 5,761,829.32</span></Box>
                    <Box>Monto disponible: <span style={{ fontWeight: "bold" }}>$ 5,698,449.20</span></Box>
                    <Box>Monto contratado: <span style={{ fontWeight: "bold" }}>$ 5,694,300.80</span></Box>
                    <Box>Economía Generada: <span style={{ fontWeight: "bold" }}> $4, 148.40 </span></Box>
                    <span style={{ fontWeight: "bold" }}>Avance Físico: 100%</span>
                    <span style={{ fontWeight: "bold" }}>Avance Financiero: 100%</span>
                    <span style={{ fontWeight: "bold" }}>Nota: Los recursos remanentes, economías y/o rendimientos, serán reintegrados a la Tesorería de la Federación.</span>
                </Box>
                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>3. Nombre de Proyecto:</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    Equipamiento para la Rehabilitación Física de las Personas con Discapacidad beneficiadas en 10 Unidades Básicas de Rehabilitación de las Regiones:
                    <span style={{ fontWeight: "bold" }}> Costa, Istmo y Valles Centrales </span>, del Estado de Oaxaca.
                </Typography>

                <Typography sx={{ fontSize: 20 }}>
                    Dirección:
                </Typography>
                <TableContainer>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="NOMBRE" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="MUNICIPIO" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="LOCALIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="UBICACIÓN GEOGRÁFICA" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="CANNA" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="067 Oaxaca de Juárez" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Oaxaca de Juárez" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="17.048208, -96.728172" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="VALE" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="067 Oaxaca de Juárez" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="Oaxaca de Juárez" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="17.048208, -96.728172" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="CECYD" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="115 San Bartalo Coyotepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="San Bartolo Coyotepec" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="16.9481082, -96.7157426" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box>
                    <span style={{ fontSize: 20 }}>Descripción:</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    El Sistema DIF Oaxaca tiene 3 Centros de Atención a Personas con Discapacidad como: Centro de Atención para Niñas y
                    Niños con Autismo (CANNA), ofrece terapia gratuita a niñas y niños con autismo, imparte talleres, pláticas y asesorías,
                    atiende a 110 beneficiarios, esto en un horario de 9am a 4pm; Voy a Aprender a Leer Escribiendo (VALE) brinda estimulación
                    y atención psicopedagógica a niñas y niños de 5 a 11 años que presentan dificultades en el proceso de aprendizaje de la
                    lecto-escritura, a través de actividades psicopedagógicas, atiende a 64 beneficiarios en un horario de 9am a 8pm.
                    El Centro de Atención Integral para Ciegos y Débiles Visuales del Estado de Oaxaca (CECYD), busca cubrir las necesidades
                    de formación y capacitación de PCD visual que propicie un buen desarrollo con niveles de independencia y autogestión,
                    atiende a 100 beneficiarios en un horario de 10am a 3pm. Sin embargo, los centros no cuentan con el equipamiento y para
                    los que lo tienen como es el caso de CANNA este se encuentra obsoleto tras 10 años de funcionamiento,
                    originando que no se cumpla con las expectativas y necesidades de la demanda que tiene cada centro.
                </Typography>

                <Typography sx={{ fontSize: 20 }}>
                    Contrato y Proveedor:
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><TypographyBold title="CONTRATO" /></TableCell>
                                <TableCell><TypographyBold title="PROVEEDOR" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBody body="37/CONTRATO/2019" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="Distribuidora Médica DOSANA S.A. de C.V." />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>

                <Typography sx={{ fontSize: 20 }}>
                    Meta:
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    Instalar equipamiento en el CREE que será utilizado para brindar terapia física a las PCD motriz.
                    Cabe señalar que todo el equipamiento será fijo empotrado al piso y se beneficiará a 1200 PCD.
                </Typography>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="META" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="DESCRIPCIÓN" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="CANTIDAD" /></TableCell>
                                <TableCell sx={{ textAlign: 'left' }}><TypographyBold title="UNIDAD" /></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell><TypographyBold title="1" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(CENTRO DE ESTIMULACIÓN MULTISENSORIAL(PANELES, CUBO CTRL SOFT, ESPEJO)FIJO)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="2" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(PANEL INTERACTIVO (INC. PLÁSTICO CON TEXTURAS, BOCINA, PANTALLA TÁCTIL)FIJO)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA" />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell><TypographyBold title="3" /></TableCell>
                                <TableCell>
                                    <TypographyBody body="PZA(MÁQUINA DE LECTURA PARLANTE FIJO)" />
                                </TableCell>
                                <TableCell>
                                    <TypographyBody body="1" />
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
                        gap: 0.2
                    }}
                >
                    <Box>Monto asignado: <span style={{ fontWeight: "bold" }}>$1,993,674.72 </span></Box>
                    <Box>Monto disponible: <span style={{ fontWeight: "bold" }}> $1,971,744.30</span></Box>
                    <Box>Monto contratado: <span style={{ fontWeight: "bold" }}>$1,965,569.42</span></Box>
                    <Box>Economía Generada: <span style={{ fontWeight: "bold" }}> $6,174.88 </span></Box>
                    <span style={{ fontWeight: "bold" }}>Avance Físico: 100%</span>
                    <span style={{ fontWeight: "bold" }}>Avance Financiero: 100%</span>
                    <span style={{ fontWeight: "bold" }}>Nota: Los recursos remanentes, economías y/o rendimientos, serán reintegrados a la Tesorería de la Federación. </span>
                </Box>
                <Box>
                    <span style={{ fontWeight: "bold", fontSize: 20 }}>PROCESO DE LICITACIÓN</span>
                </Box>
                <Typography sx={{ textAlign: 'justify' }}>
                    El recurso asignado de FOTRADIS 2019 para el Estado de Oaxaca es de $14,532,574.00, el recurso ministrado al
                    Sistema DIF Oaxaca es de $7,186,357.85 el día jueves 06 de junio de 2019, y los oficios de autorización de recursos
                    emitidos por la Secretaría de Finanzas del Gobierno del Estado de Oaxaca fueron recibidos el día jueves 27 de junio de 2019.
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    Tomando en cuenta lo anterior, y con base en el artículo 41 Fracción V del Reglamento de la Ley de Adquisiciones,
                    Arrendamientos y Servicios del Sector Público, que dice:
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    Para los efectos de lo establecido en el artículo 41 de la Ley deberá considerarse, respecto de las fracciones de dicho
                    precepto legal, lo que se cita a continuación.
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    V. La excepción a la licitación pública prevista en la fracción V, será procedente cuando exista un nexo causal directo
                    entre el caso fortuito o la fuerza mayor y la imposibilidad o impedimento de la dependencia o
                    entidad para obtener, en el tiempo requerido, los bienes o servicios que necesita mediante el procedimiento de licitación pública;
                </Typography>
                <Typography sx={{ textAlign: 'justify' }}>
                    Derivado de lo anterior se llevó a cabo el proceso de adjudicación directa, concretando mediante la firma del contrato
                    37/CONTRATO/2019 de fecha 10/10/2019, resultando ganadora la empresa DMD Distribuidora
                    Médica Dosana S.A. de C.V. por un monto de $14,295,798.70 I.V.A. incluido. Para tales fines se adjunta a esta página
                    el contrato en comento.
                </Typography>
                <ListFiles
                    itemlist={itemlist}
                />
            </Box>
        </Box>

    );
}