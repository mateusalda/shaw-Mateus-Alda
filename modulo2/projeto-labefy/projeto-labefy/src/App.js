import React from 'react'
import style, {createGlobalStyle} from 'styled-components'
import Playlist from './components/Playlist';
import PlaylistsList from './components/PlaylistsList';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`

export default class App extends React.Component {
    state = {
        header: {headers: {Authorization: 'mateus-alda-shaw'}},
        currentScreen: '',
        playlistID: '',
        playlistName: ''
    }

    goToPlaylist = (id, name) => {
        this.setState({currentScreen: 'playlist',
        playlistID: id,
        playlistName: name
    })
    }

    changeScreen = () => {
        switch (this.state.currentScreen) {
            case 'list':
                return <PlaylistsList header={this.state.header} goToPlaylist={this.goToPlaylist}/>
            case 'playlist':
                return <Playlist header={this.state.header} id={this.state.playlistID} name={this.state.playlistName} />
            default:
                return <PlaylistsList header={this.state.header} goToPlaylist={this.goToPlaylist}/>
        }
    }

    render() {
        return (
            <div>
                {this.changeScreen()}
            </div>
        );
    }
}
