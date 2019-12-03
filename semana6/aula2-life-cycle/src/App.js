import React from 'react';

let localData = JSON.parse(localStorage.getItem("savedTasks")) 

class App extends React.Component {
  
  constructor (props) {
    super(props)
    this.state = {
      newTask:'' ,
      savedTasks: [] ,
      selectedOption:'' ,
    }
  }
  
  componentDidMount(){
    this.setState({
      savedTasks: localData ? localData : []
    })
  }

  updateNewTask = ev => {
    this.setState({
      newTask: ev.target.value
    })
  }

  saveTask = (copy) => {
    copy = [
      ...this.state.savedTasks , 
      { id: Date.now() , texto: <li key={Date.now()}>{this.state.newTask}</li> , completa:false }
      
    ]
    this.setState({
      savedTasks: copy ,
    })
  }

  componentDidUpdate(){
    localStorage.setItem('savedTasks' , JSON.stringify(this.state.savedTasks))
  }

  updateSelectedOption = (ev) => {
    this.setState({
      selectedOption: ev.target.value
    })
  }

  alternar = (ev) => {
    ev.target.completa = !ev.target.completa
    console.log(ev.target.completa)
  }

  render(){
   
    return (
      <div className="App">
        <h1>Lista de Tarefas</h1>
        <input type='text' value={this.state.newTask} onChange={this.updateNewTask} />
        <button onClick={this.saveTask}>Salvar</button>
        {"Exibir: "}
        <select value={this.state.selectedOption} onChange={this.updateSelectedOption}>
          <option>Todas</option>
          <option>Incompletas</option>
          <option>Completas</option>
        </select>
        <ul onClick={this.alternar}>{this.state.savedTasks.map((item)=> item.texto)}</ul>
      </div>
    );
  }
  
}

export default App;
