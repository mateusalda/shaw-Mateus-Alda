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
    public getByUserId = async (userId: string): Promise<recipe[]> => {
        const result = await this.getConnection()('cookenu_recipes')
            .where({ userId }) 
        return result 
    }
    public getById = async (id: string): Promise<recipe> => {
        const [result] = await this.getConnection()('cookenu_recipes')
            .where({ id }) 
        return result 
    }
}