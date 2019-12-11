import React from 'react';
import './App.css';
import Inicio from './Inicio';
import Lista from './Lista';
import axios from 'axios';

const 
  baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api" ,
  headers = { headers: { "api-token": "1234567890987654321"   }  }
  
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {inicio: true, cadastros: []}
  }

  buscarUsuarios = () => {
    axios.get(`${baseUrl}/users/getAllUsers`, headers).then( 
      (response) =>  this.setState({ cadastros: response.data.result })      
    ).catch(
      error => console.log(error)
    )
  }

  componentDidMount(){
    this.buscarUsuarios()
  }

  cadastrar = (novoNome, novoEmail) => {
    const data ={
      name: novoNome ,
      email: novoEmail
    }
    axios.post(`${baseUrl}/users/createUser`, data, headers ).then(
      () => {
        alert("Sucesso!")
        this.buscarUsuarios()
      }
    ).catch(
      error => alert(error)
    )
  }

  apagar = (id) => {
    if (window.confirm("Remover usuário?")) {
      axios.delete(`${baseUrl}/users/deleteUser?id=${id}`, headers ).then(
        () => {
          alert("Usuário removido!")
          this.buscarUsuarios()
        }
      ).catch(
        error => alert(error)
      )
    }
  }

  render(){
    return (
      <div className="App">
        
        { 
          this.state.inicio ? 
            <Inicio cadastrar={this.cadastrar}  /> 
          : 
            <Lista cadastros={this.state.cadastros} apagar={this.apagar} />
        }

        <button onClick={ () => this.setState({inicio: !this.state.inicio}) }>
          { this.state.inicio ? 
            "Usuários Cadastrados" 
            : 
            "Voltar" 
          }
        </button>

      </div>
    );
  }
}

export default App;
