import connection from "../connection"
import { Request, Response } from "express"


const formatStringToDate = (date: string): Date => {
    const day = date.substring(0, 2)
    const month = date.substring(3, 5)
    const year = date.substring(6)
    const newDate = `${year}-${month}-${day}`

    return new Date(newDate)
}

const createTaskSQL = async (title: string, description: string, limitDate: Date, creatorUserId: number): Promise<void> => {
    await connection('todo_tasks').insert({ 
        title: title,
        description: description,
        limit_date: limitDate,
        creator_user_id: creatorUserId
    })
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId){
            res.status(422)
            throw new Error("Entity 'title', 'description', 'limitDate' or 'creatorUserId' missing from body.")
        }

        await createTaskSQL(title, description, formatStringToDate(limitDate), creatorUserId)

        res.status(201).send('Task created!')

    } catch (error: any) {
        res.send({message: error.message})
    }
}