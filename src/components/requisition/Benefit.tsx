import { useEffect, useState } from "react"
import {
    Card, CardHeader, CardContent, Typography, TextField, Box, Autocomplete, FormControl, FormHelperText,
    Checkbox, FormGroup, FormControlLabel, Button
} from "@mui/material"
import ReportIcon from '@mui/icons-material/Report';
import { getFormData } from "../../api/benefit";
import { Benefits } from "../../components/general/types/types";
import Link from "next/link";
import { router } from "next/client";
import { textAlign } from "@mui/system";

export default function Benefit(props: Benefits) {
    const { benefit, checked, handleBenefit, handleChange, handleNext, handleBack, activeStep } = props
    const [benefits, setBenefits] = useState([])
    const [active, setActive] = useState(true)
    const [benefitSelect, setBenefitSelect] = useState(null);
    var tipo: number = 0
    useEffect(() => {
        getFormData(0).then(response => {
            if (response.success) {
                setBenefits(response.data)
            }
        })
    }, [])

    useEffect(() => {
        if (benefit) {
            setActive(false)
            setBenefitSelect(benefit)
        }
        else {
            setActive(true)
            setBenefitSelect(0)
        }
    }, [benefit])

    const DataPerson: React.FC<{}> = () => {
        return (
            <ul>
                {checked && <Typography variant="subtitle2"
                    sx={{
                        
                    }}>
                    {/*<li>Nombre completo</li>*/}
                    {/*<li>CURP</li>*/}
                    {/*<li>Domicilio</li>*/}
                    <li hidden={tipo == 0}>Solicitud dirigida a la C. Maribel Graciela Salinas Velasco, Directora General del Sistema DIF Oaxaca, con los siguientes datos:
                        <ul>
                            <li>Nombre</li>
                            <li>Edad</li>
                            <li>Domicilio actual y teléfono para su localización (Original y copia).</li>
                        </ul>
                    </li>
                    <li hidden={tipo == 0}>Formato para donación {tipo == 1 ? ' de silla de ruedas ' : ''} (Original y copia).</li>
                    <li hidden={tipo == 3 || tipo == 0}> Certificado médico (Original y copia).</li>
                    <li hidden={tipo == 3 || tipo == 0}>{tipo == 1 ? (2 + ' Fotografías') : 'Fotografía'}  de cuerpo completo reciente.</li>
                    <li hidden={tipo == 3 || tipo == 0}>INE vigente del solicitante y del paciente (2 copias).</li>
                    <li hidden={tipo == 0}>Acta de nacimiento (2 copias).</li>
                    <li hidden={tipo == 1 || tipo == 2 || tipo == 0}>INE vigente del beneficiario o del tutor, en caso de ser menor de edad (2 copias).</li>
                    <li hidden={tipo == 0}>CURP (2 copias).</li>
                    <li hidden={tipo == 0}>Comprobante de domicilio (2 copias).</li>
                    <li hidden={tipo == 1 || tipo == 2 || tipo == 0}> 2 Fotografías tamaño infantil (Reciente con nombre en la parte de atrás).</li>
                    <li hidden={tipo == 3 || tipo == 0}>Formato de estudio socioeconómico y aviso de privacidad (Original y copia).</li>
                    <li hidden={tipo == 1 || tipo == 2 || tipo == 0}>Estudio Socioeconómico entregado en trabajo social (Original y copia).</li>
                    <li hidden={tipo == 1 || tipo == 2 || tipo == 0}>Audiometría reciente (Original y dos copias).</li>
                    <li hidden={tipo != 0}>Nombre completo</li>
                    <li hidden={tipo != 0}>CURP</li>
                    <li hidden={tipo != 0}>Domicilio</li>
                </Typography>}
                {!checked && <Typography variant="subtitle2"
                    sx={{
                        '@media screen and (max-width: 600px)': {
                            fontSize: 13,
                        },
                        '@media screen and (max-width: 480px)': {
                            fontSize: 12,
                        },
                        '@media screen and (max-width: 465px)': {
                            fontSize: 11,
                        },
                        '@media screen and (max-width: 445px)': {
                            fontSize: 10,
                        },
                        '@media screen and (max-width: 415px)': {
                            fontSize: 9.5,
                        },
                        '@media screen and (max-width: 400px)': {
                            fontSize: 9,
                        },
                    }}>
                    {/*<li>Nombre completo</li>*/}
                    {/*<li>CURP</li>*/}
                    {/*<li>Domicilio</li>*/}
                    <li hidden={tipo == 0}>Solicitud dirigida a la C. Maribel Graciela Salinas Velasco, Directora General del Sistema DIF Oaxaca, con los siguientes datos:
                        <ul>
                            <li>Nombre</li>
                            <li>Edad</li>
                            <li>Domicilio actual y teléfono para su localización (Original y copia).</li>
                        </ul>
                    </li>
                    <li hidden={tipo == 0}>Formato para donación {tipo == 1 ? ' de silla de ruedas ' : ''} (Original y copia).</li>
                    <li hidden={tipo == 3 || tipo == 0}> Certificado médico (Original y copia).</li>
                    <li hidden={tipo == 3 || tipo == 0}>{tipo == 1 ? (2 + ' Fotografías') : 'Fotografía'}  de cuerpo completo reciente.</li>
                    <li hidden={tipo == 3 || tipo == 0}>INE vigente del solicitante y del paciente (2 copias).</li>
                    <li hidden={tipo == 0}>Acta de nacimiento (2 copias).</li>
                    <li hidden={tipo == 1 || tipo == 2 || tipo == 0}>INE vigente del beneficiario o del tutor, en caso de ser menor de edad (2 copias).</li>
                    <li hidden={tipo == 0}>CURP (2 copias).</li>
                    <li hidden={tipo == 0}>Comprobante de domicilio (2 copias).</li>
                    <li hidden={tipo == 1 || tipo == 2 || tipo == 0}> 2 Fotografías tamaño infantil (Reciente con nombre en la parte de atrás).</li>
                    <li hidden={tipo == 3 || tipo == 0}>Formato de estudio socioeconómico y aviso de privacidad (Original y copia).</li>
                    <li hidden={tipo == 1 || tipo == 2 || tipo == 0}>Estudio Socioeconómico entregado en trabajo social (Original y copia).</li>
                    <li hidden={tipo == 1 || tipo == 2 || tipo == 0}>Audiometría reciente (Original y dos copias).</li>
                    <li hidden={tipo != 0}>Nombre completo</li>
                    <li hidden={tipo != 0}>CURP</li>
                    <li hidden={tipo != 0}>Domicilio</li>
                </Typography>}
            </ul>
        )
    }
    const verFormatos = () => {
        if (benefit) {
            switch (benefitSelect?.id) {
                case 975:
                case 976:
                case 977:
                case 2157:
                case 2158:
                case 2161:
                case 2162:
                case 3530:
                case 4003:
                case 4021:
                case 4287:
                    tipo = 1
                    return 'https://difoaxaca.gob.mx/misc/docs/solicitud/SILLA_DE_RUEDAS_FORMATOS_PO.pdf'
                case 1029:
                case 2046:
                case 3119:
                case 3529:
                case 3764:
                case 4020:
                case 4245:
                case 1030:
                case 1031:
                case 2048:
                case 2049:
                case 3532:
                case 3768:
                case 3769:
                case 4023:
                case 2805:
                case 3765:
                case 1032:
                case 2047:
                case 3121:
                case 3766:
                case 4247:
                case 4248:
                case 4249:
                case 3531:
                case 4022:
                    tipo = 2
                    return 'https://difoaxaca.gob.mx/misc/docs/solicitud/APOYOS_FUNCIONALES_FORMATOS_PO.pdf'
                case 2130:
                case 3225:
                case 3792:
                    tipo = 3
                    return 'https://difoaxaca.gob.mx/misc/docs/solicitud/FORMATO_AUDITIVO_PO.pdf'
                default:
                    tipo = 0
                    return null
            }
        } else {
            return null
        }
    }
    const enlace = verFormatos()
    const handleClick = () => {
        if (enlace) {
            window.open(enlace, '_blank');
        }
    }; return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexGrow: 1,
                    flexDirection: "column",
                    minHeight: 480,
                    gap: 1.5,
                }}
            >
                <FormGroup sx={{
                    alignItems: "center",
                }}>
                    <FormControlLabel control={<Checkbox
                        sx={{
                            color: "#d12654",
                            '&.Mui-checked': {
                                color: "#d12654",
                            },
                        }}
                        checked={checked}
                        onChange={handleChange} />}
                        label={
                            <Typography
                                variant="body2"
                                sx={{
                                    textTransform: "uppercase",
                                    fontWeight: 550
                                }}
                            >
                                ¿Usted es el beneficiario directo?
                            </Typography>
                        }
                    />
                </FormGroup>
                <FormControl>
                    <Autocomplete
                        noOptionsText="Escriba una opcion valida."
                        value={benefit}
                        onChange={(event: any, value: any) => {
                            handleBenefit(value)
                        }}
                        disablePortal
                        id="benefit-select"
                        options={benefits}
                        getOptionLabel={(option) => option.name}
                        isOptionEqualToValue={(option, value) => option.id == value.id}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                required
                                label="Beneficio"
                            />
                        )}
                    />
                    <FormHelperText>Elige el beneficio que requieras.</FormHelperText>
                </FormControl>
                <Typography
                    sx={{
                        textAlign: "center",
                        fontWeight: 800,
                        color: "#003d7f",
                        textTransform: "uppercase",
                        '@media screen and (max-width: 600px)': {
                            fontWeight: 750,
                        },
                        '@media screen and (max-width: 480px)': {
                            fontWeight: 700,
                        },
                        '@media screen and (max-width: 465px)': {
                            fontWeight: 650,
                        },
                    }}
                >
                    Recuerde tener los siguientes datos a la mano.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around"
                    }}>
                    {!checked &&
                        <Card
                            sx={{
                                width: "45%",
                                boxShadow: 1,
                            }}>
                            <CardHeader

                                avatar={
                                    <ReportIcon
                                        sx={{
                                            marginRight: "-16px",
                                            '@media screen and (max-width: 605px)': {
                                                marginRight: "-20px",
                                                padding: "2px 2px 2px 0px",
                                            },
                                            '@media screen and (max-width: 465px)': {
                                                marginRight: "-20px",
                                                padding: "3px 3px 3px 0px",
                                            },
                                            '@media screen and (max-width: 415px)': {
                                                marginRight: "-20px",
                                                padding: "4px 4px 4px 0px",
                                            },
                                            '@media screen and (max-width: 390px)': {
                                                marginRight: "-22px",
                                                padding: "5px 5px 5px 0px",
                                            },
                                        }}
                                    />
                                }
                                title={
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            fontWeight: 550,
                                            '@media screen and (max-width: 600px)': {
                                                fontSize: 14,
                                            },
                                            '@media screen and (max-width: 520px)': {
                                                fontSize: 13,
                                            },
                                            '@media screen and (max-width: 480px)': {
                                                fontSize: 12,
                                            },
                                            '@media screen and (max-width: 465px)': {
                                                fontSize: 11,
                                            },
                                            '@media screen and (max-width: 445px)': {
                                                fontSize: 10,
                                            },
                                            '@media screen and (max-width: 415px)': {
                                                fontSize: 9.5,
                                            },
                                        }}
                                    >
                                        Datos del solicitante
                                    </Typography>
                                }
                            />
                            <hr style={{
                                marginTop: -1,
                                width: "75%"
                            }} />
                            <CardContent>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: "justify",
                                        '@media screen and (max-width: 600px)': {
                                            fontSize: 13,
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            fontSize: 12,
                                        },
                                        '@media screen and (max-width: 465px)': {
                                            fontSize: 11,
                                        },
                                    }}
                                >
                                    Es la persona que formalmente está solicitando un apoyo al Sistema DIF Oaxaca.
                                </Typography>
                                <DataPerson />
                                <div>
                                    <Button variant="outlined" color={"info"} disabled={!enlace} onClick={handleClick}>
                                        <Typography sx={{
                                            '@media screen and (max-width: 600px)': {
                                                fontSize: 13,
                                            },
                                            '@media screen and (max-width: 480px)': {
                                                fontSize: 12,
                                            },
                                            '@media screen and (max-width: 465px)': {
                                                fontSize: 11,
                                            },
                                            '@media screen and (max-width: 445px)': {
                                                fontSize: 10,
                                            },
                                            '@media screen and (max-width: 415px)': {
                                                fontSize: 9,
                                            },
                                            '@media screen and (max-width: 400px)': {
                                                fontSize: 8,
                                            },
                                        }}>
                                            DESCARGAR FORMATO
                                        </Typography>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    }
                    {checked &&
                    <Card
                        sx={{ width: "95%", boxShadow: 1 }}
                    >
                        <CardHeader
                            sx={{
                                // padding:"5px"
                            }}
                            avatar={
                                <ReportIcon
                                    // sx={{
                                    //     marginRight: "-16px",
                                    //     '@media screen and (max-width: 605px)': {
                                    //         marginRight: "-20px",
                                    //         padding: "2px 2px 2px 0px",
                                    //     },
                                    //     '@media screen and (max-width: 465px)': {
                                    //         marginRight: "-20px",
                                    //         padding: "3px 3px 3px 0px",
                                    //     },
                                    //     '@media screen and (max-width: 415px)': {
                                    //         marginRight: "-20px",
                                    //         padding: "4px 4px 4px 0px",
                                    //     },
                                    //     '@media screen and (max-width: 390px)': {
                                    //         marginRight: "-22px",
                                    //         padding: "5px 5px 5px 0px",
                                    //     },
                                    // }} 
                                    />
                            }
                            title={
                                <Typography
                                    sx={{
                                        // padding:"5px",
                                        textAlign: "center",
                                        fontWeight: 550,
                                        // '@media screen and (max-width: 600px)': {
                                        //     fontSize: 14,
                                        // },
                                        // '@media screen and (max-width: 520px)': {
                                        //     fontSize: 13,
                                        // },
                                        // '@media screen and (max-width: 480px)': {
                                        //     fontSize: 12,
                                        // },
                                        // '@media screen and (max-width: 465px)': {
                                        //     fontSize: 11,
                                        // },
                                        // '@media screen and (max-width: 445px)': {
                                        //     fontSize: 10,
                                        // },
                                        // '@media screen and (max-width: 415px)': {
                                        //     fontSize: 9.5,
                                        // },
                                    }}
                                >
                                    Datos del Beneficiario
                                </Typography>
                            }

                        />
                        <hr
                            style={{
                                marginTop: -1,
                                width: "75%"
                            }}
                        />
                        <CardContent>
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: "justify",
                                    // '@media screen and (max-width: 600px)': {
                                    //     fontSize: 13,
                                    // },
                                    // '@media screen and (max-width: 480px)': {
                                    //     fontSize: 12,
                                    // },
                                    // '@media screen and (max-width: 465px)': {
                                    //     fontSize: 11,
                                    // },
                                }}
                            >
                                Es la persona a la cual se le hará entrega el apoyo solicitado, puede ser la misma persona que el solicitante.
                            </Typography>
                            <DataPerson />
                            <div>
                                <Button variant="outlined" color={"info"} disabled={!enlace} onClick={handleClick}>
                                    <Typography sx={{
                                        // '@media screen and (max-width: 600px)': {
                                        //     fontSize: 13,
                                        // },
                                        // '@media screen and (max-width: 480px)': {
                                        //     fontSize: 12,
                                        // },
                                        // '@media screen and (max-width: 465px)': {
                                        //     fontSize: 11,
                                        // },
                                        // '@media screen and (max-width: 445px)': {
                                        //     fontSize: 10,
                                        // },
                                        // '@media screen and (max-width: 415px)': {
                                        //     fontSize: 9,
                                        // },
                                        // '@media screen and (max-width: 400px)': {
                                        //     fontSize: 8,
                                        // },
                                    }}>
                                        DESCARGAR FORMATO
                                    </Typography>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>}
                    {!checked &&
                    <Card
                        sx={{ width: "45%", boxShadow: 1 }}
                    >
                        <CardHeader
                            sx={{
                                // padding:"5px"
                            }}
                            avatar={
                                <ReportIcon
                                    sx={{
                                        marginRight: "-16px",
                                        '@media screen and (max-width: 605px)': {
                                            marginRight: "-20px",
                                            padding: "2px 2px 2px 0px",
                                        },
                                        '@media screen and (max-width: 465px)': {
                                            marginRight: "-20px",
                                            padding: "3px 3px 3px 0px",
                                        },
                                        '@media screen and (max-width: 415px)': {
                                            marginRight: "-20px",
                                            padding: "4px 4px 4px 0px",
                                        },
                                        '@media screen and (max-width: 390px)': {
                                            marginRight: "-22px",
                                            padding: "5px 5px 5px 0px",
                                        },
                                    }} />
                            }
                            title={
                                <Typography
                                    sx={{
                                        // padding:"5px",
                                        textAlign: "center",
                                        fontWeight: 550,
                                        '@media screen and (max-width: 600px)': {
                                            fontSize: 14,
                                        },
                                        '@media screen and (max-width: 520px)': {
                                            fontSize: 13,
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            fontSize: 12,
                                        },
                                        '@media screen and (max-width: 465px)': {
                                            fontSize: 11,
                                        },
                                        '@media screen and (max-width: 445px)': {
                                            fontSize: 10,
                                        },
                                        '@media screen and (max-width: 415px)': {
                                            fontSize: 9.5,
                                        },
                                    }}
                                >
                                    Datos del Beneficiario
                                </Typography>
                            }

                        />
                        <hr
                            style={{
                                marginTop: -1,
                                width: "75%"
                            }}
                        />
                        <CardContent>
                            <Typography
                                variant="body2"
                                sx={{
                                    textAlign: "justify",
                                    '@media screen and (max-width: 600px)': {
                                        fontSize: 13,
                                    },
                                    '@media screen and (max-width: 480px)': {
                                        fontSize: 12,
                                    },
                                    '@media screen and (max-width: 465px)': {
                                        fontSize: 11,
                                    },
                                }}
                            >
                                Es la persona a la cual se le hará entrega el apoyo solicitado, puede ser la misma persona que el solicitante.
                            </Typography>
                            <DataPerson />
                            <div>
                                <Button variant="outlined" color={"info"} disabled={!enlace} onClick={handleClick}>
                                    <Typography sx={{
                                        '@media screen and (max-width: 600px)': {
                                            fontSize: 13,
                                        },
                                        '@media screen and (max-width: 480px)': {
                                            fontSize: 12,
                                        },
                                        '@media screen and (max-width: 465px)': {
                                            fontSize: 11,
                                        },
                                        '@media screen and (max-width: 445px)': {
                                            fontSize: 10,
                                        },
                                        '@media screen and (max-width: 415px)': {
                                            fontSize: 9,
                                        },
                                        '@media screen and (max-width: 400px)': {
                                            fontSize: 8,
                                        },
                                    }}>
                                        DESCARGAR FORMATO
                                    </Typography>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>}
                </Box>
            </Box>
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
                    disabled={active}
                    onClick={() => handleNext()}
                >
                    Siguiente
                </Button>
            </Box>
        </>
    )
}
