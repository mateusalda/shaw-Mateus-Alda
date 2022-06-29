import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export default async function getProfile(req: Request, res: Response): Promise<void> {
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
        let user

        if (!id) {
            user = await userDB.getById(data.id)
        } else {
            user = await userDB.getById(id)
        }

        res.send({
            user: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        })

    } catch (error: any) {
        console.log(error);
        res.send(error.message || error.sqlMessage)
    }
}