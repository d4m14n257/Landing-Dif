import { Box, Typography } from "@mui/material";
import ListFiles from "../src/components/general/ListFiles";
import { getLocalData } from "../lib/getLocalData";

export async function getStaticProps() {
    const comites = await getLocalData("json/comites/list.json")

    return {
        props: {
            comites: comites
        }
    }
}

export default function Committees({ comites }) {
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
                    Comites
                </Typography>
                <ListFiles
                    itemlist={comites}
                />
            </Box>
        </Box>
    );
}