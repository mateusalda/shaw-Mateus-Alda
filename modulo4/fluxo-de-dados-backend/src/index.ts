import express from "express";
import cors from "cors";
import { products } from "./data";

type Product = {
    id: string,
    name: string,
    price: number
}

const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', (req, res) => {
    res.send('API is working')
})

app.get('/products', (req, res) => {
    res.send(products)
})

app.post('/products', (req, res) => {
    try {
        const body = req.body

        if (!body.name || !body.price) {
            res.status(422)
            throw new Error('Property "name" or "price" not informed')
        }
        if (typeof body.name !== 'string') {
            res.status(422)
            throw new Error('Invalid type of "name"')
        }
        if (typeof body.price !== 'number') {
            res.status(422)
            throw new Error('Invalid type of "price"')
        }
        if (body.price <= 0) {
            res.status(422)
            throw new Error('Invalid price amount')
        }

        const id = (): string => {
            const num = Number(products[products.length - 1].id.slice(0, -1)) + 1
            const lett = body.name[0]

            return num.toString() + lett
        }

        const newProduct: Product = {
            id: id(),
            name: body.name,
            price: body.price
        }
        products.push(newProduct)

        res.status(201).send(products)

    } catch (error: any) {
        res.send(error.message)
    }
})

app.put('/products/:id', (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const index = products.findIndex(product => product.id === id)

        if (index < 0) {
            res.status(404)
            throw new Error("Product with this id not found");
        }
        if (!body.price) {
            res.status(422)
            throw new Error('Property "price" not informed')
        }
        if (typeof body.price !== 'number') {
            res.status(422)
            throw new Error('Invalid type of "price"')
        }
        if (body.price <= 0) {
            res.status(422)
            throw new Error('Invalid "price" amount')
        }

        const updatedProduct: Product = { ...products[index], price: body.price }
        products.splice(index, 1, updatedProduct)

        res.status(201).send(products)
    } catch (error: any) {
        res.send(error.message)
    }
})

app.delete('/products/:id', (req, res) => {
    try {
        const id = req.params.id
        const index = products.findIndex(product => product.id === id)

        if (index < 0) {
            res.status(404)
            throw new Error("Product with this id not found");
        }

        products.splice(index, 1)

        res.send(products)

    } catch (error: any) {
        res.send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});