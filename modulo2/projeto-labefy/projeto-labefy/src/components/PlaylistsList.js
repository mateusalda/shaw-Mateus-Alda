import React from "react";
import axios from 'axios'

export default class PlaylistsList extends React.Component {
    state = {
        playlistName: '',
        plList: []
    }
    componentDidMount = () => {
        this.getAllPlaylists()
    }

    updatePlaylistName = (event) => {
        this.setState({playlistName: event.target.value})
    }

    getAllPlaylists = () => {
        axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', this.props.header)
        .then((res) => {
            this.setState({plList: res.data.result.list})
        })
        .catch((err) => {
            alert(err.message)
        })
    }
    createPlaylist = () => {
        const body = {
            "name": this.state.playlistName 
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, this.props.header)
        .then(() => {
            alert('Playlist criada com sucesso!')
            this.getAllPlaylists()
            this.setState({playlistName: ''})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        return <div>
            <input value={this.state.playlistName} onChange={this.updatePlaylistName} placeholder='Nova Playlisty' />
            <button onClick={this.createPlaylist}>Criar</button>
            {this.state.plList.map((pl) => 
            <button key={pl.id} onClick={() => this.props.goToPlaylist(pl.id, pl.name)}>{pl.name}</button> )}
        </div>
    }
}