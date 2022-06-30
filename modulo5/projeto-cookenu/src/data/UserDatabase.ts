import { user } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public create = async (newUser: user) => {
        await this.getConnection()
            ('cookenu_users')
            .insert({
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                password: newUser.password,
                following: JSON.stringify(newUser.following)
            } )

    }
    public edit = async (id: string, columnsUpdate: { name: string }): Promise<number> => {
        const affectRows = await this.getConnection()('cookenu_users')
            .update(columnsUpdate)
            .where({ id })
        return Number(affectRows) 
    }
    public setFollowing = async (id: string, following: string): Promise<number> => {
        const affectRows = await this.getConnection()('cookenu_users')
            .update({ following })
            .where({ id })
        return Number(affectRows) 
    }
    public getByEmail = async (email: string): Promise<user> => {
        const [result] = await this.getConnection()('cookenu_users')
            .where({ email }) 
        return result 
    }
    public getById = async (id: string): Promise<user> => {
        const [result] = await this.getConnection()('cookenu_users')
            .where({ id }) 
        return {
            id: result.id,
            name: result.name,
            email: result.email,
            password: result.password,
            following: result.following ? JSON.parse(result.following) : []
        } 
    }
}