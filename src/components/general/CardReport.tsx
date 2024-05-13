import React from "react"
import { Card, CardHeader, CardContent, Typography } from '@mui/material'

export default function CardReport(props) {
    const { title, path } = props;

    return (
        <Card
            sx={{
                height: "100%"
            }}
        >
            <CardHeader
                title={
                    <Typography
                        variant="h5"
                        sx={{
                            textAlign: "center",
                            color: "#001225"
                        }}
                    >
                        {title}
                    </Typography>
                }
            />
            <CardContent>
                {path.map((report, index) => {
                    if (report.href) {
                        return (
                            <a
                                key={(index + 1) * 1107}
                                href={report.href}
                                style={{ textDecoration: "none" }}
                                target="_black"
                            >
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: "#5c5d62",
                                        fontSize: 13,
                                        '&:hover': {
                                            color: "#db3762",
                                            fontSize: 14,
                                        },
                                    }}
                                >
                                    {report.subtitle.toUpperCase()}
                                </Typography></a>
                        );
                    }
                    else {
                        return (
                            <>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        textAlign: "left",
                                        color: "#002b59",
                                        fontWeight: "bold"
                                    }}
                                >
                                    {report.title}
                                </Typography>
                                {report.path.map((item, index) => (
                                    <a
                                        key={(index + 1) * 12113}
                                        href={item.href}
                                        style={{ textDecoration: "none" }}
                                        target="_black"
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: "#5c5d62",
                                                fontSize: 13,
                                                '&:hover': {
                                                    color: "#db3762",
                                                    fontSize: 14,
                                                },
                                            }}
                                        >
                                            {item.subtitle.toUpperCase()}
                                        </Typography></a>
                                ))}
                            </>
                        );
                    }

                })}
            </CardContent>
        </Card>
    );
}