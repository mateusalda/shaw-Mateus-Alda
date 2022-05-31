import express from 'express'
import cors from 'cors'
import { AddressInfo } from 'net'
import { todos } from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/ping', (req, res) => {
    res.send('pong')
})

app.get('/todo/:completed', (req, res) => {
    const completed = req.params.completed === 'true'
    const filteredTodos = todos.filter(todo => todo.completed === completed)

    res.status(200).send(filteredTodos)
})

app.post('/todo/:userId', (req, res) => {
    type ToDo = {
        id: number,
        userId: number,
        title: string,
        completed: boolean
    }

    const userId = Number(req.params.userId)
    const id = todos[todos.length - 1].id + 1
    const {title, completed} = req.body

    if (typeof title === 'string' && typeof completed === 'boolean'){
        const newItem: ToDo = {
            id: id,
            userId: userId,
            title: title,
            completed: completed
        }
        todos.push(newItem)
        res.send(todos)
    } else {
        res.send('Type of title or completed does not match required types on body')
    }
})

app.put('/todo/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = todos.findIndex(item => item.id === id)

    todos.splice(index, 1, {...todos[index], completed: !todos[index].completed})

    res.send(todos[index])
})

app.delete('/todo/:id', (req, res) => {
    const id = Number(req.params.id)
    const index = todos.findIndex(item => item.id === id)

    if (index > -1){
        todos.splice(index, 1)

        res.send(`Task with id ${id} removed successfuly`)
    } else {
        res.send('Task not found')
    }
})

app.get('/users/:userId/todo', (req, res) => {
    const userId = Number(req.params.userId)
    const filteredList = todos.filter(task => task.userId === userId)

    res.send(filteredList)
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error('Failure upon starting server.')
    }
})