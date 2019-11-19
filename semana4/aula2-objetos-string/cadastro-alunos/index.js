function cadastra(){
	let aluno = {
		nome:document.querySelector("input[type='text'").value,
		nascimento:document.querySelector("input[type='date'").value,
		email:document.querySelector("input[type='email'").value
	}
	if (aluno.nascimento !== "") {
		document.querySelector('section').innerHTML += "<div onclick='removeAluno(this)'><p>Nome: "+aluno.nome+"</p><p>Data de Nascimento:"+aluno.nascimento+"</p><p>Email:"+aluno.email+"</p>(clique para remover)</div>"
		document.querySelector("input[type='text'").value = null
		document.querySelector("input[type='date'").value = null
		document.querySelector("input[type='email'").value = null
		alert("Aluno cadastrado com sucesso!")
	} else {
		alert("Data de nascimento é obrigatória!")
	}
}

function removeAluno(x) {
	if (confirm("Remover aluno?")) {
		x.innerHTML = ""
		x.style = "border:none"
	}	
}

function removeTodos() {
	document.querySelector("section").innerHTML = ""
}

