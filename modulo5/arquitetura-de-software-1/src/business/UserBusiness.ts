import UserData from "../data/UserData";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { userInput } from "../types/user";
import { generateToken } from "../services/authenticator"

export default class UserBusiness {
    async signup(user: userInput) {
        const { name, email, password, role } = user

        if ( !name || !email || !password || !role ) {
            throw new Error("Invalid 'name', 'email', 'password' or 'role' fields");            
        }

        const id: string = generateId()

        const cypherPassword = await hash(password)

        const userData = new UserData()
        await userData.insertUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })

        const token: string = generateToken({ id, role })

        return token
    }
}