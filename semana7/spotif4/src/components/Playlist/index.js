import React from 'react';
import axios from 'axios'

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api" ,
  headers = {
    headers: {
      "auth": "spotif4-mateus-gesualdo" ,
      "Content-Type": "application/json"
    }
  }

export default class Playlist extends React.Component {
  
    constructor(props){
      super(props)
      this.state = {
        songs: [] ,
        showingForm: false ,
        showingDetails: false ,
        newName: '' ,
        newArtist: '' ,
        newUrl: '' 
      }
    }  

    render(){
        return(
            <div>
                <section>
                    <button onClick={() => {this.setState({showingDetails: true});this.fetchSongs()}} >
                        {this.state.showingDetails ? "v" : ">"}
                    </button>
                    {this.props.name}
                    <button                         
                        onClick={this.deletePlaylist}
                    >
                        x
                    </button>
                    
                    
                </section>
                {
                    this.state.showingDetails &&
                        <div>
                            {this.state.songs.map( music => 
                                <div key={music.id}>
                                    <p>{music.name}</p>
                                    <audio src={music.url} controls></audio>
                                </div>
                            )}   
                            <button onClick={() => this.setState({showingDetails: false})}>Hide Songs</button>             
                            <button onClick={() => this.setState({showingForm: true})}>Add Song</button>
                            {
                                this.state.showingForm &&
                                    <div>
                                        <p>
                                            {"Nome: "}
                                            <input 
                                                value={this.state.newName} 
                                                onChange ={
                                                    ev => this.setState({ newName: ev.target.value})
                                                } 
                                            />
                                        </p>
                                        <p>
                                            {"Artista: "}
                                            <input 
                                                value={this.state.newArtist} 
                                                onChange ={
                                                    ev => this.setState({ newArtist: ev.target.value})
                                                } 
                                            />
                                        </p>
                                        <p>
                                            {"Link: "}
                                            <input 
                                                value={this.state.newUrl} 
                                                onChange ={
                                                    ev => this.setState({ newUrl: ev.target.value})
                                                } 
                                            />
                                        </p>
                                        <button onClick={this.addSong} >Save</button>
                                    </div>
                            }
                    </div>
                }
            </div>
        )
    }

    deletePlaylist = () => {
        axios.delete(
            `${baseUrl}/playlists/deletePlaylist?playlistId=${this.props.id}` ,
            headers
        ).then( 
            res => {
                if (res) {
                    this.props.fetchPlaylists()
                }
            }
        ).catch(
            err => alert(err)
        )

    }

    handleDetailsChange = () => {
        if (this.state.open) {
            this.setState({
                open:false
            })
        } else {            
            this.setState({
                open:true
            })
        }
    }

    componentDidUpdate(){
        this.fetchSongs()
    }

    fetchSongs = () => {
        axios.get(
            `${baseUrl}/playlists/getPlaylistMusics/${this.props.id}`,
            headers           
        ).then(
            res => {
                this.setState({
                    songs: res.data.result.musics
                })
            }             
        ).catch(
            err => alert(err)
        )
    }

    addSong = ( ) => {
        axios.put(
            `${baseUrl}/playlists/addMusicToPlaylist`,
            {
                "playlistId": this.props.id, 
                "music": { 
                    "name": this.state.newName, 
                    "artist": this.state.newArtist,
                    "url": this.state.newUrl
                }
            } ,
            headers
        ).then(
            res => console.log(res)
        ).catch(
            err => alert(err)
        )
        this.setState({
            showingForm: false ,
            newName: '' ,
            newArtist: '' ,
            newUrl: ''
        })
    }

}