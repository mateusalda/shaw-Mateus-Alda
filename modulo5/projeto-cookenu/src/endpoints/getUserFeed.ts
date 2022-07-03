import { Request, Response } from "express";
import moment from "moment";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getUserFeed(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization

        if (!token) {
            res.status(401)
            throw new Error("Authentication token is missing.")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getTokenData(token)

        const userDB = new UserDatabase()
        const user = await userDB.getById(data.id)

        const recipeDB = new RecipeDatabase()
        const recipes = await recipeDB.getFeed(user.following)

        const feed = await Promise.all(recipes.map(async (recipe) => {
            const followingUserDB = new UserDatabase()
            const followingUser = await followingUserDB.getById(recipe.user_id)
            const fullRecipe = {
                ...recipe,
                user_name: followingUser.name
            }
            
            return fullRecipe
        }))
        console.log('feed', feed);
        

        res.send({ feed: feed })

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}