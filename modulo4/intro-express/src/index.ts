import express from 'express'
import cors from 'cors'
import {posts, users} from './data'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/posts', (req, res) => {
    res.send(posts)
})

app.get('/posts/:userId', (req, res) => {
    const userId = req.params.userId

    const filteredPosts = posts.filter(post => post.userId === Number(userId))

    console.log("running /posts/:userId");
    
    res.send(filteredPosts)
})

app.listen(3003, () => {
    console.log('Server is running on 3003');
})