import React, {useState, useEffect} from 'react'
import TelaInicial from './components/TelaInicial';
import TelaDeMatches from './components/TelaDeMatches';
import { Box } from '@mui/material';

function App() {
    const [matchScreen, setMatchScreen] = useState(false)

    const changeScreen = () => {
        setMatchScreen(!matchScreen)
    }

    const selectScreen = () => {
        switch(matchScreen) {
            case false:
                return <TelaInicial />
            case true:
                return <TelaDeMatches />
        }
    }
  return (
    <Box 
        sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}
    >
        <Box
            sx={{
                width: 380,
                height: 600,
                display: 'flex',
                flexDirection: 'column',
                border: 1
            }}
        >
            <Box
                sx={{
                    width: 380,
                    display: 'flex',
                    justifyContent: 'space-between'
                }}
            >
            <button onClick={changeScreen}>Change Screen</button>
            </Box>
        {selectScreen()}
        </Box>
        
    </Box>
  );
}

export default App;
