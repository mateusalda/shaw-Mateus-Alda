import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
    try {
        const type = req.params.type

       const users = await connection('aula48_exercicio')
        .select()
        .where('type', type)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No user found with specified type")
       }
 
       res.status(200).send(users)
       
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }