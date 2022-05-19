import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
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
    const [form, onChange] = useForms({ email: '', password: '' })
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const submitLogin = (event) => {
        event.preventDefault()
        const body = {
            "email": form.email,
            "password": form.password
        }
        axios.post(baseURL + '/users/login', body)
            .then(response => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                goToFeedPage(navigate)
            })
            .catch(error => {
                console.log(error.response);
                alert('Usuário ou senha inválidos!')
            })
    }

    return (
        <Box component='form' autoComplete='off' onSubmit={submitLogin} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextField
                sx={{ width: '300px', mt: 1 }}
                name='email'
                id="outlined-required"
                label="Email"
                type='email'
                value={form.email}
                onChange={onChange}
            />
            <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                    sx={{ width: '300px', mt: 1 }}
                    name='password'
                    id="outlined-adornment-password"
                    label="Senha"
                    type={showPassword ? 'text' : 'password'}
                    value={form.password}
                    onChange={onChange}
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
            </FormControl>
            <Button sx={{ width: '300px', mt: 1 }} variant='contained' type='submit'>Login</Button>
            <Button sx={{ width: '300px', mt: 1 }} variant='outlined' onClick={() => goToSignUpPage(navigate)}>Cadastrar</Button>
        </Box>
    )
}

export default LoginPage