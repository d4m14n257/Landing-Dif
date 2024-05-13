import { Typography, Box } from "@mui/material";
import ListFiles from "../src/components/general/ListFiles";

const itemlist = [
    {
        "title": "Programa Anual de Adqisición Federal 2022",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/paaasfed2022/Programa_Anual_de_Adquisiciones_Federal_2022.pdf"
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
                    Programa Anual de Adquisición Federal 2022
                </Typography>
                <ListFiles
                    itemlist={itemlist}
                />
            </Box>
        </Box>
    );
}