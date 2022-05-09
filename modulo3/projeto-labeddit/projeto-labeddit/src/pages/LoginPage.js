import { Visibility, VisibilityOff } from '@mui/icons-material'
import { IconButton, InputAdornment, TextField } from '@mui/material'
import Button from '@mui/material/Button'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForms } from '../hooks/useForms'
import { goToFeedPage, goToSignUpPage } from '../router/coordinates'
import { baseURL } from '../constants/constants'
import axios from 'axios'

const LoginPage = () => {
    const navigate = useNavigate()
    const [form, onChange] = useForms({email: '', password: ''})
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const onSubmit = () => {
        const body = {
            "email": form.email,
            "password": form.password
        }
        axios.post(baseURL+'/users/login', body)
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
        <Box component='form' autoComplete='off' >
            <TextField
                name= 'email'
                id="outlined-required"
                label="Email"
                type= 'email'
                value={form.email}
                onChange={onChange}
            />
            <TextField
                sx={{
                    m: 2,
                    height: '100px'
                }}
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
            <Button onClick={() => onSubmit()}>Login</Button>
            <Button onClick={() => goToSignUpPage(navigate)}>Ir para Cadastro</Button>
        </Box>
    )
}

export default LoginPage