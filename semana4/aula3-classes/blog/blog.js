let postagens = [], data, titulo, autor, conteudo, imagem, novoPost

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
	document.querySelector('section').innerHTML += 
		'<article style="background-image: url(\''+
		novoPost.imagem+
		'\')"><h2>'+
		novoPost.titulo+
		'</h2><p>'+
		novoPost.conteudo+
		'</p><p><em>Autor:</em> '+
		novoPost.autor+
		'</p><p><em>Publicado em:</em> '+
		novoPost.data+
		'</p></article>'
	}


	
