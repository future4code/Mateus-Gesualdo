import React from 'react';
import Etapa1 from './componentes/Etapa1/index'
import Etapa2 from './componentes/Etapa2/index'
import Etapa3 from './componentes/Etapa3/index'
import Etapa4 from './componentes/Etapa4/index'
import './App.css'

let i=0 , 
	etapa =[
		<Etapa1/>,
		<Etapa2/>,
		<Etapa3/>,
		<Etapa4/>,
		
	]

class App extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			exibindo: etapa[i]
		}
	}
	
	avancar =() => {
		i++

		this.setState({
			exibindo: etapa [i]
		})
		
	}

	render () {
		
		return (
  			<div className="App">
  				{i<4 && this.state.exibindo}
  				<button onClick={this.avancar}>próxima</button>
  			</div>
  		);
  	}
}

export default App;

 