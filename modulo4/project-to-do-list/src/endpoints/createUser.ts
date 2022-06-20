import connection from "../connection"
import { Request, Response } from "express"

const createUserSQL = async (name: string, nickname: string, email: string): Promise<void> => {
    await connection('todo_users').insert({ name: name, nickname: nickname, email: email })
}
export const createUser = async (req: Request, res: Response) => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email){
            res.status(422)
            throw new Error("Entity 'name', 'nickname' or 'email' missing from body.")
        }

        await createUserSQL(name, nickname, email)

        res.status(201).send('User created!')

    } catch (error: any) {
        res.send({ message: error.message })
    }
}