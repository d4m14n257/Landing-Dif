import axios from "axios";

type Response = {
    id: number
    nombre: string
    discapacidad: boolean
    puede_agregar_benef: boolean
    agotado: boolean
    fecha_agotado: string
    tipobeneficio: boolean
    nombre_beneficio: string
} |
{
    id: number
    nombre: string,
    clave?: string
}

type Value = {
    id: number
    name: string,
    date?: string,
    exhausted?: boolean
}

const api = process.env.NEXT_PUBLIC_API_SERVER;
const catologs = [
    "/catalogos/beneficiosweb",
    "/catalogos/entidades",
    "/catalogos/discapacidades",
    "/catalogos/etnias",
    "/catalogos/estadosciviles",
    "/catalogos/municipios",
    "/catalogos/municipios",
    "/catalogos/vialidades",
    "/catalogos/asentamientos"
]

let response: Value[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
]

let curps = []
let personData
let recovery

const setCurpResponse = (data: { any }) => {
    curps = []

    Object.values(data).forEach(curp => {
        curps.push({
            id: curp.id,
            curp: curp.curp,
        })
    })
}

const setResponse = (data: { any }, index: number) => {
    response[index] = []

    Object.values(data).forEach(value => {

        if (index) {
            response[index].push({
                id: value.id,
                name: value.nombre,
            })
        }
        else {
            response[index].push({
                id: value.id,
                name: value.nombre,
                date: value.fecha_agotado,
                exhausted: value.agotado
            })
        }
    })
}

export const getFormData = async (index: number) => {
    let request = `${api}${catologs[index]}`

    try {
        await axios.get(request).then(
            (response) => {
                if (response.status == 200) {
                    setResponse(response.data.data, index)
                }
            })
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                message: "Error en la petición.",
            }
        }
        else {
            return {
                success: false,
                message: "Error inesperado.",
            }
        }
    }

    return {
        success: true,
        data: response[index]
    }
}

export const getLocationes = async (index: number, id: number) => {
    let request = `${api}${catologs[index]}/${id}/localidades`

    try {
        await axios.get(request).then(
            (response) => {
                if (response.status == 200) {
                    setResponse(response.data.data, index)
                }
            })
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                message: "Error en la petición.",
            }
        }
        else {
            return {
                success: false,
                message: "Error inesperado.",
            }
        }
    }

    return {
        success: true,
        data: response[index]
    }
}

export const getPersonWithCurp = async (curp: string) => {
    let request = `${api}/personas?curp=${curp}`

    try {
        await axios.get(request).then(
            (response) => {
                if (response.status == 200) {
                    setCurpResponse(response.data.data)
                }
            })
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                message: "Error en la petición.",
            }
        }
        else {
            return {
                success: false,
                message: "Error inesperado.",
            }
        }
    }

    return {
        success: true,
        data: curps
    }
}

export const getPersonDataByCurp = async (id: number) => {
    let request = `${api}/personas/${id}`

    try {
        await axios.get(request).then(
            (response) => {
                personData = response.data
            })
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                message: "Error en la petición.",
            }
        }
        else {
            return {
                success: false,
                message: "Error inesperado.",
            }
        }
    }

    return {
        success: true,
        data: personData
    }
}

export const setRequestPerson = async (data) => {
    let request = `${api}/personas`

    try {
        let section = data.domicilio.municipio_id

        data.curp = data.curp.curp;
        data.discapacidades = data.discapacidades.map((item) => item.id)
        data.fecha_nacimiento = data.fecha_nacimiento.replaceAll("-", "/")
        data.domicilio.municipio_id = data.domicilio.municipio_id.id

        await axios.post(request, data).then(
            (response) => {
                data.curp = { id: response.data.id, curp: data.curp };
                data.fecha_nacimiento = data.fecha_nacimiento.replaceAll("/", "-")
                data.domicilio.municipio_id = section
            })
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                success: false,
                message: "Error en la petición.",
            }
        }
        else {
            return {
                success: false,
                message: "Error inesperado.",
            }
        }
    }
}

export const setRequestSolicitude = async (data) => {
    let request = `${api}/solicitudweb`

    try {
        await axios.post(request, {
            beneficioprograma_id: data.benefit.id,
            solicitante_id: data.userRequest.curp.id,
            beneficiario_id: data.userBenefit.curp.id,
            isAgotado: data.benefit.exhausted
        }).then(
            (response) => {
                if (response.status == 201) {
                    recovery = {
                        status: 201,
                        message: response.data.msg,
                        data: {
                            invoce: response.data.folio,
                            documents: response.data.documentos,
                            solicitude: response.data.beneficiopog_solicitud_id
                        }
                    }
                }
                else if (response.status == 200) {
                    recovery = {
                        status: 200,
                        message: response.data.msg,
                        data: {
                            invoce: response.data.solicitud.folio,
                            documents: response.data.solicitud.documentos,
                            date: response.data.solicitud.fecha
                        }
                    }
                }
            })
    }
    catch (error) {
        if (axios.isAxiosError(error)) {
            return {
                status: 422,
                message: "No se pudo generar la solicitud, Debido a que un campo de la solicitud no es correcto, revise su información.",
            }
        }
        else {
            return {
                success: 500,
                message: "Error inesperado... HOW HAVE YOU DONE THIS?!.",
            }
        }
    }

    return recovery
}