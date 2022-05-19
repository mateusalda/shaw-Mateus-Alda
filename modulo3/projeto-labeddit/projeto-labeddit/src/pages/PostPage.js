import { Button, IconButton, TextField } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentCard } from '../components/CommentCard'
import { PostCard } from '../components/PostCard'
import { baseURL } from '../constants/constants'
import { useProtectedPage } from '../hooks/useProtectedPage'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { goToFeedPage } from '../router/coordinates'
import { useForms } from '../hooks/useForms'

const PostPage = () => {
    const navigate = useNavigate()
    useProtectedPage()
    const pathParams = useParams()
    const [post, setPost] = useState([])
    const [comments, setComments] = useState([])
    const [form, onChange, clean] = useForms({comment: ''})

    useEffect(() => {
        getPostComments()
        getThisPost()
    }, [])

    const getThisPost = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        axios.get(baseURL + `/posts`, headers)
            .then(response => {
                setPost(response.data.filter((post) => post.id === pathParams.id))
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    const getPostComments = () => {
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        axios.get(`${baseURL}/posts/${pathParams.id}/comments`, headers)
            .then(response => {
                console.log(response.data)
                setComments(response.data)
            })
            .catch(error => {
                console.log(error.response);
            })
    }

    const postComment = (event) => {
        event.preventDefault()
        const body = {
            body: form.comment
        }
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        axios.post(`${baseURL}/posts/${pathParams.id}/comments`, body, headers)
        .then(response => {
            console.log(response.data);
            getPostComments()
            getThisPost()
            clean()
        })
        .catch(error => {
            console.log(error.response);
        })
    }

    const displayPost = post.map((post) => {
        return (
            <Box key={post.id}>
                <PostCard post={post} />
            </Box>
        )
    })

    const displayComments = comments.map((comment) => {
        return (
            <Box key={comment.id}>
                <CommentCard comment={comment} />
            </Box>
        )
    })

    return (
        <Box>
            <IconButton onClick={() => goToFeedPage(navigate)}>
                <ArrowBackIcon />
            </IconButton>
            {displayPost}
            <Box component='form' onSubmit={postComment}>
                <TextField
                    name='comment'
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    value={form.comment}
                    onChange={onChange}
                    placeholder="Adicionar Comentário"
                    fullWidth={true}
                />
                <div>
                    <Button type='submit' sx={{width: '100%', p: 1}} variant='contained'>Enviar</Button>
                </div>
            </Box>
            {displayComments}
        </Box>
    )
}

export default PostPage