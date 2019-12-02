import React from 'react'

class Etapa1 extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			nome:'' ,
			idade:0 ,
			email: '',
			escolaridade:''
		}
	}

	atualizaNome = (ev) => {
		this.setState({
			nome: ev.target.value
		})
		
	}

	atualizaIdade = (ev) => {
		this.setState({
			idade: ev.target.value
		})
		
	}

	atualizaEmail = (ev) => {
		this.setState({
			email: ev.target.value
		})
		
	}

	atualizaEscolaridade = (ev) => {
		this.setState({
			escolaridade: ev.target.value
		})
		
	}

	render(){
	
		return(
			<div>
				<h2>Dados Gerais</h2>
				<p>Nome:</p>
				<input 
					type="text" 
					value={this.state.name} 
					onChange={this.atualizaNome}
				/>  
				<p>Idade:</p>
				<input 
					type="number" 
					value={this.state.name} 
					onChange={this.atualizaIdade}
				/>  
				<p>Email:</p>
				<input 
					type="email" 
					value={this.state.email} 
					onChange={this.atualizaEmail}
				/>  
				<p>Grau de escolaridade:</p>
				<select 
					value={this.state.escolaridade} 
					onChange={this.atualizaEscolaridade}
				>
					<option>Ensino Médio Incompleto</option>
					<option>Ensino Médio Completo</option>  
					<option>Ensino Superior Incompleto</option>
					<option>Ensino Superior Completo</option>
				</select>
			</div>
		);
	}
	
}

export default Etapa1;