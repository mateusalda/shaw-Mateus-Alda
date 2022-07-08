import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { userInput } from "../types/user";

export default class UserController {
    async signup(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body

            const newUser: userInput = {
                name, email, password, role
            }

            const userBusiness = new UserBusiness()

            const token = userBusiness.signup(newUser)

            res.status(201).send({ message: "User created successfully!", token })
            
        } catch (error: any) {
            res.send(error.message)
        }
    }
}