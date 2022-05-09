import axios from "axios";
import React from "react";


export default class Playlist extends React.Component {
    state = {
        trackName: '',
        trackArtist: '',
        trackURL: '',
        trackList: []
    }
    componentDidMount = () => {
        this.getPlaylistTracks()
    }

    updateTrackName = (event) => {
        this.setState({trackName: event.target.value})
    }
    updateTrackArtist = (event) => {
        this.setState({trackArtist: event.target.value})
    }
    updateTrackURL = (event) => {
        this.setState({trackURL: event.target.value})
    }

    addTrackToPlaylist = () => {
        const body = {
            "name": this.state.trackName, 
            "artist": this.state.trackArtist,
            "url": this.state.trackURL
        }
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, body, this.props.header)
        .then(() => {
            alert('Música adicionada à playlist')
            this.setState({
                trackName: '',
                trackArtist: '',
                trackURL: ''
            })
            this.getPlaylistTracks()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    getPlaylistTracks = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks`, this.props.header)
        .then((res) => {
            this.setState({trackList: res.data.result.tracks})
        })
        .catch((err) => {
            console.log(err.response.data.message);
        })
    }

    removeTrackFromPlaylist = (id) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.id}/tracks/${id}`, this.props.header)
        .then(() => {
            alert('Música removida da playlist')
            this.getPlaylistTracks()
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render() {
        return <div>
            <h3>{this.props.name}</h3>
            <input value={this.state.trackName} onChange={this.updateTrackName} placeholder='Música' />
            <input value={this.state.trackArtist} onChange={this.updateTrackArtist} placeholder='Artista' />
            <input value={this.state.trackURL} onChange={this.updateTrackURL} placeholder='URL' />
            <button onClick={this.addTrackToPlaylist}>Add Música</button>
            {this.state.trackList.map((track) => 
                <div key={track.id}>
                    <p>{track.name}</p>
                    <p>{track.artist}</p>
                    <p>{track.url}</p>
                    <button onClick={() => this.removeTrackFromPlaylist(track.id)} >delete</button>
                </div>
            )}
        </div>
    }
}