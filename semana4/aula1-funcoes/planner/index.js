function adicionaTarefa() {
	let tarefa = document.querySelector('input')
	let dia = document.querySelector('select').value	
	if (tarefa.value !== "") {
		document.getElementById(dia).innerHTML += "<p>" + tarefa.value + "</p>"
	tarefa.value = ""
	} else {
		alert("Escreva uma descrição para a tarefa!")
	}	
}