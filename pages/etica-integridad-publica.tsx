import { useState } from "react";
import { Box, Button, ButtonGroup, Card, CardActions, Typography } from "@mui/material";
import ListFiles from "../src/components/general/ListFiles";
import { getLocalData } from "../lib/getLocalData";

export async function getStaticProps() {
    const reports = await getLocalData("json/etica/itemsList.json")

    return {
        props: {
            reports: reports
        }
    }
}

export default function ComprehesiveEthics({ reports }) {
    const [positionCurrent, setPositionCurrent] = useState([-1, -1]);
    const [activeList, setActiveList] = useState(false);
    const [report, setReport] = useState([]);
    const [buttons, setButtons] = useState([
        [
            { id: 971, state: false, name: "INTEGRANTES DEL COMITÉ DE ÉTICA" },
            { id: 972, state: false, name: "MARCO JURÍDICO" },
            { id: 973, state: false, name: "PLAN ANUAL DE TRABAJO" },
            { id: 974, state: false, name: "INFORME ANUAL DE TRABAJO" }
        ],
        [
            { id: 975, state: false, name: "ACCIONES DE SENSIBILIZACIÓN" },
            { id: 976, state: false, name: "CÓDIGO DE CONDUCTA" },
            { id: 977, state: false, name: "CÓDIGO DE ÉTICA" },
            { id: 978, state: false, name: "ACTAS DE SESIÓN" }
        ],
        [
            { id: 979, state: false, name: "BUZÓN DE QUEJAS Y DENUNCIAS" },
            { id: 980, state: false, name: "PROTOCOLO DE SERVICIO PARA LA ATENCIÓN A LA SOCIEDAD" },
            { id: 981, state: false, name: "REGLAS DE INTEGRIDAD" }
        ],
        [
            { id: 982, state: false, name: "PROTOCOLO PARA LA PREVENCIÓN, ATENCIÓN Y SANCIÓN DEL HOSTIGAMIENTO SEXUAL Y/O ACOSO SEXUAL EN LA ADMINISTRACIÓN PÚBLICA ESTATAL" },
            { id: 983, state: false, name: "PROTOCOLO PARA SOMETER QUEJAS Y DENUNCIAS ANTE EL COMITÉ DE ÉTICA Y DE PREVENCIÓN DE CONFLICTO DE INTERÉS DEL SISTEMA DIF OAXACA" }
        ]
    ]);

    const handleSelectButton = async (rowIndex, columnIndex) => {
        const newButtons = [...buttons];
        const newPosition = [...positionCurrent];

        newButtons[rowIndex][columnIndex] = {
            ...newButtons[rowIndex][columnIndex],
            state: !newButtons[rowIndex][columnIndex].state
        };

        if (newPosition[0] != -1 && newButtons[newPosition[0]][newPosition[1]].state && (newPosition[0] != rowIndex || newPosition[1] != columnIndex)) {
            newButtons[newPosition[0]][newPosition[1]] = {
                ...newButtons[newPosition[0]][newPosition[1]],
                state: !newButtons[newPosition[0]][newPosition[1]].state
            };
        }

        if (newButtons[rowIndex][columnIndex].state) {
            setActiveList(true);
            setReport(reports[rowIndex][columnIndex]);
        }
        else {
            setActiveList(false);
        }

        newPosition[0] = rowIndex;
        newPosition[1] = columnIndex;

        setPositionCurrent(newPosition);
        setButtons(newButtons);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: 5,
                marginTop: 5
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    color: "#a4254b",
                    textAlign: "center",
                    fontWeight: "bold"
                }}
            >
                Ética e Integridad Pública
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    width: "100%"
                }}
            >
                <Card sx={{ minWidth: 275, maxWidth: "75%" }}>
                    {buttons.map((actiones, rowIndex) => (
                        <CardActions
                            key={((rowIndex + 1) * 13)}
                            sx={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <ButtonGroup style={{ color: "#e83e8c" }} size="medium" color="secondary" variant="text" aria-label="text button group">
                                {actiones.map((action, columnIndex) => (
                                    <Button
                                        key={action.id}
                                        sx={{
                                            color: action.state ? "white" : "#e83e8c",
                                            background: action.state ? "#db3762" : "white",
                                            '&:hover': {
                                                background: "#ff95a2",
                                            },
                                        }}
                                        onClick={() => { handleSelectButton(rowIndex, columnIndex) }}>{action.name}</Button>
                                ))}
                            </ButtonGroup>
                        </CardActions>
                    ))}
                </Card>
            </Box>
            <Box
                sx={{ width: "85%" }}
            >
                {activeList &&
                    <ListFiles
                        itemlist={report}
                    />}
            </Box>
        </Box>
    );
}