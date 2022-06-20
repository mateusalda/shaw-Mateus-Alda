import connection from "../connection"
import { Request, Response } from "express"


export const getUserById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)

        const result = await connection('todo_users')
            .where('user_id', id)
            .select('user_id', 'nickname')
        
        if (!result[0]){
            res.status(404)
            throw new Error('User with this ID not found.')
        }

        res.send(result[0])

    } catch (error: any) {
        res.send({message: error.message})
    }
}