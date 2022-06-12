import app from "./app";
import connection from "./connection";

const createUser = async (name: string, nickname: string, email: string): Promise<void> => {
    await connection('todo_users').insert({ name: name, nickname: nickname, email: email })
}
app.post('/user', async (req, res) => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email){
            res.status(422)
            throw new Error("Entity 'name', 'nickname' or 'email' missing from body.")
        }

        await createUser(name, nickname, email)

        res.status(201).send('User created!')

    } catch (error: any) {
        res.send({ message: error.message })
    }
})

app.get('/user/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)

        const result = await connection('todo_users')
            .where('user_id', id)
            .select('user_id', 'nickname')
        
        if (!result[0]){
            res.status(404)
            throw new Error('User with this ID not found.')
        }

        res.send(result[0])

    } catch (error: any) {
        res.send({message: error.message})
    }
})

app.put('/user/edit/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)
        
        if (req.body.name === '' || req.body.nickname === '' || req.body.email === ''){
            res.status(422)
            throw new Error("Field 'name', 'nickname' or 'email' when present cannot be blank.")
        }

        const result = await connection('todo_users')
            .where('user_id', id)
            .update(req.body)

        console.log("log aqui" + result);
        if (result === 0){
            res.status(404)
            throw new Error('User with this ID not found.')
        }

        res.send('User updated successfully!')

    } catch (error: any) {
        res.send({message: error.message})
    }
})


const formatStringToDate = (date: string): Date => {
    const day = date.substring(0, 2)
    const month = date.substring(3, 5)
    const year = date.substring(6)
    const newDate = `${year}-${month}-${day}`

    return new Date(newDate)
}

const createTask = async (title: string, description: string, limitDate: Date, creatorUserId: number): Promise<void> => {
    await connection('todo_tasks').insert({ 
        title: title,
        description: description,
        limit_date: limitDate,
        creator_user_id: creatorUserId
    })
}

app.post('/task', async (req, res) => {
    try {
        const { title, description, limitDate, creatorUserId } = req.body

        if (!title || !description || !limitDate || !creatorUserId){
            res.status(422)
            throw new Error("Entity 'title', 'description', 'limitDate' or 'creatorUserId' missing from body.")
        }

        await createTask(title, description, formatStringToDate(limitDate), creatorUserId)

        res.status(201).send('Task created!')

    } catch (error: any) {
        res.send({message: error.message})
    }
})


const formatDateToString = (date: Date): string => {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()
    const year = date.getFullYear()
    const newDate = `${day}/${month}/${year}`

    return newDate
}

app.get('/task/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)        

        const result = await connection('todo_tasks')
            .join('todo_users', 'user_id', '=', 'user_id')
            .select()
            .where('ID', id)

        if (!result.length){
            res.status(404)
            throw new Error('Task with this ID not found.')
        }
        

        const response = {
            "taskId": result[0].ID,
            "title": result[0].title,
            "description": result[0].description,
            "limitDate": formatDateToString(result[0].limit_date),
            "status": result[0].status,
            "creatorUserId": result[0].user_id,
            "creatorUserNickname": result[0].nickname
        }
        
        res.send(response)

    } catch (error: any) {
        res.send({message: error.message})
    }
})