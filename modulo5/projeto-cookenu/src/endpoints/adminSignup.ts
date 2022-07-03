import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { AuthenticationData, user, UserRole } from "../types";

export default async function adminSignup (req: Request, res: Response): Promise<void> {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password){
            res.status(422)
            throw new Error("Invalid 'name', 'email' or 'password' field.")
        }
        if(typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string'){
            res.status(422)
            throw new Error("Invalid 'name', 'email' or 'password' type. All types must be string.")
        }
        if(password.length < 6){
            res.status(422)
            throw new Error("Password must have at least 6 characters.")
        }

        const userDB = new UserDatabase()
        const user = await userDB.getByEmail(email)

        if(user){
            res.status(409)
            throw new Error("This email is already being used.");            
        }

        const generate = new IdGenerator()
        const id: string = generate.generateId()

        const hashManager = new HashManager()
        const hash = await hashManager.hash(password)

        const newAdminUser: user = {
            id,
            name,
            email,
            password: hash,
            following: [],
            followers: [],
            role: UserRole.ADMIN
        }

        await userDB.create(newAdminUser)

        const authenticator = new Authenticator()
        const authData: AuthenticationData = { id, role: newAdminUser.role }
        const token = authenticator.generateToken(authData)

        const userReturn = {
            id, name, email
        }

        res.status(201).send({ newAdminUser: userReturn, token})

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}