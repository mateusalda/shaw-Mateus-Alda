import React from 'react'
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

export default class Etapa1 extends React.Component {
    render(){
        return (
        <Container>
            <h2>ETAPA 1 - DADOS GERAIS</h2>
            <div>
                <label>1. Qual o seu nome?</label>
                <input />
            </div>
            <div>
                <label>2. Qual sua idade?</label>
                <input />
            </div>
            <div>
                <label>1. Qual o seu email?</label>
                <input />
            </div>
            <div>
                <label>4. Qual a sua escolaridade?</label>
                <select>
                    <option>Ensino médio incompleto</option>
                    <option>Ensino médio completo</option>
                    <option>Ensino superior incompleto</option>
                    <option>Ensino superior completo</option>
                </select>
            </div>
        </Container> )
    }
}