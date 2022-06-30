import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function unfollowUser(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization
        const unfollowId = req.body.userToUnfollowId

        if (!token) {
            res.status(401)
            throw new Error("Authentication token is missing.")
        }
        if (!unfollowId) {
            res.status(422)
            throw new Error("Invalid 'userToUnfollowId' field.")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getTokenData(token)

        const userToUnfollowDB = new UserDatabase()
        const userToUnfollow = await userToUnfollowDB.getById(unfollowId)

        const userDB = new UserDatabase()
        const user = await userDB.getById(data.id)

        if (!userToUnfollow) {
            res.status(404)
            throw new Error("User with this ID not found.")
        }
        if (!user.following.includes(unfollowId)) {
            res.status(400)
            throw new Error("User with this ID not being followed.")
        }

        const index = user.following.indexOf(unfollowId)
        user.following.splice(index, 1)
        await userDB.setFollowing(user.id, JSON.stringify(user.following))

        res.send({ message: "Unfollowed successfully."})

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}