import React from 'react'
import styled from 'styled-components'
import Post from '../Post/Post.js'

const MyFieldset = styled.fieldset`
			display:flex
			flex-direction:column
			width: 170px
			margin:auto
		`

class PostForm extends React.Component {
	constructor (props) {
		super(props) 
		this.state = {
			feed: [] ,
			fotoDoAutor: "" ,
			nomeDoAutor: "" ,
			imagemDoPost: ""
		} ;
		
	};

	atualizarNomeAutor = ev => {
		this.setState({
			nomeDoAutor: ev.target.value
		});
	};

	atualizarFotoDoAutor = ev => {
		this.setState({
			fotoDoAutor: ev.target.value
		});
	};

	atualizarImagemDoPost = ev => {
		this.setState({
			imagemDoPost: ev.target.value
		});
	};

	postar = () => {
		
		const feedCopy = [
			...this.state.feed, 
			<Post fotoAutor = {this.state.fotoDoAutor} nomeAutor={ this.state.nomeDoAutor } imagemPost={ this.state.imagemDoPost } /> 
		]
		this.setState({
			feed: feedCopy
		});
		console.log(this.state)
	};

	render() {
		
		return(
			<div>
				<MyFieldset>
					<legend>Novo Post</legend>
					<input 
						type="text" 
						placeholder="Autor" 
						value={ this.state.nomeDoAutor }
						onChange={ this.atualizarNomeAutor } 
					/>
					<input 
						type="url" 
						placeholder='Caminho da foto de perfil' 
						value={ this.state.fotoDoAutor }
						onChange={ this.atualizarFotoDoAutor } 
					/>
					<input 
						type="url" 
						placeholder='Caminho da imagem' 
						value={ this.state.imagemDoPost }
						onChange={ this.atualizarImagemDoPost } 
					/>
					<button onClick={ this.postar }>Postar</button>
						
				</MyFieldset>
				<div>{this.state.feed}</div>
			</div>
		);
	};
	
}

export default PostForm;