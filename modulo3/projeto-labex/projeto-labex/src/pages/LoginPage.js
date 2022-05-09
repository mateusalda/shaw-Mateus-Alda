import { useState } from "react"
import { goBack, goToAdminHomePage } from "../routes/coordinates"
import axios from 'axios'
import { useNavigate } from "react-router-dom"


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const updateEmail = (event) => {
        setEmail(event.target.value)
    }
    const updatePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        }
        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/mateus-alda-shaw/login', body)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('token', response.data.token)
            goToAdminHomePage(navigate)
        })
        .catch((error) => {
            console.log(error.response);
        })
    }

    return(
        <div>
            <h1>Login</h1>
            <input placeholder="email" value={email} onChange={updateEmail} />
            <input placeholder="password" value={password} onChange={updatePassword} />
            <button onClick={() => goBack(navigate)} >Voltar</button>
            <button onClick={login} >Entrar</button>
        </div>
    )
}

export default LoginPage