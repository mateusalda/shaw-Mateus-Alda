import React from 'react'
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import EtapaFinal from './components/EtapaFinal'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`

export default class App extends React.Component {
    state = {
        etapa: 1,
        escolaridades: [
            'Ensino médio incompleto',
            'Ensino médio completo',
            'Ensino superior incompleto',
            'Ensino superior completo'
        ],
        botao: 'Próxima Etapa'
    }
    proximaEtapa = () => {
        switch (this.state.etapa) {
            case 1:
                this.setState({ etapa: 2 })
                break;
            case 2:
                this.setState({ etapa: 3 })
                break;
            case 3:
                this.setState({ etapa: 4, botao: 'Começo' })
                break;
            default:
                this.setState({ etapa: 1, botao: 'Próxima Etapa' })
                break;
        }
    }
    render() {
        let etapa
        switch (this.state.etapa) {
            case 1:
                etapa = <Etapa1 />
                break;
            case 2:
                etapa = <Etapa2 />
                break;
            case 3:
                etapa = <Etapa3 />
                break;
            case 4:
                etapa = <EtapaFinal />
                break;
            default:
                etapa = <p>Página de etapa não encontrada</p>
                break;
        }
        return (
            <Container>
                <h1>Labeforms</h1>
                {etapa}
                <button onClick={this.proximaEtapa}>{this.state.botao}</button>
            </Container>
        )
    }
}

