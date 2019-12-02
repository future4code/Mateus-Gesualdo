import React from 'react'
import styled from 'styled-components'

class Etapa3 extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			motivo:'',
			complementar:''
		}
	}

	atualizaMotivo = (ev) => {
		this.setState({
			motivo:ev.target.value
		})
		
	}

	atualizaComplementar = (ev) => {
		this.setState({
			complementar:ev.target.value
		})
		
	}

	render(){
	
		return(
			<div>
				<h2>Dados Acadêmicos</h2>
				<p>Por que você não começou um curso de graduação?</p>
				<input 
					type="text" 
					value={this.state.motivo} 
					onChange={this.atualizaMotivo}
				/>  
				<p>Você fez algum curso complementar?</p>
				<select 
					value={this.state.complementar} 
					onChange={this.atualizaComplementar}
				>
					<option>Não</option>
					<option>Curso Técnico</option>  
					<option>Curso de Inglês</option>
				</select>
			</div>
		);
	}
	
}

export default Etapa3;