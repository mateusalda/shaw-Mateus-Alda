import { Request, Response } from "express"
import app from "./app";
import connection from "./connection";

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}';
  `)

	return result[0][0]
}


// Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal


const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name LIKE '%${name}%';
    `)

    return result[0]
}

app.get('/actor/:name', async (req, res) => {
    try {
        const name = req.params.name

        console.log(await getActorByName(name));
        
        res.end()
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

const getAmmountByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) FROM Actor WHERE gender = '${gender}';
    `)
    return result[0]
}

app.get('/actor', async (req, res) => {
    try {
        const gender = req.query.gender as string

        console.log(await getAmmountByGender(gender));
        
        res.end()
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

const updateSalaryById = async (id: string, salary: number): Promise<any> => {
    const result = await connection('Actor').where("id", id).update({ salary: salary })

    return result
}

app.put('/actor', async (req, res) => {
    try {
        await updateSalaryById(req.body.id, req.body.salary)
        
        res.status(201).send('Success!')
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

const deleteActorById = async (id: string): Promise<void> => {
    await connection('Actor').where({ id: id }).delete()
}

app.delete('/actor/:id', async (req, res) => {
    try {
        const id = req.params.id

        await deleteActorById(id)

        res.status(200).send({message: `Actor with id ${id} successfully deleted!`})
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

const averageSalaryByGender = async (gender: string): Promise<any> => {
    const result = await connection('Actor').where({ gender: gender }).avg('salary')

    return result
}
(async () => {
    console.log(await averageSalaryByGender('female'));
})()




const getAllActors = async (): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor
    `)

    return result[0]
}
(async () => {
    console.log(await getAllActors());
})()

const createActor = async (
    id: string,
    name: string,
    salary: number,
    dateOfBirth: Date,
    gender: string
): Promise<void> => {
    await connection('Actor').insert({
        id: id,
        name: name,
        salary: salary,
        birth_date: dateOfBirth,
        gender: gender
    })
}

app.post("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        new Date(req.body.dateOfBirth),
        req.body.gender
      );
  
      res.status(201).send();
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });
