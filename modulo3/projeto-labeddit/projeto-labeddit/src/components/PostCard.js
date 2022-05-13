import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from "@mui/material"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { useContext, useState } from "react";
import axios from "axios";
import { baseURL } from "../constants/constants";
import { useNavigate } from "react-router-dom";
import { goToPostPage } from "../router/coordinates";
import { green, red } from "@mui/material/colors";
import GlobalStateContext from "../Global/GlobalStateContext";


export const PostCard = (props) => {
    const navigate = useNavigate()
    const {post, setPost} = useContext(GlobalStateContext)
    const [vote, setVote] = useState(props.post.userVote || 0)
    const [voteCount, setVoteCount] = useState(props.post.voteSum ? Number(props.post.voteSum) : 0)
    // const [commentCount, setCommentCount]

    const postVote = (voteValue) => {
        const body = {
            "direction": voteValue
        }
        const headers = {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        }

        switch (true) {
            case voteValue === vote:
                axios.delete(baseURL + `/posts/${props.post.id}/votes`, headers)
                    .then(response => {
                        console.log('vote deleted');
                        setVote(0)
                        setVoteCount(voteCount - voteValue)
                    })
                    .catch(error => {
                        console.log(error.response);
                    })
                break
            case voteValue !== vote && vote === 0:
                axios.post(baseURL + `/posts/${props.post.id}/votes`, body, headers)
                    .then(response => {
                        console.log('vote created');
                        setVote(voteValue)
                        setVoteCount(voteCount + voteValue)
                    })
                    .catch(error => {
                        console.log(error.response);
                    })
                break
            case voteValue !== vote && vote !== 0:
                axios.put(baseURL + `/posts/${props.post.id}/votes`, body, headers)
                    .then(response => {
                        console.log('vote changed');
                        setVote(voteValue)
                        setVoteCount(voteCount + 2 * voteValue)
                    })
                    .catch(error => {
                        console.log(error.response);
                    })
                break
            default:
                console.log('switch case error');
        }
    }

    const selectPost = () => {
        goToPostPage(navigate, props.post.id)
        setPost(props.post)
    }

    return (
        <Card sx={{ m: 1 }}>
            <CardActionArea onClick={() => selectPost()}>
                <CardContent>
                    <Typography variant='body2' sx={{ fontSize: 10 }} color="#888888" gutterBottom>
                        Enviado por: {props.post.username}
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h6" component="div">
                        {props.post.title}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {props.post.body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <IconButton onClick={() => postVote(1)}>
                    {vote === 1 ? <ThumbUpIcon style={{ color: green[500] }} /> : <ThumbUpOutlinedIcon />}
                </IconButton>
                <Typography variant='body2' component="div">{voteCount}</Typography>
                <IconButton onClick={() => postVote(-1)}>
                    {vote === -1 ? <ThumbDownAltIcon style={{ color: red[500] }} /> : <ThumbDownAltOutlinedIcon />}
                </IconButton >
                <IconButton onClick={() => selectPost()}>
                    <ChatBubbleOutlineOutlinedIcon sx={{ ml: 2 }} />
                </IconButton>
                <Typography variant='body2' component="div">{props.post.commentCount || 0}</Typography>
            </CardActions>
        </Card>
    )
}