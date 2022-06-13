import axios from "axios"
import { baseURL } from "./baseURL"


const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)

    return response.data
}

getSubscribers().then(console.log)

//a.
// Em uma função nomeada você deve declarar que ela é assíncrona antes de declarar que é função, na arrow function basta declarar asinc antes dos parênteses