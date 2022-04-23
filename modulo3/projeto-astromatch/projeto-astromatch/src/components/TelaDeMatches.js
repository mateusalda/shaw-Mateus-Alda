import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import axios from "axios";
import CardMatch from "./CardMatch";
import IconButton from '@mui/material/IconButton';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';

const TelaDeMatches = () => {
    const [matches, setMatches] = useState([])
    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mtalda/matches')
            .then((res) => {
                setMatches(res.data.matches)
            })
            .catch((err) => {
                console.log('error', err);
            })
    }

    const clear = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": "PatusZf4mHH6UoZfYC8I"
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mtalda/clear", requestOptions)
            .then(response => {
                getMatches()
                return response.text()
            })
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const matchesList = matches.map((match) => {
        return <CardMatch match={match} key={match.id} />
    })

    console.log(matches);

    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {matchesList}
            <IconButton onClick={() => clear()} color="primary" aria-label="dislike">
                <RotateLeftIcon fontSize="96px" />
            </IconButton>
        </Box>
    )
}

export default TelaDeMatches