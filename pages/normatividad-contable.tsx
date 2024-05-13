import { Typography, Box } from "@mui/material";
import ListFiles from "../src/components/general/ListFiles";

const itemlist = [
    {
        "title": "Anexo 1 Matriz De Conversion",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/normatividadcontable/2018/agosto/ANEXO-1-MATRIZ-DE-CONVERSION.pdf"
    },
    {
        "title": "BANCANET",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/normatividadcontable/2018/agosto/BANCANET.pdf"
    },
    {
        "title": "Conciliacion Patrimonial",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/normatividadcontable/2018/agosto/CONCILIACION-PATRIMONIAL.pdf"
    },
    {
        "title": "Guias Contabilizadoras",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/normatividadcontable/2018/agosto/GUIAS-CONTABILIZADORAS.pdf"
    },
    {
        "title": "Manual De Contabilidad SEFIN",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/normatividadcontable/2018/agosto/MANUAL-DE-CONTABILIDAD-SEFIN.pdf"
    },
    {
        "title": "Modulo Bienes Materiales SICOREM1",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/normatividadcontable/2018/agosto/MODULO-BIENES-MATERIALES-SICOREM1.pdf"
    },
    {
        "title": "Modulo Bienes Muebles E Inmuebles SICIPO",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/normatividadcontable/2018/agosto/MODULO-BIENES-MUEBLES-E-INMUEBLES-SICIPO.pdf"
    },
    {
        "title": "Modulo Diario Y Mayor",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/normatividadcontable/2018/agosto/MODULO-DIARIO-Y-MAYOR.pdf"
    },
    {
        "title": "Modulo Estados Financieros",
        "href": "https://difoaxaca.gob.mx/dowload/pdf/normatividadcontable/2018/agosto/MODULO-ESTADOS-FINANCIEROS.pdf"
    }
]


export default function accountingRegulations() {
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
                    Normatividad Contable
                </Typography>
                <ListFiles
                    itemlist={itemlist}
                />
            </Box>
        </Box>
    );
}