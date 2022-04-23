import { Box } from "@mui/system";
import React from "react";

export default function CardMatch(props) {
    return (
        <Box 
            sx={{
                display: 'flex',
                alignItems: 'center',
                padding: 1
            }}
        >
            <img src={props.match.photo} style={{width: 50, height: 50, borderRadius: 50/ 2}}/>
            <p>{props.match.name}</p>
        </Box>
    )
}