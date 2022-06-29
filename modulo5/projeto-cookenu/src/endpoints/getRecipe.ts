import { Request, Response } from "express";
import moment from "moment";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getRecipe(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization
        const id = req.params.id

        if (!token) {
            res.status(401)
            throw new Error("Authentication token is missing.")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getTokenData(token)

        const recipeDB = new RecipeDatabase()
        const recipe = await recipeDB.getById(id)

        res.send({
            recipe: {
                id: recipe.id,
                title: recipe.title,
                description: recipe.description,
                createdAt: moment(recipe.createdAt, 'yyyy-mm-dd').format('dd/mm/yyyy')
            }
        })

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}