import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const NovoPost = styled.div`
      border: 1px solid black;
      display: grid;
      grid-template-columns: 1fr 2fr;
      column-gap: 5px;
      row-gap: 5px;
      padding: 10px;
      margin: 10px;
      
  button {
      grid-column: 1 / span 2;
  }

`

class App extends React.Component {
    state = {
        arrayPosts: [{
                nomeUsuario: "paulinha",
                fotoUsuario: "https://picsum.photos/50/50?random=1",
                fotoPost: "https://picsum.photos/200/150?random=2"
            },
            {
                nomeUsuario: "marcoaurelio",
                fotoUsuario: "https://picsum.photos/50/50?random=3",
                fotoPost: "https://picsum.photos/200/150?random=4"
            },
            {
                nomeUsuario: "tubaina",
                fotoUsuario: "https://picsum.photos/50/50?random=5",
                fotoPost: "https://picsum.photos/200/150?random=6"
            }
        ],
        inputNome: "",
        inputFotoUsuario: "",
        inputFotoPost: ""
    }

    onChangeUsuario = (event)=>{
        this.setState({inputNome: event.target.value})
    }
    onChangeFotoUsuario = (event)=>{
        this.setState({inputFotoUsuario: event.target.value})
    }
    onChangeFotoPost = (event)=>{
        this.setState({inputFotoPost: event.target.value})
    }

    novoPost = () => {
        const post = {
            nomeUsuario: this.state.inputNome,
            fotoUsuario: this.state.inputFotoUsuario,
            fotoPost: this.state.inputFotoPost
        }
        this.setState({ arrayPosts: [post, ...this.state.arrayPosts]})
    }

  render() {
      const listaPosts = this.state.arrayPosts.map((post) => {
          return (
              <Post nomeUsuario={post.nomeUsuario} fotoUsuario={post.fotoUsuario} fotoPost={post.fotoPost}
          />)
      })
    return (
      <MainContainer>
          <NovoPost>
              <label>Nome do Usuário</label>
              <input value={this.state.inputNome} onChange={this.onChangeUsuario} />
              <label>URL Foto de Perfil</label>
              <input value={this.state.inputFotoUsuario} onChange={this.onChangeFotoUsuario} />
              <label>URL Foto do Post</label>
              <input value={this.state.inputFotoPost} onChange={this.onChangeFotoPost} />
              <button onClick={this.novoPost}>Postar</button>
          </NovoPost>
          {listaPosts}
      </MainContainer>
    );
  }
}

export default App;
