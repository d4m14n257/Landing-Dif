import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { FinishedForm } from "../../components/general/types/types";

export default function BenefitResponse(props: FinishedForm) {
    const { handleNext, handleBack, activeStep, handleRequestCompleteForm } = props

    return (
        <>
            <Typography variant="h6" sx={{ display: "flex", minHeight: 560, opacity: 0.5, alignItems: "center", textAlign: "center" }}>
                Asegurece de que todos los datos ingresados son correctos, en caso de estar seguro, finalize la solicitud. En caso contrario regrese y verifique la infomación.
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={() => handleBack()}
                    sx={{ mr: 1 }}
                >
                    Regresar
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                    onClick={() => {
                        handleNext()
                        handleRequestCompleteForm()
                    }}
                >
                    Finalizar
                </Button>
            </Box>
        </>
    );
}
