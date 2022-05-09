import React, { useEffect, useState } from "react";
import axios from 'axios'
import CardProfile from "./CardProfile";
import { Box } from "@mui/material";
import IconButton from '@mui/material/IconButton';
// import { makeStyles } from "@material-ui/core";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

// const useStyles = makeStyles({
//     like: {
//         fontSize: 60,
//         color: '#A91B60'
//     }
// })

const TelaInicial = () => {
    const [profile, setProfile] = useState({})
    // const classes = useStyles()

    useEffect(() => {
        getProfileToChoose()
    }, [])

    const getProfileToChoose = () => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mtalda/person`)
            .then((res) => {
                setProfile(res.data.profile)
            })
            .catch((err) => {
                console.log(err.response.data.message);
            })
    }

    const choosePerson = (choice) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "id": profile.id,
            "choice": choice
        });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mtalda/choose-person", requestOptions)
            .then(response => {
                getProfileToChoose()
                return response.text()
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <CardProfile profile={profile} />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    width: '100%',
                    fontSize: '200%'
                }}
            >
                <IconButton onClick={() => choosePerson(false)} color="primary" aria-label="dislike">
                    <HighlightOffIcon sx={{ fontSize: 60 }} />
                </IconButton>
                <IconButton onClick={() => choosePerson(true)} color="secondary" aria-label="like">
                    <FavoriteBorderIcon sx={{ fontSize: 60 }} />
                </IconButton>
            </Box>
        </Box>
    )
}

export default TelaInicial