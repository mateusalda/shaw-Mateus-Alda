import React from 'react';
import axios from 'axios'
import CadastraUsuario from './components/CadastraUsuario';
import ListaUsuarios from './components/ListaUsuarios';

class App extends React.Component {
    state = {
        users: [],
        inputName: '',
        inputEmail: '',
        header: { headers: { Authorization: 'mateus-alda-shaw' }},
        cadastro: true
    }
    componentDidMount = () => {
        this.getAllUsers()
    }
    updateInputName = (event) => {
        this.setState({inputName: event.target.value})
    }
    updateInputEmail = (event) => {
        this.setState({inputEmail: event.target.value})
    }
    getAllUsers = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', this.state.header)
        .then((res) => {
            this.setState({users: res.data})
        })
        .catch((err) => {
            console.log(err.message);
        })
    }
    createUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputEmail
        }
        axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, this.state.header
        )
        .then((res) => {
            alert('Usuário cadastrado');
            this.getAllUsers()
        })
        .catch((err) => {
            alert(err.message);
        })
    }
    deleteUser = (id) => {
        axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/' + id, this.state.header)
        .then(() => {
            alert('Usuário deletado com sucesso!')
            this.getAllUsers()
        })
        .catch((err) => {
            alert('Falha ao deletar usuário', err.message)
        })
    }

    render() {
        let pagina = <h1>Erro</h1>
        if (this.state.cadastro){
            pagina = <div>
                <CadastraUsuario inputName={this.state.inputName} inputEmail={this.state.inputEmail} updateInputName={this.updateInputName} updateInputEmail={this.updateInputEmail} createUser={this.createUser} />
                <button onClick={() => {this.setState({cadastro: false})}}>Lista de Usuários</button>                
                </div>
        } else {
            pagina = <div>
                <ListaUsuarios users={this.state.users} deleteUser={this.deleteUser} />
                <button onClick={() => {this.setState({cadastro: true})}}>Voltar</button>
            </div>
        }
        return (
            <div>
                {pagina}
            </div>
        );
    }
}

export default App;
