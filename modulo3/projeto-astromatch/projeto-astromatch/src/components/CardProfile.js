import React, { useState } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'

const CardProfile = (props) => {

    const styles = {
        paperContainer: {
            backgroundImage: `url(${props.profile.photo})`,
            backgroundSize: 'cover'
        }
    };

    return (
        <div>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 340,
                        height: 408,
                    },
                }}
            >
                <Paper
                    style={styles.paperContainer}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: 1,
                        color: "white"
                    }}
                >
                    <p><strong>{props.profile.name}</strong>, {props.profile.age}</p>
                    <p>{props.profile.bio}</p>
                </Paper>
            </Box>
        </div>
    )
}

export default CardProfile