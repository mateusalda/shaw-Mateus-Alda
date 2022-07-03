import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { unfollow } from "../data/unfollow";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { UserRole } from "../types";

export default async function deleteUser(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization
        const id = req.params.id

        if (!token) {
            res.status(401)
            throw new Error("Authentication token is missing.")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getTokenData(token)

        const userDB = new UserDatabase()
        const user = await userDB.getById(id)
        console.log('data',data);
        

        if (!user) {
            res.status(404)
            throw new Error("User with this ID not found.")
        }
        if (user.id !== data.id && data.role !== UserRole.ADMIN) {
            res.status(401)
            throw new Error("User cannot modify this account.")
        }

        const recipeDB = new RecipeDatabase()
        const affectedRecipeRows = await recipeDB.deleteUserRecipes(user.id)

        const affectedFollowing = await Promise.all(user.following.map( async (following) => {
            const response = await unfollow(user.id, following)
            if (response.error){
                res.status(response.errorCode)
                throw new Error(response.error)
            }
            return response
        }))
        const affectedFollowers = await Promise.all(user.followers.map( async (follower) => {
            const response = await unfollow(follower, user.id)
            if (response.error){
                res.status(response.errorCode)
                throw new Error(response.error)
            }
            return response
        }))


        const affectedRows = await userDB.delete(user.id)

        if (affectedRows == 0) {
            res.status(400)
            throw new Error("Failed to delete user.")
        }

        res.send({ message: "User deleted." })

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}