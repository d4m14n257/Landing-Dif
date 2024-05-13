import { Typography } from "@mui/material"

export const TypographyBold: React.FC<{ title: string }> = ({ title }) => {
    return (
        <Typography
            sx={{
                fontWeight: "bold",
                '@media screen and (max-width: 770px)': {
                    fontSize: 13,
                },
                '@media screen and (max-width: 670px)': {
                    fontSize: 12,
                },
            }}
        >
            {title}
        </Typography>
    )
}

export const TypographyBody: React.FC<{ body: string }> = ({ body }) => {
    return (
        <Typography
            sx={{
                textAlign: "justify",
                '@media screen and (max-width: 770px)': {
                    fontSize: 13,
                },
                '@media screen and (max-width: 670px)': {
                    fontSize: 12,
                },
            }}
            variant="body1"
        >
            {body}
        </Typography>
    )
}