import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
import { UserRole } from "../types";

export default async function deleteRecipe(req: Request, res: Response): Promise<void> {
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

        if (!recipe) {
            res.status(404)
            throw new Error("Recipe with this ID not found.")
        }
        if (recipe.user_id !== data.id && data.role !== UserRole.ADMIN) {
            res.status(401)
            throw new Error("User cannot modify this recipe.")
        }

        const affectedRows = await recipeDB.delete(recipe.id)

        if (affectedRows == 0) {
            res.status(400)
            throw new Error("Failed to delete recipe.")
        }

        res.send({ message: "Recipe deleted." })

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}