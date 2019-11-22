let postagens = [], data, titulo, autor, conteudo, imagem, novoPost

postagens.push(JSON.parse(localStorage.getItem("postagens")))

	

class post {
	constructor (data,titulo,autor,conteudo, imagem) {
		this.data = data
		this.titulo = titulo
		this.autor = autor
		this.conteudo = conteudo
		this.imagem = imagem
	}
}

document.querySelector('button').onclick = function () {
	data = document.getElementById('data')
	titulo = document.getElementById('titulo')
	autor = document.getElementById('autor')
	conteudo = document.querySelector('textarea')
	imagem = document.getElementById('imagem')
	novoPost = new post (data.value, titulo.value, autor.value, conteudo.value, imagem.value)
	postagens.push(novoPost)
	console.log(postagens)
	data.value = null
	titulo.value = null
	autor.value = null
	conteudo.value = null
	localStorage.setItem("postagens", JSON.stringify(postagens))	
}


function exibe () {
 	for (let postagem of postagens){
	 	document.querySelector('section').innerHTML += 
			'<article style="background-image: url(\''+
			postagem.imagem+
			'\')"><h2>'+
			postagem.titulo+
			'</h2><p>'+
			postagem.conteudo+
			'</p><p><em>Autor:</em> '+
			postagem.autor+
			'</p><p><em>Publicado em:</em> '+
			postagem.data+
			'</p></article>'
	}
}		