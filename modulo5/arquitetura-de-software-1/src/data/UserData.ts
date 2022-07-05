import { user } from "../types/user";
import { BaseDB } from "./BaseDB";

export default class UserData extends BaseDB {

    async insertUser(user: user){
        await this.getConnection()('User_Arq')
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        })
    }
}