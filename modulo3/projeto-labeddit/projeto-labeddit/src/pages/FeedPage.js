import { Button, IconButton, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PostCard } from '../components/PostCard'
import { baseURL } from '../constants/constants'
import { useForms } from '../hooks/useForms'
import { useProtectedPage } from '../hooks/useProtectedPage'
import { goToLoginPage } from '../router/coordinates'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const FeedPage = () => {
    const navigate = useNavigate()
    useProtectedPage()
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [form, onChange, clean] = useForms({title: '', content: ''})

    useEffect(() => {
        getPosts()
    }, [page])

    const getPosts = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }
        axios.get(baseURL + `/posts?page=${page}&size=10`, headers)
            .then(response => {
                console.log(response.data);
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    const createPost = (event) => {
        event.preventDefault()
        
        const body = {
            "title": form.title,
            "body": form.content
        }
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        axios.post(`${baseURL}/posts`, body, headers)
        .then(response => {
            console.log(response.data);
            getPosts()
            clean()
        })
        .catch(error => {
            console.log(error.response);
        })
    }

    const changePage = (change) => {
        setPage(page + change)
    }

    const displayPosts = posts.map((post) => {
        return (
            <Box key={post.id}>
                <PostCard post={post} />
            </Box>
        )
    })

    const logout = () => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
    }

    return (
        <Box>
            <Button variant='contained' sx={{m: 1}} onClick={() => logout()}>Logout</Button>
            <Box component='form' onSubmit={createPost}>
                <TextField
                    required
                    name='title'
                    id="outlined-basic"
                    value={form.title}
                    onChange={onChange}
                    placeholder="Título"
                    fullWidth={true}
                />
                <TextField
                    required
                    name='content'
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    value={form.content}
                    onChange={onChange}
                    placeholder="Conteúdo"
                    fullWidth={true}
                />
                <div>
                    <Button type='submit' sx={{width: '100%', p: 1}} variant='contained'>Criar Post</Button>
                </div>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', mt: 2}}>
                <Typography>Página:</Typography>
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <IconButton disabled={page === 1} onClick={() => changePage(-1)}>
                    <NavigateBeforeIcon/>
                </IconButton>
                <Typography>{page}</Typography>
                <IconButton onClick={() => changePage(1)}>
                    <NavigateNextIcon/>
                </IconButton>
            </Box>
            {displayPosts}
        </Box>
    )
}

export default FeedPage