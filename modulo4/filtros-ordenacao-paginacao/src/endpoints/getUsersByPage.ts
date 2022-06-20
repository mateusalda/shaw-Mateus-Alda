import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUsersByPage = async(req: Request,res: Response): Promise<void> =>{
    try {
        let page = Number(req.query.page)

        if (page < 1 || isNaN(page)){
            page = 1
        }

       const users = await connection('aula48_exercicio')
        .select()
        .limit(5)
        .offset(5 * (page - 1))
 
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