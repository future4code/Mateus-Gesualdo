import React from 'react';
import styled from 'styled-components'
import './App.css'

const   Li = styled.li`
      text-decoration:${(props)=>props.decoration}
    `

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state ={
      tarefas: JSON.parse(localStorage.getItem("tarefas")) || [] ,
      nova: '' ,
      filtro: 'Todas'
    }
  }

  atualizaNova = ev => {
    this.setState( {nova: ev.target.value} )
  }

  atualizaFiltro = ev => {
    this.setState( {filtro: ev.target.value} )
  }

  salvar = (copia) => {
    copia = [
      ...this.state.tarefas , 
      {id: this.state.tarefas.length, texto:this.state.nova , completa: false}

    ]
    this.setState( { tarefas: copia , nova:'' } )
    localStorage.setItem("tarefas" , JSON.stringify(copia))
  }

  alternar = ev => {
    const copia = this.state.tarefas.map( (tarefa)=> {
      if ( Number(ev.target.id) === Number(tarefa.id) ) {
        tarefa.completa = !tarefa.completa
      }
      return tarefa
    })
    this.setState({tarefas:copia})  
    localStorage.setItem("tarefas" , JSON.stringify(copia)) 
  }

  render() {
    return(
      <div className="App">
        <h1>Lista de Tarefas</h1>
        <input 
          placeholder="Nova Tarefa" 
          value={this.state.nova}
          onChange={this.atualizaNova}
        />
        <button onClick={this.salvar}>Salvar</button><br/>
        {"Exibindo: "} 
        <select value={this.state.filtro} onChange={this.atualizaFiltro}>
          <option>Todas</option>
          <option>Incompletas</option>
          <option>Completas</option>
        </select>
        <ul onClick={this.alternar}>
          {this.state.tarefas.filter( (tarefa) =>  
            (this.state.filtro === "Todas") || 
            (tarefa.completa && this.state.filtro === "Completas") ||
            (!tarefa.completa && this.state.filtro === "Incompletas")
          ).map(  (tarefa) => 
            <Li key={tarefa.id} id={tarefa.id} decoration={tarefa.completa ? "line-through" : "none"}>
              {tarefa.texto}
            </Li>
          )}
        </ul>
      </div>
    )
  }
}



 