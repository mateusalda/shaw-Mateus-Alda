import { Card, CardActionArea, CardActions, CardContent, IconButton, Typography } from "@mui/material"
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { useState } from "react";
import axios from "axios";
import { baseURL } from "../constants/constants";
import { green, red } from "@mui/material/colors";


export const CommentCard = (props) => {
    const [vote, setVote] = useState(props.comment.userVote || 0)
    const [voteCount, setVoteCount] = useState(props.comment.voteSum ? Number(props.comment.voteSum) : 0)

    const commentVote = (voteValue) => {
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
                axios.delete(baseURL + `/comments/${props.comment.id}/votes`, headers)
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
                axios.post(baseURL + `/comments/${props.comment.id}/votes`, body, headers)
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
                axios.put(baseURL + `/comments/${props.comment.id}/votes`, body, headers)
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

    return (
        <Card sx={{ m: 1 }}>
                <CardContent>
                    <Typography variant='body2' sx={{ fontSize: 10 }} color="#888888" gutterBottom>
                        Enviado por: {props.comment.username}
                    </Typography>
                    <Typography variant="body1" component="div">
                        {props.comment.body}
                    </Typography>
                </CardContent>
            <CardActions>
                <IconButton onClick={() => commentVote(1)}>
                    {vote === 1 ? <ThumbUpIcon style={{ color: green[500] }} /> : <ThumbUpOutlinedIcon />}
                </IconButton>
                <Typography variant='body2' component="div">{voteCount}</Typography>
                <IconButton onClick={() => commentVote(-1)}>
                    {vote === -1 ? <ThumbDownAltIcon style={{ color: red[500] }} /> : <ThumbDownAltOutlinedIcon />}
                </IconButton >
            </CardActions>
        </Card>
    )
}