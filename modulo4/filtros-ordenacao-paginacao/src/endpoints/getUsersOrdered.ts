import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUsersOrdered = async(req: Request,res: Response): Promise<void> =>{
    try {
        let sort = req.query.sort as string
        let order = req.query.order as string

        if (sort !== 'name' && sort !== 'type'){
            sort = 'email'
        }
        if (order !== 'asc' && order !== 'desc'){
            order = 'asc'
        }

       const users = await connection('aula48_exercicio')
        .select()
        .orderBy(sort, order)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No user found with these params")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }