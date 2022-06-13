import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
    id: string;
    name: string;
    email: string;
}

const sendNotifications = async (users: user[], message: string): Promise<void> => {
    try {
        for (const user of users) {
            await axios.post(`${baseURL}/notifications`, {
                subscriberId: user.id,
                message: message
            })
        }

        console.log('Notifications sent');

    } catch (error: any) {
        console.log(error.message);
    }
}