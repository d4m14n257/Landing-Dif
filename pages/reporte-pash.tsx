import { Grid, Box, Typography } from "@mui/material";
import CardReport from "../src/components/general/CardReport";
import { getLocalData } from "../lib/getLocalData";

export async function getStaticProps() {
    const reports = await getLocalData("json/pash/reports.json")

    return {
        props: {
            reports: reports
        }
    }
}

export default function PashReport({ reports }) {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3
            }}
        >
            <Typography variant="h4" sx={{ color: "#a4254b", marginTop: 5, fontWeight: "bold" }}>
                Reportes PASH
            </Typography>
            <Grid
                sx={{
                    marginBottom: 5,
                    width: "98%",
                }}
                container
                spacing={4}>
                {reports.map((report, index) => (
                    <Grid
                        key={(index + 1) * 1007}
                        xs={6}
                        md={4}
                        lg={3}
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
    );
}