import app from "./app";
import { createTask } from "./endpoints/createTask";
import { createUser } from "./endpoints/createUser";
import { getTaskById } from "./endpoints/getTaskById";
import { getUserById } from "./endpoints/getUserById";
import { updateUser } from "./endpoints/updateUser";

app.post('/user', createUser)
app.get('/user/:id', getUserById)
app.put('/user/edit/:id', updateUser)
app.post('/task', createTask)
app.get('/task/:id', getTaskById)