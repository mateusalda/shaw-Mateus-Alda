import { Request, Response } from "express";
import { unfollow } from "../data/unfollow";
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

        const response = await unfollow(data.id, unfollowId)

        if (response.error){
            res.status(response.errorCode)
            throw new Error(response.error)
        }

        res.send({ message: "Unfollowed successfully."})

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}