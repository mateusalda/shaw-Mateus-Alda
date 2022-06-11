import app from "../app";
import connection from "../connection";

const createUser = async (name: string, nickname: string, email: string): Promise<void> => {
    await connection
}
app.post('/user', async (req, res) => {
    try {
        const { name, nickname, email } = req.body

        if (!name || !nickname || !email){
            res.status(422)
            throw new Error("Entity 'name', 'nickname' or 'email' missing from body.")
        }
        
    } catch (error: any) {
        res.send({ message: error.message })
    }
})