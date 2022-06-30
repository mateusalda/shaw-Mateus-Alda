import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function followUser(req: Request, res: Response): Promise<void> {
    try {
        const token = req.headers.authorization
        const followId = req.body.userToFollowId

        if (!token) {
            res.status(401)
            throw new Error("Authentication token is missing.")
        }
        if (!followId) {
            res.status(422)
            throw new Error("Invalid 'userToFollowId' field.")
        }

        const authenticator = new Authenticator()
        const data = authenticator.getTokenData(token)

        const userToFollowDB = new UserDatabase()
        const userToFollow = await userToFollowDB.getById(followId)

        const userDB = new UserDatabase()
        const user = await userDB.getById(data.id)

        if (!userToFollow) {
            res.status(404)
            throw new Error("User with this ID not found.")
        }
        if (user.following.includes(followId)) {
            res.status(400)
            throw new Error("User with this ID already being followed.")
        }

        user.following.push(followId)
        await userDB.setFollowing(user.id, JSON.stringify(user.following))

        res.send({ message: "Followed successfully."})

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}