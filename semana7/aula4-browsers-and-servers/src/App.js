import React from 'react';
import './App.css';
import axios from 'axios'

export default class App extends React.Component {
    constructor (props) {
        super(props)
        this.state = { app: '' }
    }

    chooseApp = (ev) => {
        this.setState({
            app: ev.target.value
        })
    }

    render () {        
        return(
            <div className="App">
                <select onChange={this.chooseApp}>
                    <option>Choose an App</option>
                    <option>Bored App</option>
                    <option>The Star Wars App</option>
                </select>
                <div>
                    {this.state.app === "Bored App" && <BoredApp/>}
                    {this.state.app === "The Star Wars App" && <StarWarsApp/>} 
                </div>
                
            </div>
        )
    }
}

class BoredApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = { activity:'' , type: '', participants: 1 }
    }

    chooseType = ev => {
        this.setState({
            type: ev.target.value
        })
    }
    
    search = async(response) => {
        try {
            response = await axios.get(
                `http://www.boredapi.com/api/activity?type=${this.state.type}&participants=${this.state.participants}`
            )
            console.log(response)
            this.setState({activity: response.data.activity || "No activities found"})
        } catch (err) {
            alert(err)
        }
    }

    render () {
        return(
            <div>
                <hr/>
                <h2>Let's kill boredom!</h2>
                Activity type:
                <select value={this.state.type} onChange={this.chooseType}>
                    <option value={''}>Random</option>
                    <option value={"education"}>Education</option>
                    <option value={"recreational"}>Recreational</option>
                    <option value={"social"}>Social</option>
                    <option value={"diy"}>DIY</option>
                    <option value={"charity"}>Charity</option>
                    <option value={"cooking"}>Cooking</option>
                    <option value={"relaxation"}>Relaxation</option>
                    <option value={"music"}>Musical</option>
                    <option value={"busywork"}>Busywork</option>
                </select>
                <br/>
                Number of participants:
                <input type="number" value={this.state.participants} onChange={
                    (ev) => this.setState({participants: ev.target.value})
                }/>
                <br/>
                <button onClick={this.search}>Search</button>
                <hr/>
                <h3>{this.state.activity}</h3>
            </div>
        )
    }
}

class StarWarsApp extends React.Component {
    constructor (props) {
        super(props)
        this.state = { character: '' , randomIndex: Math.floor(Math.random()*87), answer:''}
    }

    fetchCharacter = () => {
      axios.get(
        `https://swapi.co/api/people/${this.state.randomIndex}`
      ).then(
        res => {
          this.setState({character: res.data})
          console.log(res.data.name)
        }
      ).catch(
        err => alert(err)
      )
    }

    componentDidMount () {
      this.fetchCharacter()      
    }
    
    checkAnswer = () => {
      if (this.state.answer === this.state.character.name) {
        alert("Correct!")
      } else {
        alert("Try again...")
      }
      this.setState({randomIndex: Math.floor(Math.random()*87) , answer:''})
      this.fetchCharacter()
    }
    
    render () {
      return(
            <div>

              {
                this.state.character && 
                  <div>
                    <p>I'm a {this.state.character.gender}</p>
                    <p>My skin is {this.state.character.skin_color}</p>
                    <p>My eyes are {this.state.character.eye_color}</p>
                  </div>
              }

              <h2>Who am I?</h2>
              <input value={this.state.answer} onChange={
                (ev) => this.setState({answer: ev.target.value})
              } />
              <button onClick={this.checkAnswer}>Check</button>

            </div>
        )
    }
}
    
    