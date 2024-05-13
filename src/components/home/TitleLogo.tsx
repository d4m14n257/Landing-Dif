import React from "react"
import { Box, Typography } from "@mui/material"

type About = {
    title: string,
    description: string
}

export default function TitleLogo(props: About) {
    const { title, description } = props

    return (
        <>
            <Typography
                sx={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginTop: 5,
                }}
            >
                {title}
            </Typography>
            <Box
                component="img"
                src="/image/logo_dif.png"
            />
            <Typography
                sx={{
                    fontSize: 14,
                    opacity: .8,
                    marginBottom: 5,
                    textAlign: "center"
                }}
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </>
    )
}