import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-bottom: 20px;
    }
`

export default class Etapa2 extends React.Component {
    render() {
        return (
            <Container>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <div>
                    <label>5. Qual curso?</label>
                    <input />
                </div>
                <div>
                    <label>6. Qual unidade de ensino?</label>
                    <input />
                </div>
            </Container>
        )
    }
}