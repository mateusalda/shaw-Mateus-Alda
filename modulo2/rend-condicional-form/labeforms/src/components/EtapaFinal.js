import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class EtapaFinal extends React.Component {
    render(){
        return (
            <Container>
                <h2>FIM DO FORMULÁRIO</h2>
                <p>Obrigado pela sua participação. Entraremos em contato.</p>
            </Container>
        )
    }
}