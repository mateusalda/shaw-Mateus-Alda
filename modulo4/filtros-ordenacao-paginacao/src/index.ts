import { app } from "./app";
import { getAllRecipes } from "./endpoints/getAllRecipes";
import { getUserByType } from "./endpoints/getUserByType";
import { getUsers } from "./endpoints/getUsers";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByPage } from "./endpoints/getUsersByPage";
import { getUsersOrdered } from "./endpoints/getUsersOrdered";

app.get("/recipes", getAllRecipes)
app.get("/users", getUsers)
app.get("/users/:type", getUsers)