import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForms } from '../hooks/useForms'
import { goToFeedPage, goToLoginPage } from '../router/coordinates'
import { baseURL } from '../constants/constants'

const SignUpPage = () => {
    const navigate = useNavigate()
    const [form, onChange] = useForms({name: '', email: '', password: ''})
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const submitForm = (event) => {
        event.preventDefault()

        const body = {
            "username":form.name,
            "email": form.email,
            "password": form.password
        }

        axios.post(baseURL+'/users/signup', body)
        .then(response => {
            console.log(response.data);
            localStorage.setItem('token', response.data.token)
            goToFeedPage(navigate)
        })
        .catch(error => {
            console.log(error.response);
        })
    }

    return (
        <Box component='form' autoComplete='off' onSubmit={submitForm}>
            <TextField
                required
                name= 'name'
                id="outlined-required"
                label="Nome"
                value={form.name}
                onChange={onChange}
            />
            <TextField
                required
                name= 'email'
                id="outlined-required"
                label="Email"
                type= 'email'
                value={form.email}
                onChange={onChange}
            />
            <TextField
                required
                name= 'password'
                id="outlined-adornment-password"
                label="Senha"
                type={showPassword ? 'text' : 'password'}
                value={form.password}
                onChange={onChange}
                autoComplete="current-password"
                endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
            />
            <Button type='submit'>Cadastrar</Button>
            <Button onClick={() => goToLoginPage(navigate)}>Ir para Login</Button>
        </Box>
    )
}

export default SignUpPage