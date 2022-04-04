import React from 'react';
// import './CardPequeno.css'
import styled from 'styled-components'

const SmallCard = styled.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 20px 10px;
margin-bottom: 10px;
height: 70px;

img {
    width: 40px;
    margin-right: 10px;
}

div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
`

function CardPequeno(props) {
    return (
        <SmallCard>
            <img src={ props.imagem } />
            <div>
                <p>{ props.texto }</p>
            </div>
        </SmallCard>
    )
}

export default CardPequeno;