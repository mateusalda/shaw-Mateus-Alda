import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50?random=1'}
          fotoPost={'https://picsum.photos/200/150?random=2'}
        />
        <Post
          nomeUsuario={'marcoaurelio'}
          fotoUsuario={'https://picsum.photos/50/50?random=3'}
          fotoPost={'https://picsum.photos/200/150?random=4'}
        />
        <Post
          nomeUsuario={'tubaina'}
          fotoUsuario={'https://picsum.photos/50/50?random=5'}
          fotoPost={'https://picsum.photos/200/150?random=6'}
        />
      </MainContainer>
    );
  }
}

export default App;
