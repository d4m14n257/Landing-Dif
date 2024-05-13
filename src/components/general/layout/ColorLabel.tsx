import React from "react";
import { Box } from "@mui/system";

export default function ColorLabel() {
    return (
        <Box
            sx={{
                minHeight: 2.5,
                background: `repeating-linear-gradient(
                             to right,
                             #f8e156 0 6.25%,
                             #13a3a3 6.25% 12.5%,
                             #8ab538 12.5% 18.75%,
                             #dd5a7a 18.75% 25%,
                             #990d41 25% 31.25%,
                             #e69522 31.25% 37.5%,
                             #882775 37.5% 43.75%,
                             #24addb 43.75% 50%)`
            }}
        >
        </Box>
    )
}