import moment from "moment";
import { Recipe } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {
    public create = async (newRecipe: Recipe) => {
        await this.getConnection()
            ('cookenu_recipes')
            .insert(newRecipe)
    }
    public edit = async (id: string, columnsUpdate: { title: string, description: string }): Promise<number> => {
        const affectedRows = await this.getConnection()('cookenu_recipes')
            .update(columnsUpdate)
            .where({ id })
        return Number(affectedRows) 
    }
    public delete = async (id: string): Promise<number> => {
        const affectedRows = await this.getConnection()('cookenu_recipes')
            .delete()
            .where({ id })
        return Number(affectedRows) 
    }
    public deleteUserRecipes = async (user_id: string): Promise<number> => {
        const affectedRows = await this.getConnection()('cookenu_recipes')
            .delete()
            .where({ user_id })
        return Number(affectedRows) 
    }
    public getByUserId = async (user_id: string): Promise<Recipe[]> => {
        const result = await this.getConnection()('cookenu_recipes')
            .where({ user_id }) 
        return result 
    }
    public getById = async (id: string): Promise<Recipe> => {
        const [result] = await this.getConnection()('cookenu_recipes')
            .where({ id }) 
        
        return result && {
            ...result,
            created_at: moment(result.created_at, ' YYYY-MM-DD').format('DD/MM/YYYY')
        }
    }
    public getFeed = async (followingIds: string[]): Promise<Recipe[]> => {
        const result = await this.getConnection()('cookenu_recipes')
            .whereIn('user_id', followingIds)
        const formatResult = result.map((res): Recipe => {
            return ({
                ...res,
                created_at: moment(res.created_at, ' YYYY-MM-DD').format('DD/MM/YYYY')
            })
        })
        return result
    }
    public getAll = async (): Promise<Recipe[]> => {
        const result = await this.getConnection()('cookenu_recipes')
            .select()

        return result
    }
}