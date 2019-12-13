import React from 'react';
import axios from 'axios'
import Playlist from './components/Playlist'
import './App.css';
import logo from './logo.png'

const baseUrl = "https://us-central1-spotif4.cloudfunctions.net/api" ,
  headers = {
    headers: {
      "auth": "spotif4-mateus-gesualdo" ,
      "Content-Type": "application/json"
    }
  }

export default class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = {
      list: [] ,
      showingList: false ,
      showingForm: false ,
      listButtonText: "See My Playlists" ,
      formButtonText:"New Playlist" ,
      newName: ''
    }
  }  

  render() {
    return (
      <div className="App">
        <img src={logo}/>
        Hello, Mateus
        <div>          
          <button onClick={this.handleListButtonClick} >
            {this.state.listButtonText}
          </button>          
          {
            this.state.showingList &&
              this.state.list.map( playlist => 
                <Playlist 
                  key={playlist.id}
                  id={playlist.id}
                  name={playlist.name}
                  fetchPlaylists={this.fetchPlaylists}
                />
              )
          }
        </div>        
        <div>
          {
            this.state.showingForm &&
              <input 
                value={this.state.newName} 
                onChange={this.handleFormChange}
              />
          }
          <button onClick={this.handleFormButtonClick}>
            {this.state.formButtonText}
          </button>          
        </div>
        <button>Logout</button>
        
      </div>
    );
  }

  componentDidMount () {
    this.fetchPlaylists()
  }

  fetchPlaylists = () => {
    axios.get(
      `${baseUrl}/playlists/getAllPlaylists` ,
      headers
    ).then(
      res => {
        this.setState({
          list: res.data.result.list
        })
      }
    ).catch(
      err => alert(err)
    )
  }

  handleFormButtonClick = () => {
    if (this.state.showingForm) {
      this.createPlaylist()
      this.setState({
        showingForm: false,
        formButtonText: "New Playlist"
      })
    } else {
      this.setState({
        showingForm: true,
        formButtonText: "Create"
      })
    }
  }
  
  handleFormChange = (ev) => {
    this.setState({
      newName: ev.target.value
    })
  }

  createPlaylist = () => {
    axios.post(
      `${baseUrl}/playlists/createPlaylist`,
      {name: this.state.newName} ,
      headers
    ).then(
      res => {
        if (res) {
          alert("Playlist Created!")
          this.fetchPlaylists()
        }
      }
    ).catch(
      err => alert(err)
    )
  }

  handleListButtonClick = () => {
    if (this.state.showingList) {
      this.setState({
        showingList: false,
        listButtonText: "See My Playlists"
      })
    } else {
      this.setState({
        showingList: true,
        listButtonText: "Hide Playlists"
      })
    }
  }

}


