import { useEffect, useState } from "react";
import { Autocomplete, Grid, FormControl, FormHelperText, TextField, Button, FormGroup, Typography, Box } from "@mui/material";
import { getPersonDataByCurp, getFormData, getLocationes, getPersonWithCurp } from "../../api/benefit";

export default function FormRequest(props) {
    const { setUserThatFill, userThatFill, handleBack, handleNext, activeStep } = props

    const [active, setActive] = useState(true)

    const sex = [
        { id: 1, name: "MASCULINO" },
        { id: 2, name: "FEMENINO" }
    ]

    const [curp, setCurp] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [firstSurname, setFirstSurname] = useState("")
    const [secondSurname, setSecondSurname] = useState("")
    const [date, setDate] = useState("")
    const [gender, setGender] = useState(null)
    const [entity, setEntity] = useState(null)
    const [disability, setDisability] = useState([])
    const [ethnicity, setEthnicity] = useState(null)
    const [statusCivil, setStatusCivil] = useState(null)
    const [section, setSection] = useState(null)
    const [location, setLocation] = useState(null)
    const [postalCode, setPostalCode] = useState("")
    const [street, setStreet] = useState(null)
    const [address, setAddress] = useState("")
    const [externalNumber, setExternalNumber] = useState("")
    const [settlement, setSettlement] = useState(null)
    const [nameSettlement, setNameSetlement] = useState("")
    const [phone, setPhone] = useState("")
    const [cellPhone, setCellPhone] = useState("")
    const [email, setEmail] = useState("")

    const [curps, setCurps] = useState([])
    const [entities, setEntities] = useState([])
    const [disabilities, setDisabilities] = useState([])
    const [ethnicities, setEthnicities] = useState([])
    const [maritalStatus, setMaritalStatus] = useState([])
    const [sectiones, setSectiones] = useState([])
    const [locationes, setLocationes] = useState([])
    const [streets, setStreets] = useState([])
    const [settlementes, setSettlementes] = useState([])

    const [show, setShow] = useState(false)
    const [locationesField, setLocationesField] = useState(true)
    const [inputValue, setInputValue] = useState("")
    const [disabilitiesMap, setDisabilitiesMap] = useState(new Map)
    const [locationSave, setLocationSave] = useState<string | number>("")
    const [oneTime, setOneTime] = useState(true)
    const [error, setError] = useState(false)
    const [codePostalError, setCodePostalError] = useState(false)

    useEffect(() => {
        const handleAwaitToResponse = async () => {
            for (let i = 1; i <= 8; ++i) {
                if (i != 6) {
                    await getFormData(i).then((response => {
                        switch (i) {
                            case 1:
                                setEntities(response.data)
                                break;
                            case 2:
                                setDisabilities(response.data)
                                response.data.forEach(disability => {
                                    disabilitiesMap.set(disability.id, disability)
                                })
                                break;
                            case 3:
                                setEthnicities(response.data)
                                break;
                            case 4:
                                setMaritalStatus(response.data)
                                break;
                            case 5:
                                setSectiones(response.data)
                                break;
                            case 7:
                                setStreets(response.data)
                                break;
                            case 8:
                                setSettlementes(response.data)
                                break;
                        }
                    }))
                }
            }

            if (userThatFill) {
                setInputValue(userThatFill.curp.curp)
            }
        }

        handleAwaitToResponse()
    }, [])

    useEffect(() => {
        if (curp) {
            setShow(true)
            setActive(false)

            if (typeof curp == "string") {
                setCurp({ id: 0, curp: curp })
            }
            else {
                if (!userThatFill) {
                    if (curp.id) {
                        handleResetPersonInfo()
                        getPersonDataByCurp(curp.id).then(
                            (response) => {
                                setLocationSave(response.data.domicilio.localidad_id)
                                setFirstName(response.data.nombre)
                                setFirstSurname(response.data.primer_apellido)
                                setSecondSurname(response.data.segundo_apellido)
                                setDate(response.data.fecha_nacimiento)
                                setGender(response.data.genero == "M" ? sex[0] : sex[1])
                                setEntity(entities.find(entity =>
                                    entity.id === response.data.entidad.id))

                                response.data.discapacidades.forEach(disabilityUnique => {
                                    if (disabilitiesMap.has(disabilityUnique.id)) {
                                        setDisability([...disability, disabilitiesMap.get(disabilityUnique.id)])
                                    }
                                })

                                if (response.data.etnia)
                                    setEthnicity(ethnicities.find(ethnicity =>
                                        ethnicity.id === response.data.etnia.id))

                                if (response.data.estadocivil)
                                    setStatusCivil(maritalStatus.find(statusCivil =>
                                        statusCivil.id === response.data.estadocivil.id))

                                if (response.data.domicilio.municipio)
                                    setSection(sectiones.find(section =>
                                        section.id === response.data.domicilio.municipio.id))

                                if (response.data.domicilio) {
                                    setPostalCode(response.data.domicilio.codigo_postal || "")

                                    if (response.data.domicilio.tipovialidad)
                                        setStreet(streets.find(street =>
                                            street.id === response.data.domicilio.tipovialidad.id))

                                    setAddress(response.data.domicilio.vialidad || "")
                                    setExternalNumber(response.data.domicilio.numero_exterior || "")

                                    if (response.data.domicilio.tipoasentamiento)
                                        setSettlement(settlementes.find(settlement =>
                                            settlement.id === response.data.domicilio.tipoasentamiento.id))

                                    setNameSetlement(response.data.domicilio.asentamiento || "")
                                }

                                setPhone(response.data.numero_local ? response.data.numero_local.replace(/\D/g, '') : "")
                                setCellPhone(response.data.numero_celular ? response.data.numero_celular.replace(/\D/g, '') : "")
                                setEmail(response.data.email || "")
                            })
                    }
                }
                else {
                    setLocationSave(userThatFill.domicilio.localidad_id)
                    setFirstName(userThatFill.nombre)
                    setFirstSurname(userThatFill.primer_apellido)
                    setSecondSurname(userThatFill.segundo_apellido)
                    setDate(userThatFill.fecha_nacimiento)
                    setGender(userThatFill.genero == "M" ? sex[0] : sex[1])
                    setEntity(entities.find(entity =>
                        entity.id === userThatFill.entidad_id))

                    userThatFill.discapacidades.forEach((disabilityUnique: { id: number, name: string }) => {
                        if (disabilitiesMap.has(disabilityUnique.id)) {
                            setDisability(disability => [...disability, disabilitiesMap.get(disabilityUnique.id)])
                        }
                    })

                    setEthnicity(ethnicities.find(ethnicity =>
                        ethnicity.id === userThatFill.etnia_id))

                    setStatusCivil(maritalStatus.find(statusCivil =>
                        statusCivil.id === userThatFill.estado_civil_id))

                    setSection(sectiones.find(section =>
                        section.id === userThatFill.domicilio.municipio_id.id))

                    setPostalCode(userThatFill.domicilio.codigo_postal.toString())
                    setStreet(streets.find(street =>
                        street.id === userThatFill.domicilio.tipo_vialidad_id))

                    setAddress(userThatFill.domicilio.vialidad)
                    setExternalNumber(userThatFill.domicilio.numero_exterior.toString() || "")
                    setSettlement(settlementes.find(settlement =>
                        settlement.id === userThatFill.domicilio.tipo_asentamiento_id))

                    setNameSetlement(userThatFill.domicilio.asentamiento)
                    setPhone(userThatFill.numero_local || "")
                    setCellPhone(userThatFill.numero_celular || "")
                    setEmail(userThatFill.email || "")
                }
            }
        }
        else {
            setShow(false)
            setActive(false)
            handleResetPersonInfo()
        }
    }, [curp]);

    useEffect(() => {
        if (inputValue.length > 8) {
            if (!userThatFill) {
                getPersonWithCurp(inputValue).then(
                    (response) => {
                        if (response.success) {
                            setCurps(response.data)

                            if (userThatFill && oneTime) {
                                setOneTime(false)
                                setCurp(response.data[0])
                            }
                        }
                    }
                )
            }
            else {
                setCurp(userThatFill.curp)
            }

        }
        else
            setCurps([])
    }, [inputValue])

    useEffect(() => {
        if (section) {
            setLocation(null)

            setLocationesField(false)
            getLocationes(6, section.id).then(
                (response) => {
                    if (response.success) {
                        setLocationes(response.data)
                    }
                })
        }
        else {
            setLocationesField(true)
            setLocation(null)
            setLocationes([])
        }

    }, [section])

    useEffect(() => {
        if (locationes.length) {
            if (locationSave) {
                setLocation(locationes.find(location =>
                    location.id === locationSave))
                setLocationSave(null)
            }
        }
    }, [locationes])

    useEffect(() => {
        if (userThatFill)
            setActive(false)
        else
            setActive(true)
    }, [userThatFill])

    const handleFillUserForm = (action) => {
        let currentError = false;

        if(!action) {
            if(curp) {
                const emailValidate = validateEmail(email);
                const phoneValidate = phone.length == 10 ? true : false;
                const phoneCellValidate = cellPhone.length == 10 ? true : false;

                const data = {
                    adicional: true,
                    nombre: firstName,
                    primer_apellido: firstSurname,
                    segundo_apellido: secondSurname,
                    curp: curp,
                    fecha_nacimiento: date,
                    genero: gender ? gender.id == 1 ? "M" : "F" : null,
                    discapacidades: disability,
                    pais_id: 165,
                    entidad_id: entity ? entity.id : null,
                    etnia_id: ethnicity ? ethnicity.id : null,
                    estado_civil_id: statusCivil ? statusCivil.id : null,
                    usuario_id: 2223,
                    numero_celular: phoneCellValidate ? cellPhone : null,
                    numero_local: phoneValidate ? phone : null,
                    email: emailValidate ? email.toUpperCase() : null,
                    domicilio: {
                        municipio_id: section ? section : null,
                        localidad_id: location ? location.id : null,
                        tipo_vialidad_id: street ? street.id : null,
                        vialidad: address,
                        numero_exterior: postalCode ? parseInt(externalNumber) : 0,
                        tipo_asentamiento_id: settlement ? settlement.id : null,
                        asentamiento: nameSettlement,
                        codigo_postal: postalCode ? parseInt(postalCode) : 0,
                        usuario_id: 2223,
                    }
                }

                setUserThatFill(data)
            }
        }
        else {
            const check = [
                Boolean(curp), Boolean(firstName), Boolean(firstSurname), Boolean(secondSurname), Boolean(date), Boolean(gender), Boolean(entity), Boolean(disability),
                Boolean(ethnicity), Boolean(statusCivil), Boolean(section), Boolean(location), Boolean(postalCode), Boolean(street), Boolean(address), Boolean(externalNumber),
                Boolean(settlement), Boolean(nameSettlement)
            ]

            check.forEach((element) => {
                if (!element) {
                    currentError = true;
                }
            });

            if(!currentError) {
                const emailValidate = validateEmail(email);
                const phoneValidate = phone.length == 10 ? true : false;
                const phoneCellValidate = cellPhone.length == 10 ? true : false;

                const data = {
                    adicional: true,
                    nombre: firstName,
                    primer_apellido: firstSurname,
                    segundo_apellido: secondSurname,
                    curp: curp,
                    fecha_nacimiento: date,
                    genero: gender ? gender.id == 1 ? "M" : "F" : null,
                    discapacidades: disability,
                    pais_id: 165,
                    entidad_id: entity ? entity.id : null,
                    etnia_id: ethnicity ? ethnicity.id : null,
                    estado_civil_id: statusCivil ? statusCivil.id : null,
                    usuario_id: 2223,
                    numero_celular: phoneCellValidate ? cellPhone : null,
                    numero_local: phoneValidate ? phone : null,
                    email: emailValidate ? email.toUpperCase() : null,
                    domicilio: {
                        municipio_id: section ? section : null,
                        localidad_id: location ? location.id : null,
                        tipo_vialidad_id: street ? street.id : null,
                        vialidad: address,
                        numero_exterior: postalCode ? parseInt(externalNumber) : 0,
                        tipo_asentamiento_id: settlement ? settlement.id : null,
                        asentamiento: nameSettlement,
                        codigo_postal: postalCode ? parseInt(postalCode) : 0,
                        usuario_id: 2223,
                    }
                }

                setUserThatFill(data)
                handleNext();
            }
            else {
                setError(currentError);
            }
        }
    }

    const handleInputUpperCase = (event: any, setInput: any) => {
        const value = event.target.value;
        const isValid = /^[a-zA-Z\u00C0-\u017F\s]*$/.test(value);

        if (isValid) {
            setInput(value.toUpperCase());
        }
    }

    const handleInputCodePostal = (event: any, setInput: any) => {
        const value = event.target.value
        const isValid = /^[0-9]{0,5}$/.test(value)

        if (isValid) {
            setInput(value);

            if (value.length < 4)
                setCodePostalError(true)
            else
                setCodePostalError(false)
        }
    }

    const handleInputAddress = (event: any, setInput: any) => {
        const value = event.target.value
        const isValid = /^[a-zA-Z0-9\u00C0-\u017F\s]*$/.test(value)

        if (isValid) {
            setInput(value.toUpperCase());
        }
    }

    const handleInputExternalNumber = (event: any, setInput: any) => {
        const value = event.target.value
        const isValid = /^[1-9][0-9]{0,5}$/.test(value)

        if (isValid) {
            setInput(value);
        }
        else if (value.length === 0) {
            setInput(value);
        }
    }

    const handleInputPhoneNumber = (event: any, setInput: any) => {
        const value = event.target.value
        const isValid = /^[1-9][0-9]{0,10}$/.test(value)

        if (isValid) {
            setInput(value);
        }
        else if (value.length === 0) {
            setInput(value);
        }
    }

    const handleResetPersonInfo = () => {
        setFirstName(""); setFirstSurname(""); setSecondSurname(""); setDate("");
        setGender(null); setEntity(null); setDisability([]); setEthnicity(null); setStatusCivil(null);
        setSection(null); setLocation(null); setPostalCode(""); setStreet(null); setAddress("");
        setExternalNumber(""); setSettlement(null); setNameSetlement(""); setPhone("");
        setCellPhone(""); setEmail("")
    }

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    return (
        <>
            <FormGroup sx={{ flexGrow: 1, width: "95%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <Autocomplete
                                freeSolo
                                value={curp}
                                onChange={(event: any, newValue: any) => {
                                    setCurp(newValue)
                                }}
                                disablePortal
                                isOptionEqualToValue={(option, value) => option.id === value.id}
                                onInputChange={(event: any, newValue: any) => {
                                    setInputValue(newValue)
                                }}
                                options={curps}
                                getOptionLabel={(option) => option.curp || option}
                                renderInput={(params) => (<TextField {...params} required label="Curp" />)}
                            />
                            <FormHelperText>Ingrese su curp, en caso de que aparezca seleccionela.</FormHelperText>
                        </FormControl>
                    </Grid>
                    {show ?
                        <>
                            <Grid item md={4} xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        required
                                        error={!firstName && error}
                                        label="Nombre"
                                        value={firstName}
                                        onChange={(event) => {
                                            handleInputUpperCase(event, setFirstName)
                                        }}
                                    />
                                    <FormHelperText error={!firstName && error}>{!(!firstName && error) ? "Ingrese su nombre completo." : "Ingrese un nombre valido"}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        required
                                        error={!firstSurname && error}
                                        label="Primer apellido"
                                        value={firstSurname}
                                        onChange={(event) => {
                                            handleInputUpperCase(event, setFirstSurname)
                                        }}
                                    />
                                    <FormHelperText error={!firstSurname && error}>{!(!firstSurname && error) ? "Ingrese su primer apellido." : "Debe ingresar su primer apellido"}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        required
                                        error={!secondSurname && error}
                                        value={secondSurname}
                                        label="Segundo apellido"
                                        onChange={(event) => {
                                            handleInputUpperCase(event, setSecondSurname)
                                        }}
                                    />
                                    <FormHelperText error={!secondSurname && error}>{!(!secondSurname && error) ? "Ingrese su segundo apellido." : "Debe ingresar su segundo apellido"}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        required
                                        error={!date && error}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        type="date"
                                        value={date}
                                        label="Fecha de nacimiento"
                                        onChange={(event) => {
                                            setDate(event.target.value)
                                        }}
                                    />
                                    <FormHelperText error={!date && error}>{!(!date && error) ? "Ingrese su fecha de nacimiento." : "Debe poner una fecha de nacimiento."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete
                                        noOptionsText="Escriba una opcion existente."
                                        disablePortal
                                        value={gender}
                                        onChange={(e: any, newValue: any) => {
                                            setGender(newValue)
                                        }}
                                        options={sex}
                                        getOptionLabel={(option) => option.name}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        renderInput={(params) => (<TextField {...params} label="Sexo" required error={!gender && error} />)}
                                    />
                                    <FormHelperText error={!gender && error}>{!(!gender && error) ? "Seleccione su genero de nacimiento." : "Debe seleccionar su genero de nacimiento."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete
                                        noOptionsText="Escriba una opcion existente."
                                        disablePortal
                                        value={entity}
                                        onChange={(e: any, newValue: any) => {
                                            setEntity(newValue)
                                        }}
                                        options={entities}
                                        getOptionLabel={(option) => option.name}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        renderInput={(params) => (<TextField {...params} label="Entidad de nacimiento" required error={!entity && error} />)}
                                    />
                                    <FormHelperText error={!entity && error}>{!(!gender && error) ? "Seleccione su estado de nacimiento." : "Debe seleccionar su estado de nacimiento."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete
                                        multiple
                                        filterSelectedOptions
                                        noOptionsText="Escriba una opcion existente."
                                        disablePortal
                                        value={disability}
                                        onChange={(e: any, newValue: any) => {
                                            setDisability(newValue)
                                        }}
                                        options={disabilities}
                                        getOptionLabel={(option) => option.name}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        renderInput={(params) => (<TextField {...params} label="Discapacidad" required error={!disability.length && error} />)}
                                    />
                                    <FormHelperText error={!disability.length && error}>{!(!disability.length && error) ? "Seleccione si tiene alguna incapacidad en caso que no, ponga no aplica." :
                                        "Debe seleccionar si tiene una discapacidad, en caso contrario seleccione no aplica."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete
                                        noOptionsText="Escriba una opcion existente."
                                        disablePortal
                                        value={ethnicity}
                                        onChange={(e: any, newValue: any) => {
                                            setEthnicity(newValue)
                                        }}
                                        options={ethnicities}
                                        getOptionLabel={(option) => option.name}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        renderInput={(params) => (<TextField {...params} label="Etnia" required error={!ethnicity && error} />)}
                                    />
                                    <FormHelperText error={!ethnicity && error}>{!(!ethnicity && error) ? "Seleccione la etnia a la que pertenece en caso que no, ponga no aplica." :
                                        "Debe seleccionar si pertenece a una etnia, en caso contrario seleccione no aplica."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete
                                        noOptionsText="Escriba una opcion existente."
                                        disablePortal
                                        value={statusCivil}
                                        onChange={(e: any, newValue: any) => {
                                            setStatusCivil(newValue)
                                        }}
                                        options={maritalStatus}
                                        getOptionLabel={(option) => option.name}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        renderInput={(params) => (<TextField {...params} label="Estado civil" required error={!statusCivil && error} />)}
                                    />
                                    <FormHelperText error={!statusCivil && error}>{!(!statusCivil && error) ? "Seleccione su estado civil." : "Debe seleccionar su estado civil."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete
                                        noOptionsText="Escriba una opcion existente."
                                        disablePortal
                                        value={section}
                                        onChange={(e: any, newValue: any) => {
                                            setSection(newValue)
                                        }}
                                        options={sectiones}
                                        getOptionLabel={(option) => option.name}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        renderInput={(params) => (<TextField {...params} label="Municipio" required error={!section && error} />)}
                                    />
                                    <FormHelperText error={!section && error}>{!(!section && error) ? "Seleccione el municipio donde vive." : "Debe seleccionar el municipio donde esta viviendo."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete
                                        disabled={locationesField}
                                        noOptionsText="Escriba una opcion existente."
                                        disablePortal
                                        value={location}
                                        onChange={(e: any, newValue: any) => {
                                            setLocation(newValue)
                                        }}
                                        options={locationes}
                                        getOptionLabel={(option) => option.name}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        renderInput={(params) => (<TextField {...params} label="Localidad" required error={!location && error} />)}
                                    />
                                    <FormHelperText error={!location && error}>{!(!location && error) ? "Seleccione la localidad en la que vive." : "Debe seleccionar la localidad en la que vive."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        required
                                        error={(!postalCode || codePostalError) && error}
                                        label="Código postal"
                                        value={postalCode}
                                        onChange={(event) => {
                                            handleInputCodePostal(event, setPostalCode)
                                        }}
                                    />
                                    <FormHelperText error={(!postalCode || codePostalError) && error}>
                                        {error ? (!postalCode ? "Debe poner su código postal en el siguiente campo" :
                                            (codePostalError ? "Debe tener minimo 4 digitos" : "Ponga el código postal de su residencia")) :
                                            "Ponga el código postal de su residencia"}
                                    </FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete
                                        noOptionsText="Escriba una opcion existente."
                                        disablePortal
                                        value={street}
                                        onChange={(e: any, newValue: any) => {
                                            setStreet(newValue)
                                        }}
                                        options={streets}
                                        getOptionLabel={(option) => option.name}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        renderInput={(params) => (<TextField {...params} label="Vialidad" required error={!street && error} />)}
                                    />
                                    <FormHelperText error={!street && error}>{!(!street && error) ? "Selecciona como es la vialidad donde vive." : "Debes seleccionar como es la vialidad donde vives"}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        required
                                        error={!address && error}
                                        label="Nombre de vialidad"
                                        value={address}
                                        onChange={(event) => {
                                            handleInputAddress(event, setAddress)
                                        }}
                                    />
                                    <FormHelperText error={!address && error}>{!(!address && error) ? "Escriba el nombre de la calle donde vive." : "Debe poner el nombre de la calle donde vive"}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        required
                                        error={!externalNumber && error}
                                        label="Número exterior"
                                        value={externalNumber}
                                        onChange={(event) => {
                                            handleInputExternalNumber(event, setExternalNumber)
                                        }}
                                    />
                                    <FormHelperText error={!externalNumber && error}>{!(!externalNumber && error) ? "Anoté el número de su residencia." : "Debe colocar su número de residencia donde vive."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <Autocomplete
                                        noOptionsText="Escriba una opcion existente."
                                        disablePortal
                                        value={settlement}
                                        onChange={(e: any, newValue: any) => {
                                            setSettlement(newValue)
                                        }}
                                        options={settlementes}
                                        getOptionLabel={(option) => option.name}
                                        isOptionEqualToValue={(option, value) => option.id === value.id}
                                        renderInput={(params) => (<TextField {...params} label="Asentamiento" required error={!settlement && error} />)}
                                    />
                                    <FormHelperText error={!settlement && error}>{!(!settlement && error) ? "Seleccione el tipo de asentamiento donde vive." : "Debe seleccionar el tipo de asentamiento en el que vive."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        required
                                        error={!nameSettlement && error}
                                        label="Nombre de asentamiento"
                                        value={nameSettlement}
                                        onChange={(event) => {
                                            handleInputAddress(event, setNameSetlement);
                                        }}
                                    />
                                    <FormHelperText error={!nameSettlement && error}>{!(!nameSettlement && error) ? "Anoté el nombre de su asentamiento." : "Debes ponerl el nombre de su asentamiento donde vive."}</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        label="Teléfono"
                                        value={phone}
                                        onChange={(event) => {
                                            handleInputPhoneNumber(event, setPhone)
                                        }}
                                    />
                                    <FormHelperText>Anoté su número de teléfono si tiene.</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        label="Celular"
                                        value={cellPhone}
                                        onChange={(event) => {
                                            handleInputPhoneNumber(event, setCellPhone)
                                        }}
                                    />
                                    <FormHelperText>Anoté su número de celular si tiene.</FormHelperText>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl fullWidth variant="outlined">
                                    <TextField
                                        label="Correo electrónico"
                                        value={email}
                                        onChange={(event) => {
                                            setEmail(event.target.value)
                                        }}
                                    />
                                    <FormHelperText>Anoté su correo electrónico.</FormHelperText>
                                </FormControl>
                            </Grid>
                        </> :
                        <Grid item xs={12} sx={{ marginY: 14, alignContent: "center", textAlign: "center" }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    opacity: 0.5,
                                }}
                            >
                                Busque una curp valida.
                            </Typography>
                            <Typography variant="caption" sx={{ opacity: 0.5 }}>
                                En caso de que ingrese una CURP nueva, ingresela complentamente y presione "enter" para continuar.
                            </Typography>
                        </Grid>}
                </Grid>
            </FormGroup>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={() => {
                        handleFillUserForm(0)
                        handleBack()
                    }}
                    sx={{ mr: 1 }}
                >
                    Regresar
                </Button>
                <Box sx={{ flex: '1 1 auto' }} />
                <Button
                    disabled={active}
                    onClick={() => {
                        handleFillUserForm(1)
                    }}
                >
                    Siguiente
                </Button>
            </Box>
        </>
    )
}
