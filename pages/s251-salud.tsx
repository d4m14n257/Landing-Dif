import { Typography, Box } from "@mui/material";
import ListFiles from "../src/components/general/ListFiles";

const itemlist = [
    {
        "title": "OFICIO",
        "href": ""
    },
    {
        "title": "PADRON DE BENEFICIARIOS",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/S251SALUD/PADRON_DE_BENEFICIARIOS.xlsx"
    },
    {
        "title": "ANEXO 4. Informe Avance Físico Financiero del PSBC 2020",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/S251SALUD/ANEXO_4_Informe_Avance_Físico_Financiero_del_PSBC_2020.xlsx"
    }
]

export default function S251() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "90%",
                    gap: 2,
                    marginY: 5
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
                    S251SALUD
                </Typography>
                <ListFiles
                    itemlist={itemlist}
                />
            </Box>
        </Box>
    );
}