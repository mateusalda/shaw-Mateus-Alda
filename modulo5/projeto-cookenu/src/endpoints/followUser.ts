import { Request, Response } from "express";
import { follow } from "../data/follow";
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

        const response = await follow(data.id, followId)

        if (response.error){
            res.status(response.errorCode)
            throw new Error(response.error)
        }

        res.send({ message: response.success })

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}