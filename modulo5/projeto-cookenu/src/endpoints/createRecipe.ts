import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { Recipe } from "../types";
import moment from 'moment'

export default async function createRecipe (req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization
        const { title, description } = req.body

        if(!token){
            res.status(401)
            throw new Error("Authentication token is missing.")            
        }
        if(!title || !description){
            res.status(422)
            throw new Error("Invalid 'title' or 'description' field.")
        }
        if(title === 'Coffe' && description === 'Please meke me some coffe'){
            res.status(418)
            throw new Error("Sorry, I can't.")
        }
        
        const authenticator = new Authenticator()
        const data = authenticator.getTokenData(token)
        
        const generate = new IdGenerator()
        const id: string = generate.generateId()

        const newRecipe: Recipe = {
            id: id,
            title: title,
            description: description,
            created_at: moment().format('YYYY-MM-DD'),
            user_id: data.id
        }

        const recipeDB = new RecipeDatabase()
        await recipeDB.create(newRecipe)

        res.status(201).send({ newRecipe })
        
    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}