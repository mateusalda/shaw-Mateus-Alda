import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

export default async function login (req: Request, res: Response): Promise<void> {
    try {
        const {email, password} = req.body
        
        if(!email || !password){
            res.status(422)
            throw new Error("Invalid 'email' or 'password' field.")
        }

        const userDB = new UserDatabase()
        const user = await userDB.getByEmail(email)
        
        if(!user){
            res.status(401)
            throw new Error("Email not found.")     
        }

        const hashManager = new HashManager()
        const correctPassword: boolean = await hashManager.compare(password, user.password)

        if(!correctPassword){
            res.status(401)
            throw new Error("Incorrect email or password.")  
        }

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({ id: user.id, role: user.role })

        res.send({token})
        
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}