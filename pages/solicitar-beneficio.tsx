import { useEffect, useState } from "react";
import FormRequest from "../src/components/requisition/FormRequest";
import BenefitResponse from "../src/components/requisition/BenefitResponse";
import Benefit from "../src/components/requisition/Benefit";
import Solicitude from "../src/components/requisition/Solicitude";
import { UserForm } from "../src/components/general/types/types";
import { Typography, Box, Stepper, Step, StepLabel } from "@mui/material";
import { setRequestPerson, setRequestSolicitude } from "../src/api/benefit";

export default function BenefitRequest() {
    const [benefit, setBenefit] = useState(null)
    const [checked, setChecked] = useState(false)
    const [completed, setCompleted] = useState(false)

    const [activeStep, setActiveStep] = useState(0);
    const [steps, setSteps] = useState(['Beneficio', 'Solicitante', 'Beneficiario', 'Solicitud']);
    const [fontS, setFontS] = useState({
        '@media screen and (max-width: 650px)': {
            fontSize: 13,
        },
        '@media screen and (max-width: 550px)': {
            fontSize: 10,
        },
        '@media screen and (max-width: 445px)': {
            fontSize: 9,
        },
        '@media screen and (max-width: 405px)': {
            fontSize: 8.5,
        },
    });

    const [userRequest, setUserRequest] = useState<UserForm>(null)
    const [userBenefit, setUserBenefit] = useState<UserForm>(null)

    const [responseSolicitude, setResponseSolicitude] = useState(null)

    useEffect(() => {
        if (completed) {
            if (benefit.exhausted) {
                if (!benefit.date)
                    benefit.exhausted = true
                else {
                    const dateNow = new Date()
                    const dateExhausted = new Date(benefit.date)

                    if (dateExhausted > dateNow)
                        benefit.exhausted = false
                    else
                        benefit.exhausted = true
                }
            }
            else
                benefit.exhausted = false;

            setRequestSolicitude({ userBenefit, userRequest, benefit }).then(
                (response) => {
                    setResponseSolicitude(response);
                });
        }
    }, [completed])

    const handleBenefit = (benefit: any) => {
        setBenefit(benefit)
    }


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);

        if (!checked) {
            setSteps(['Beneficio', 'Beneficiario', 'Solicitud'])
            setFontS({
                '@media screen and (max-width: 650px)': {
                    fontSize: 13,
                },
                '@media screen and (max-width: 550px)': {
                    fontSize: 13,
                },
                '@media screen and (max-width: 445px)': {
                    fontSize: 11,
                },
                '@media screen and (max-width: 405px)': {
                    fontSize: 11,
                },
            })
        }
        else {
            setSteps(['Beneficio', 'Solicitante', 'Beneficiario', 'Solicitud'])
            setFontS({
                '@media screen and (max-width: 650px)': {
                    fontSize: 13,
                },
                '@media screen and (max-width: 550px)': {
                    fontSize: 10,
                },
                '@media screen and (max-width: 445px)': {
                    fontSize: 9,
                },
                '@media screen and (max-width: 405px)': {
                    fontSize: 8.5,
                },
            })
        }
    };

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleRequestCompleteForm = async () => {
        if (!userBenefit.curp.id)
            await setRequestPerson(userBenefit)

        if (!userRequest)
            setUserRequest(userBenefit)
        else if (!userRequest.curp.id)
            await setRequestPerson(userRequest)

        setCompleted(true)
    }

    const ComponentStep: React.FC<{ index: number }> = ({ index }) => {
        if (!checked) {
            switch (index) {
                case 0: {
                    return (
                        <Benefit
                            benefit={benefit}
                            handleBenefit={handleBenefit}
                            checked={checked}
                            handleChange={handleChange}
                            handleNext={handleNext}
                            handleBack={handleBack}
                            activeStep={activeStep}
                        />
                    )
                }
                case 1: {
                    return (
                        <FormRequest
                            setUserThatFill={setUserRequest}
                            userThatFill={userRequest}
                            handleNext={handleNext}
                            handleBack={handleBack}
                            activeStep={activeStep}
                        />
                    )
                }
                case 2: {
                    return (
                        <FormRequest
                            setUserThatFill={setUserBenefit}
                            userThatFill={userBenefit}
                            handleNext={handleNext}
                            handleBack={handleBack}
                            activeStep={activeStep}
                        />
                    )
                }
                case 3: {
                    return (
                        <BenefitResponse
                            handleRequestCompleteForm={handleRequestCompleteForm}
                            handleNext={handleNext}
                            handleBack={handleBack}
                            activeStep={activeStep}
                        />
                    )
                }
            }
        }
        else {
            switch (index) {
                case 0: {
                    return (
                        <Benefit
                            benefit={benefit}
                            handleBenefit={handleBenefit}
                            checked={checked}
                            handleChange={handleChange}
                            handleNext={handleNext}
                            handleBack={handleBack}
                            activeStep={activeStep}
                        />
                    )
                }
                case 1: {
                    return (
                        <FormRequest
                            setUserThatFill={setUserBenefit}
                            userThatFill={userBenefit}
                            handleNext={handleNext}
                            handleBack={handleBack}
                            activeStep={activeStep}
                        />
                    )
                }
                case 2: {
                    return (
                        <BenefitResponse
                            handleRequestCompleteForm={handleRequestCompleteForm}
                            handleNext={handleNext}
                            handleBack={handleBack}
                            activeStep={activeStep}
                        />
                    )
                }
            }
        }
    }

    return (
        <>
            <Box sx={{ width: '80%', margin: "0 auto", marginTop: 6, marginBottom: 2 }}>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        marginBottom: 3,
                        color: "#a4254b",
                        textTransform: "uppercase",
                        fontWeight: 550,
                        fontSize: 32,
                        '@media screen and (max-width: 768px)': {
                            fontSize: 24,
                        },
                        '@media screen and (max-width: 550px)': {
                            fontSize: 20,
                        },
                    }}
                >
                    Realiza tu solicitud
                </Typography>
                <Stepper
                    sx={{
                        // padding:"0px 5px 0px 0px",
                    }} activeStep={activeStep}>
                    {steps.map((label) => {
                        const stepProps: { completed?: boolean } = {};
                        return (
                            <Step sx={{
                                // padding:"0px 5px 0px 0px",

                                '@media screen and (max-width: 650px)': {
                                    padding: "0px 5px"
                                },
                                '@media screen and (max-width: 450px)': {
                                    padding: "0px 3.5px"
                                },
                                '@media screen and (max-width: 400px)': {
                                    padding: "0px 3px",

                                },
                            }} key={label} {...stepProps}>
                                <StepLabel
                                    sx={{
                                    }} >
                                    <Typography
                                        sx={fontS}
                                    >
                                        {label}
                                    </Typography>
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <Box
                        sx={{
                            padding: 5
                        }}
                    >
                        {responseSolicitude &&
                            <Solicitude
                                responseSolicitude={responseSolicitude}
                                benefit={benefit}
                                userRequest={userRequest}
                                userBenefit={userBenefit}
                            />
                        }
                    </Box>
                ) : (
                    <>
                        <Box
                            sx={{
                                minHeight: 450,
                                padding: 5
                            }}>
                            <ComponentStep
                                index={activeStep}
                            />
                        </Box>
                    </>
                )}
            </Box>
        </>
    )
}
