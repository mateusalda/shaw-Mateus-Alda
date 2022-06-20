import { app } from "./app";
import { getAddress } from "./endpoints/getAddress";
import { signUpAddress } from "./endpoints/signUpAddress";

app.get("/address/:cep", getAddress)
app.post("/address", signUpAddress)