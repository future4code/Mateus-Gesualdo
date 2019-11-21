let postagens = []

class post {
	constructor (data,titulo,autor,conteudo) {
		this.data = data
		this.titulo = titulo
		this.autor = autor
		this.conteudo = conteudo
	}
}

document.querySelector('button').onclick = function () {
	data = document.getElementById('data')
	titulo = document.getElementById('titulo')
	autor = document.getElementById('autor')
	conteudo = document.querySelector('textarea')
	novoPost = new post (data.value, titulo.value, autor.value, conteudo.value)
	postagens.push(novoPost)
	console.log(postagens)
	data.value = null
	titulo.value = null
	autor.value = null
	conteudo.value = null
}


	
