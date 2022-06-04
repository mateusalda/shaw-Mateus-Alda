import express from "express";
import cors from "cors";
import { accounts } from "./data";

type Transaction = {
    value: number,
    date: Date,
    description: string
}

type Account = {
    name: string,
    cpf: number,
    birth: Date,
    balance: number,
    extract: Transaction[]
}

const app = express();

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
    res.send(accounts)
})

app.get('/users/:cpf/balance', (req, res) => {
    try {
        const cpf = Number(req.params.cpf)

        if (!cpf){
            res.status(422)
            throw new Error("O CPF deve ser informado");            
        } else {
            if (!accounts.find(acc => acc.cpf === cpf)) {
                res.status(404)
                throw new Error('Usuário com CPF informado não encontrado')
            }

            const balance = accounts.find(acc => acc.cpf === cpf)?.balance

            res.send({saldo: balance})
        }
    } catch (error: any) {
        res.send(error.message)
    }
})

app.post('/users', (req, res) => {
    try {
        const {name, cpf, birth} = req.body
        const dateOfBirth = new Date(birth)

        if (!name || !cpf || !birth){
            res.status(422)
            throw new Error('Nome, CPF ou data de nascimento ausente')
        }
        if (accounts.find(acc => acc.cpf === cpf)){
            res.status(409)
            throw new Error('Usuário com este CPF já cadastrado')
        }

        const timeDif = Math.abs(Date.now() - dateOfBirth.getTime())
        const age = Math.floor((timeDif/(1000 * 3600 * 24))/365.25)

        if (age < 18){
            res.status(403)
            throw new Error('É necessário ter dezoito anos para abrir uma conta')
        }

        const newAccount: Account = {
            name,
            cpf,
            birth: dateOfBirth,
            balance: 0,
            extract: []
        }

        accounts.push(newAccount)

        res.status(201).send(accounts)
        
    } catch (error: any) {
        res.send(error.message)
    }
})

app.put('/users/deposit', (req, res) => {
    try {
        const {name, cpf, deposit} = req.body

        if(!name || !cpf || !deposit){
            res.status(422)
            throw new Error('Nome, CPF ou valor do depósito ausente')
        }
        if (!accounts.find(acc => acc.cpf === cpf)){
            res.status(404)
            throw new Error('Usuário com CPF informado não encontrado')
        }
        if (accounts.find(acc => acc.cpf === cpf)?.name.toLowerCase() !== name.toLowerCase()){
            res.status(404)
            throw new Error('Nome informado não corresponde ao nome deste CPF')
        }
        if(deposit <= 0){
            res.status(422)
            throw new Error('Valor do depósito não pode ser igual ou menor a 0')
        }

        const index = accounts.findIndex(acc => acc.cpf === cpf)
        const transaction: Transaction = {
            value: deposit,
            date: new Date(),
            description: "Depósito de dinheiro"
        }
        const updatedAcc: Account = {
            ...accounts[index], 
            balance: accounts[index].balance + deposit,
            extract: [...accounts[index].extract, transaction]
        }

        accounts.splice(index, 1, updatedAcc)

        res.status(200).send(accounts)
        
    } catch (error: any) {
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});