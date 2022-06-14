import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
        let name = req.query.name
        let type = req.params.type
        let page = Number(req.query.page)
        let sort = req.query.sort as string
        let order = req.query.order as string

        if (!name){
            name = ''
        }
        if (!type){
            type = ''
        }
        
        if (!page || page < 1 || isNaN(page)){
            page = 1
        }

        if (!sort || sort !== 'name' && sort !== 'type'){
            sort = 'name'
        }
        if (!order || order !== 'asc' && order !== 'desc'){
            order = 'desc'
        }

       const users = await connection('aula48_exercicio')
        .select()
        .where('name', 'like', `%${name}%`)
        .where('type', 'like', `%${type}%`)
        .orderBy(sort, order)
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