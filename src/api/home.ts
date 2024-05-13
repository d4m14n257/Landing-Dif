import axios from "axios";

type Comunicados = {
    id: number
    title: string
    date: Date
    sumary: string
    description: string
    image: string
    zip: string
}

type Response = {
    id: number
    titulo: string
    fecha: Date
    resumen: string
    contenido: string
    img: string
    zip: string
    created_at: Date
    updated_at: Date
    deleted_at?: Date
}

const api = process.env.NEXT_PUBLIC_API_PAGINAWEB;
var response: Comunicados[][] = [];
var total = 0;



const getComunicates = (data: { Response }) => {
    let temp: Comunicados[] = []
    let count = 1;

    Object.values(data).forEach(comunicate => {
        temp.push({
            id: comunicate.id,
            title: comunicate.titulo,
            date: comunicate.fecha,
            sumary: comunicate.resumen.charAt(0).toUpperCase() + comunicate.resumen.slice(1),
            description: comunicate.contenido,
            image: comunicate.img,
            zip: comunicate.zip,
        })




        if (!(count % 3)) {
            response.push(temp)
            temp = []
            count = 1;
        }
        else
            count++;


    });

    if (temp.length)
        response.push(temp)
}

export const getActionsInHome = async () => {
    try {
        await axios.get(`${api}/comunicados?page=1`).then(
            (response) => {
                if (response.status == 200) {
                    getComunicates(response.data.data)
                }
            }).catch((error) => {
                console.log(error)
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
        data: response
    }
}

export const getActions = async (pageStart, pageFinish) => {
    try {
        let page = pageStart;
        let available = true;

        while (available && page <= pageFinish) {
            await axios.get(`${api}/comunicados?page=${page}`).then(
                (response) => {
                    if (response.status == 200) {
                        getComunicates(response.data.data)
                        total = response.data.total;

                        if (response.data.to == response.data.total)
                            available = false;

                        page++;
                    }
                }).catch((error) => {
                    console.log(error)

                    available = false;
                })
        }
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
        data: response,
        total: total
    }
}