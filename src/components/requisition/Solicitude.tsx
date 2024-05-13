import { useEffect, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Download, Print, Refresh } from '@mui/icons-material';
import { useRouter } from "next/router";

export default function Solicitude(props) {
    const router = useRouter()
    const { responseSolicitude, benefit, userBenefit, userRequest } = props;
    const [JsReportClient, setJsReportClient] = useState(null);
    const [request, setRequest] = useState({});

    useEffect(() => {
        import('jsreport-browser-client-dist')
        .then((module) => {
            const JsReportClient = module.default;
            setJsReportClient(JsReportClient);
        })
        .catch((error) => {
            console.error('Error al importar JsReportClient:', error);
        });

        console.log(responseSolicitude)

        if (responseSolicitude.status == 200 || responseSolicitude.status == 201) {
            setRequest({
                template: {
                    shortid: "S1lGqFE1KP"
                },
                data: {
                    folio: responseSolicitude.data.invoce,
                    solicitante: {
                        nombre: `${userRequest.nombre} ${userRequest.primer_apellido} ${userRequest.segundo_apellido}`
                    },
                    beneficiario: {
                        nombre: `${userBenefit.nombre} ${userBenefit.primer_apellido} ${userBenefit.segundo_apellido}`,
                        curp: userBenefit.curp.curp,
                        municipio: userBenefit.domicilio.municipio_id.name
                    },
                    beneficio: benefit.name,
                    documentos: responseSolicitude.data.documents
                }
            })
        }
    }, [])

    const handleGetDocument = async (option) => {
        if (typeof window !== "undefined") {
            JsReportClient.serverUrl = "https://reportes.difoaxaca.gob.mx";
            JsReportClient.headers["Authorization"] = `Basic ${btoa("difo:21qwerty43")}`;

            JsReportClient.renderAsync(request).then(
                (response) => {
                    switch (option) {
                        case 0:
                            response.download(`Solicitud-Web-${responseSolicitude.data.invoce}.pdf`);
                            break;
                        case 1:
                            const html = "<html>" + "<style>html,body {padding:0;margin:0;} iframe {width:100%;height:100%;border:0}</style>" + "<body>" +
                                '<iframe type="application/pdf" src="' + response.toDataURI() + '"></iframe>' + "</body></html>";

                            const report = window.open("about:blank", "Solicitud-Web-${responseSolicitude.data.invoce}.pdf");
                            report.document.write(html);
                            report.document.close();
                    }
                })
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1
            }}
        >
            {responseSolicitude.status == 201 || responseSolicitude.status == 200 ?
                <>
                    <Box sx={{ fontWeight: "bold", fontSize: 20 }}>
                        Folio: <span style={{ color: "#d12654" }}>{responseSolicitude.data.invoce}</span>
                    </Box>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                            Beneficio:
                        </Typography>
                        <Typography variant="body2" sx={{ opacity: 0.8 }}>
                            {benefit.name}
                        </Typography>
                    </Box>
                    {responseSolicitude.data.documents.length > 0 &&
                        <>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Documentación requerida:
                            </Typography>
                            <ul>
                                {responseSolicitude.data.documents.map((document) => (
                                    <li>
                                        <Typography>
                                            {document.documento_nombre}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </>
                    }
                </> :
                <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        Sequimiento de la solicitud:
                    </Typography>
                    <Typography variant="body2" sx={{opacity: 0.8}}>
                        {responseSolicitude.message}
                    </Typography>
                </Box>
            }
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Línea inmediata de Atención Ciudadana:</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>(951) 501 5050</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Ext. 1071/1071</Typography>
            </Box>
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Celular</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>951 471 23 66</Typography>
            </Box>
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Correo Electrónico</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>dif.aciudadana@oaxaca.gob.mx</Typography>
            </Box>
            <Box>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>Dirección</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Vicente Guerrero 114, Col. Miguel Alemán Valdez, C.P.68120. Oaxaca de Juárez, Oaxaca.</Typography>
            </Box>
            <Box
                sx={{
                    marginTop: 5
                }}
            >
                {(responseSolicitude.status == 201 || responseSolicitude.status == 200) ?
                    <Stack direction="row" justifyContent="center" spacing={5}>
                        <Button startIcon={<Download />} sx={{ background: "#d12654", color: "white" }} onClick={() => handleGetDocument(0)}>
                            Descargar
                        </Button>
                        <Button startIcon={<Print />} sx={{ background: "#d12654", color: "white" }} onClick={() => handleGetDocument(1)}>
                            Imprimir
                        </Button>
                        <Button startIcon={<Refresh />} sx={{ background: "#d12654", color: "white" }} onClick={() => { router.reload() }}>
                            Regresar
                        </Button>
                    </Stack> :
                    <Button startIcon={<Refresh />} sx={{ background: "#d12654", color: "white", position: "relative", width: 122, left: "calc(50% - 61px)" }} onClick={() => { router.reload() }}>
                        Regresar
                    </Button>}
            </Box>
        </Box>
    )
}
