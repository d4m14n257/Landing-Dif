import { Grid, Box, Typography } from "@mui/material";
import CardReport from "../src/components/general/CardReport";
import { getLocalData } from "../lib/getLocalData";

export async function getStaticProps() {
    const billes = await getLocalData("json/conac/billes.json")
    const subsidiaries = await getLocalData("json/conac/subsidiaries.json")
    const budget = await getLocalData("json/conac/budget.json")
    const accouts = await getLocalData("json/conac/accouts.json")

    return {
        props: {
            billes: billes,
            subsidiaries: subsidiaries,
            budget: budget,
            accouts: accouts
        }
    }
}

export default function ReportConac({ billes, subsidiaries, budget, accouts }) {

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3
            }}
        >
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#a4254b", marginTop: 5 }}>
                Estados Financieros
            </Typography>
            <Grid
                sx={{
                    width: "98%",
                }}
                container
                spacing={4}>
                {billes.map((report, index) => (
                    <Grid
                        key={(index + 1) * 4154}
                        xs={6}
                        md={2.4}
                        item
                    >
                        <CardReport
                            title={report.title}
                            path={report.path}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#a4254b" }}>
                Ayudas Sociales y Subsidios
            </Typography>
            <Grid
                sx={{
                    marginBottom: 5,
                    width: "98%",
                }}
                container
                spacing={4}>
                {subsidiaries.map((report, index) => (
                    <Grid
                        key={(index + 1) * 1007}
                        xs={6}
                        md={2.4}
                        item
                    >
                        <CardReport
                            title={report.title}
                            path={report.path}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#a4254b" }}>
                Reportes Presupuestales
            </Typography>
            <Grid
                sx={{
                    width: "98%",
                }}
                container
                spacing={4}>
                {budget.map((report, index) => (
                    <Grid
                        key={(index + 1) * 1013}
                        xs={6}
                        md={2.4}
                        item
                    >
                        <CardReport
                            title={report.title}
                            path={report.path}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h4" sx={{ fontWeight: "bold", color: "#a4254b" }}>
                Cuenta Pública
            </Typography>
            <Grid
                sx={{
                    width: "98%",
                    marginBottom: 5
                }}
                container
                spacing={4}>
                {accouts.map((report, index) => (
                    <Grid
                        key={(index + 1) * 1017}
                        xs={6}
                        md={2.4}
                        item
                    >
                        <CardReport
                            title={report.title}
                            path={report.path}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
