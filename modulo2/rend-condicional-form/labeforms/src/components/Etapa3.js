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

export default class Etapa3 extends React.Component {
    render() {
        return (
            <Container>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <div>
                    <label>5. Por que você não terminou um curso de graduação?</label>
                    <input />
                </div>
                <div>
                    <label>6. Você fez algum curso complementar?</label>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                    </select>
                </div>
            </Container>
        )
    }
}