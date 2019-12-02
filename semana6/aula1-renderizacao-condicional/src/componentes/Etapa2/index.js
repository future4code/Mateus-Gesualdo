import React from 'react'
import styled from 'styled-components'

class Etapa2 extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			curso: '' ,
			instituicao: ''
		}
	}

	atualizaCurso = (ev) => {
		this.setState({
			curso: ev.target.value
		})
		
	}

	atualizaInstituicao = (ev) => {
		this.setState({
			instituicao: ev.target.value
		})
		
	}

	render(){
	
		return(
			<div>
				<h2>Dados Acadêmicos</h2>
				<p>Curso:</p>
				<input 
					type="text" 
					value={this.state.curso} 
					onChange={this.atualizaCurso}
				/>  
				<p>Instituição de Ensino:</p>
				<input 
					type="number" 
					value={this.state.instituicao} 
					onChange={this.atualizaInstituicao}
				/>				
			</div>
		);
	}
	
}

export default Etapa2;