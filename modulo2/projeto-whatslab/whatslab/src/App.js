import React from 'react'
import styled from 'styled-components'
import Conversa from './components/Conversa.js'

const Main = styled.div`
display: flex;
justify-content: center;
width: 100vw;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 600px;
    height: 99vh;
    border: 1px solid black;
`
const ContainerConversa = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    width: 100%;
`

const Enviar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const InputNome = styled.input`
    flex-grow: 0;
    min-width: 100px;
`
const InputTexto = styled.input`
    flex-grow: 1;
    min-width: 150px;
`
const BotaoEnviar = styled.button`
    flex-grow: 0;
    width: 55px;
`

class App extends React.Component {
    state = {
        mensagens: [],
        inputNome: '',
        inputTexto: ''
    }

    onChangeNome = (event) => {
        this.setState({ inputNome: event.target.value })
    }
    onChangeTexto = (event) => {
        this.setState({ inputTexto: event.target.value })
    }

    novaMensagem = () => {
        const mensagem = {
            nome: this.state.inputNome,
            texto: this.state.inputTexto
        }
        this.setState({
            mensagens: [...this.state.mensagens, mensagem],
            inputTexto: ''
        })
    }

    render() {
        const conersa = this.state.mensagens.map((mensagem) => {
            return <Conversa nome={mensagem.nome} texto={mensagem.texto} />
        })
        return (
            <Main>
                <MainContainer>
                    <ContainerConversa>{conersa}</ContainerConversa>
                    <Enviar>
                        <InputNome value={this.state.inputNome} onChange={this.onChangeNome} placeholder='Nome' />
                        <InputTexto value={this.state.inputTexto} onChange={this.onChangeTexto} placeholder='Mensagem' />
                        <BotaoEnviar onClick={this.novaMensagem}>Enviar</BotaoEnviar>
                    </Enviar>
                </MainContainer>
            </Main>);
    }
}

export default App;
