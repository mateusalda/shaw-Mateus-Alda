import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUsersByName = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name = req.query.name

       const users = await connection('aula48_exercicio')
        .select()
        .where('name', 'like', `%${name}%`)
 
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