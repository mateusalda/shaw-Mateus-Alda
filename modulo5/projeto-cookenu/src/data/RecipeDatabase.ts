import { recipe } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public create = async (newRecipe: recipe) => {
        await this.getConnection()
            ('cookenu_recipes')
            .insert(newRecipe)
    }
    public edit = async (id: string, columnsUpdate: { title: string, description: string }): Promise<number> => {
        const affectRows = await this.getConnection()('cookenu_recipes')
            .update(columnsUpdate)
            .where({ id })
        return Number(affectRows) 
    }
    public getByuser_id = async (user_id: string): Promise<recipe[]> => {
        const result = await this.getConnection()('cookenu_recipes')
            .where({ user_id }) 
        return result 
    }
    public getById = async (id: string): Promise<recipe> => {
        const [result] = await this.getConnection()('cookenu_recipes')
            .where({ id }) 
        return result
    }
    public getFeed = async (followingIds: string[]): Promise<recipe[]> => {
        const result = await this.getConnection()('cookenu_recipes')
            .whereIn('user_id', followingIds) 
        return result
    }
}