import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
    id: string;
    name: string;
    email: string;
}

const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)

    return response.data.map((res: any): user => {
        return {
            id: res.id,
            name: res.name,
            email: res.email
        }
    })
}

getSubscribers().then(console.log)


//a.
// Não.

//b.
// Acho que sim, pois você garante que, tendo os requisitos, o retorno será do tipo esperado