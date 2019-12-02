import React from 'react'
import './Post.css'

class Post extends React.Component {
	constructor (props) {
		super(props) 
		this.state = {
			curtido: false ,
			iconeCurtidas: require('./favorite-white.svg') ,
			curtidas: 0 ,
			comentarios: 0 ,
			inputArea: "" ,
		} 
		this.atualizarCurtidas = () => {
			if (this.state.curtido) {
				this.setState({
					curtidas:this.state.curtidas - 1 , 
					iconeCurtidas: require('./favorite-white.svg') ,
					curtido: false 
				})
				
			} else {
				this.setState({
					curtidas:this.state.curtidas + 1 , 
					iconeCurtidas: require('./favorite.svg') ,
					curtido: true 
				})
			}
		}
		this.atualizarComentarios = () => {
			if (this.state.inputArea) {
				this.setState({
					inputArea: ""
				})
			} else {
				this.setState({
					inputArea: 
						<div>
							<input type="text" />
							<button onClick={ this.comentar }>Comentar</button>
						</div>
				})
			}
		}
		this.comentar = () => {
			this.setState({
					comentarios: this.state.comentarios + 1 ,
					inputArea: "" ,
				})
		}
	}

	render() {
		return(
			<div className="PostContainer" onKeyDown={this.atualizaInput}>
				<header className="Post">
					<img className="Post" src={ this.props.fotoAutor } alt="indisponível"/>
					<span className="Post" >{ this.props.nomeAutor }</span>		
				</header>				
				<article><img className="Post" src={ this.props.imagemPost } alt="indisponível"/></article>
				<section className="Post">
					<div>
						<img onClick={ this.atualizarCurtidas } className="Post" src={ this.state.iconeCurtidas } alt="indisponível"/>
						{ this.state.curtidas }
					</div>
					<div>
						{ this.state.comentarios }
						<img onClick={ this.atualizarComentarios } className="Post" src={ require('./comment_icon.svg') } alt="indisponível"/>						
					</div>
				</section>
				{this.state.inputArea}
				
			</div>
		);
	}
	
}

export default Post;