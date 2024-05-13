import { useEffect, useState } from "react";
import { getActions } from "../src/api/home";
import { List, ListItem, ListItemButton, ListItemText, Grid, Box, Typography, Divider, Paper, Button } from "@mui/material";
import ModalCommunique from "../src/components/home/ModalCommunique";

export default function Communique() {
    const [open, setOpen] = useState(false);
    const [selectCommunique, setSelectCommunique] = useState(null);
    const [hiddenCommunique, setHiddenCommunique] = useState(45);
    const [hiddenButtons, setHiddenButtons] = useState([false]);
    const [success, setSuccess] = useState(null);
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(null);
    const [pages, setPages] = useState([2, 3]);

    useEffect(() => {
        getActions(pages[0], pages[1]).then(
            (response) => {
                setSuccess(response.success);
                setData(response.data);
                setTotal(response.total);
            });

    }, [])

    const handleOpen = (communique) => {
        setSelectCommunique(communique)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleDateShow = (communique) => {
        const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let date: Date | string = new Date((communique.date) + " UTC")
        date.setHours(24)
        date = date.toLocaleDateString('es-MX', options).toString()
        date = date.charAt(0).toUpperCase() + date.slice(1)

        return date;
    }

    const handleChangeCommunique = async () => {
        const newHiddenButtons = [...hiddenButtons];
        let pagesCurrent = [...pages];
        let hiddenCommuniqueCurrent = hiddenCommunique;

        pagesCurrent[0] += 2;
        pagesCurrent[1] += 2;

        if (hiddenCommuniqueCurrent < total) {
            newHiddenButtons[0] = false;
            hiddenCommuniqueCurrent += 30;

            await getActions(pagesCurrent[0], pagesCurrent[1]).then(
                (response) => {
                    setSuccess(response.success);
                    setData(response.data);
                });
        }

        if (hiddenCommuniqueCurrent >= total)
            newHiddenButtons[0] = true;

        setHiddenCommunique(hiddenCommuniqueCurrent);
        setPages(pagesCurrent);
        setHiddenButtons(newHiddenButtons);
    };

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
                Comunicados
            </Typography>
            {success && data.length ?
                <>
                    <Grid container spacing={4} sx={{ marginBottom: 5, width: "98%", }} justifyContent="space-around">
                        {data.map((communiques, index) => (
                            <Grid
                                key={13 * (index + 1)}
                                item
                                xl={3}
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <Paper
                                    sx={{
                                        minHeight: 450,
                                        borderRadius: 5
                                    }}
                                >
                                    <List>
                                        <ListItem>
                                            <ListItemText
                                                primary={<Typography variant="h6">{handleDateShow(communiques[0])}</Typography>}
                                            />
                                        </ListItem>
                                        {communiques.map((communique, idx) => (
                                            <Box
                                                key={idx + 17 * 1}
                                            >
                                                <Divider variant="middle" component="li" />
                                                <ListItem>
                                                    <ListItemButton
                                                        sx={{
                                                            gap: 3
                                                        }}
                                                        onClick={() => { handleOpen(communique) }}
                                                    >
                                                        <ListItemText
                                                            primary={<Typography variant="body2" sx={{ fontSize: { md: 13, xs: 15 }, fontWeight: { md: 700, xs: 625 } }}> {communique.title} </Typography>}
                                                            secondary={<Typography variant="subtitle2" sx={{ fontSize: { md: 11, xs: 13 }, opacity: 0.6 }}>{handleDateShow(communique)}</Typography>} />
                                                        <Box
                                                            component="img"
                                                            src={communique.image}
                                                            sx={{
                                                                width: 85,
                                                                height: 85,
                                                                borderRadius: 3
                                                            }}
                                                        />
                                                    </ListItemButton>
                                                </ListItem>
                                            </Box>
                                        ))}
                                    </List>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            width: "85%",
                            flexDirection: 'row-reverse',
                            justifyContent: 'center',
                            marginTop: -4
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                display: hiddenButtons[0] ? "none" : "block",
                                background: 'linear-gradient(to right, #009ee1, #009542)'
                            }}
                            onClick={() => { handleChangeCommunique() }}
                        >
                            Ver más antiguos
                        </Button>
                    </Box>
                </> :
                <Typography
                    variant="h4"
                    sx={{
                        userSelect: 'none',
                        opacity: '0.4'
                    }}
                >
                    No hay comunicados que mostrar
                </Typography>
            }
            {open && <ModalCommunique
                open={open}
                handleClose={handleClose}
                communique={selectCommunique}
            />}
        </Box>
    );
}