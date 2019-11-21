class post {
	constructor (data,titulo,autor,conteudo) {
		this.data = data
		this.titulo = titulo
		this.autor = autor
		this.conteudo = conteudo
	}
}

document.querySelector('button').onclick = function () {
	data = document.getElementById('data').value
	titulo = document.getElementById('titulo').value
	autor = document.getElementById('autor').value
	conteudo = document.querySelector('textarea').value
	novoPost = new post (data,titulo,autor,conteudo)
}