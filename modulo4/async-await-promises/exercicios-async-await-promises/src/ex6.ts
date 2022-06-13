import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
    id: string;
    name: string;
    email: string;
}

const sendNotifications = async (users: user[], message: string): Promise<void> => {
    try {
        const notificationsToSend = users.map(user => {
            return axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        })

        await Promise.all(notificationsToSend)

        console.log('Notifications sent');
        
    } catch (error: any) {
        console.log(error.message);
    }
}

//a.
// Promise.all envia todas as requisições de um array de uma vez

//b.
// O processo é bem mais rápido, pois não precisa fazer as requisições uma por uma, esperando uma terminar pra começar a próxima