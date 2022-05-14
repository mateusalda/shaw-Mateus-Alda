import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
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
    const [form, onChange] = useForms({ name: '', email: '', password: '' })
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
            "username": form.name,
            "email": form.email,
            "password": form.password
        }

        axios.post(baseURL + '/users/signup', body)
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
        <Box component='form' autoComplete='off' onSubmit={submitForm} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <TextField
                sx={{width: '300px', mt: 1}}
                required
                name='name'
                id="name"
                label="Nome"
                value={form.name}
                onChange={onChange}
            />
            <TextField
                sx={{width: '300px', mt: 1}}
                required
                name='email'
                id="email"
                label="Email"
                type='email'
                value={form.email}
                onChange={onChange}
            />
            <FormControl required sx={{width: '300px', mt: 1}} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                <OutlinedInput
                    name='password'
                    id="password"
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
            <Button sx={{width: '300px', mt: 1}} type='submit' variant='contained'>Cadastrar</Button>
            <Button sx={{width: '300px', mt: 1}} onClick={() => goToLoginPage(navigate)} variant='outlined'>Login</Button>
        </Box>
    )
}

export default SignUpPage