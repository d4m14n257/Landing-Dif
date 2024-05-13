import { Typography, Box } from "@mui/material";
import ListFiles from "../src/components/general/ListFiles";

const itemlist = [
    {
        "title": "Oficio 017 solicitud SCyTG",
        "href": "https://difoaxaca.gob.mx/dowload/PEI/Oficio_017_solicitud_SCyTG.pdf"
    },
    {
        "title": "Plan Estratégico Institucional DIF",
        "href": "https://difoaxaca.gob.mx/dowload/PEI/Plan_Estratégico_Institucional_DIF.pdf"
    }
]

export default function PEI2020() {
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