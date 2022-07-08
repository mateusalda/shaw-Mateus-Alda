import { user, UserRole } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public create = async (newUser: user) => {
        await this.getConnection()
            ('cookenu_users')
            .insert({
                ...newUser,
                following: JSON.stringify(newUser.following),
                followers: JSON.stringify(newUser.followers)
            } )

    }
    public delete = async (id: string): Promise<number> => {
        const affectedRows = await this.getConnection()('cookenu_users')
            .delete()
            .where({ id })
        return Number(affectedRows) 
    }
    public edit = async (id: string, columnsUpdate: { name: string }): Promise<number> => {
        const affectRows = await this.getConnection()('cookenu_users')
            .update(columnsUpdate)
            .where({ id })
        return Number(affectRows) 
    }
    public changeRole = async (id: string, columnsUpdate: { role: UserRole }): Promise<number> => {
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
    public setFollowers = async (id: string, followers: string): Promise<number> => {
        const affectRows = await this.getConnection()('cookenu_users')
            .update({ followers })
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
            ...result,
            following: result.following ? JSON.parse(result.following) : [],
            followers: result.followers ? JSON.parse(result.followers) : []
        } 
    }
    public getAll = async (): Promise<user[]> => {
        const result = await this.getConnection()('cookenu_users')
            .select()
            
        return result
    }
}