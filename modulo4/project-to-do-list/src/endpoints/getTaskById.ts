import connection from "../connection"
import { Request, Response } from "express"


const formatDateToString = (date: Date): string => {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
    const year = date.getFullYear()
    const newDate = `${day}/${month}/${year}`

    return newDate
}

export const getTaskById = async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id)        

        const result = await connection('todo_tasks')
            .join('todo_users', 'user_id', '=', 'user_id')
            .select()
            .where('ID', id)

        if (!result.length){
            res.status(404)
            throw new Error('Task with this ID not found.')
        }
        

        const response = {
            "taskId": result[0].ID,
            "title": result[0].title,
            "description": result[0].description,
            "limitDate": formatDateToString(result[0].limit_date),
            "status": result[0].status,
            "creatorUserId": result[0].user_id,
            "creatorUserNickname": result[0].nickname
        }
        
        res.send(response)

    } catch (error: any) {
        res.send({message: error.message})
    }
}