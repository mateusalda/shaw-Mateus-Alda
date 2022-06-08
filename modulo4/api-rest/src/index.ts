import express from "express";
import cors from "cors";
import { users } from "./data";

enum Type {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL'
}

type User = {
    id: number,
    name: string,
    email: string,
    type: Type,
    age: number
}

const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
    try {
        const {type, name} = req.query

        if (!type && !name) {
            res.send(users)
        } else {
            if (type && type !== Type.ADMIN && type !== Type.NORMAL){
                res.status(422)
                throw new Error("Type can only be 'ADMIN' or 'NORMAL'");
            }

            const filtered = type && name ?
            users.filter(user => user.type === type).filter(user => user.name.toLowerCase().includes((name as string).toLowerCase())) :
            type && !name ?
            users.filter(user => user.type === type) :
            users.filter(user => user.name.toLowerCase().includes((name as string).toLowerCase()))

            if (filtered.length === 0) {
                res.status(404)
                throw new Error("User with this name not found.");                
            }
            
            res.send(filtered)
        }
        
    } catch (error: any) {
        res.send(error.message)
    }
})

app.post('/users', (req, res) => {
    try {
        const {name, email, type, age} = req.body

        if (!name || !email || !type || !age){
            res.status(422)
            throw new Error("Property missing on body");            
        }
        if (typeof name !== 'string'){
            res.status(422)
            throw new Error("Type of 'name' invalid");            
        }
        if (typeof email !== 'string'){
            res.status(422)
            throw new Error("Type of 'email' invalid");            
        }
        if (typeof type !== 'string'){
            res.status(422)
            throw new Error("Type of 'type' invalid");            
        }
        if (typeof age !== 'number'){
            res.status(422)
            throw new Error("Type of 'age' invalid");            
        }

        if (users.find(user => user.email === email)) {
            res.status(409)
            throw new Error("This email is already being used");            
        }
        if (type !== Type.ADMIN && type !== Type.NORMAL) {
            res.status(422)
            throw new Error("Value of 'type' invalid"); 
        }

        const newUser: User = {
            id: users[users.length - 1].id + 1,
            name,
            email,
            type,
            age
        }

        users.push(newUser)

        res.status(201).send(users)
        
    } catch (error: any) {
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});