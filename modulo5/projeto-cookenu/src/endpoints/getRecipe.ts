import { Request, Response } from "express";
import moment from "moment";
import { RecipeDatabase } from "../data/RecipeDatabase";
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

        if(!recipe){
            res.status(404)
            throw new Error("Recipe with this ID not found.")
        }

        res.send({ recipe })

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}