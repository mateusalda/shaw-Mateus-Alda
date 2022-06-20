import connection from "../connection"
import { Request, Response } from "express"


export const updateUser = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)
        
        if (req.body.name === '' || req.body.nickname === '' || req.body.email === ''){
            res.status(422)
            throw new Error("Field 'name', 'nickname' or 'email' when present cannot be blank.")
        }

        const result = await connection('todo_users')
            .where('user_id', id)
            .update(req.body)

        console.log("log aqui" + result);
        if (result === 0){
            res.status(404)
            throw new Error('User with this ID not found.')
        }

        res.send('User updated successfully!')

    } catch (error: any) {
        res.send({message: error.message})
    }
}