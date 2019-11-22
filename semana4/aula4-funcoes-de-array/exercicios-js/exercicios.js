//	1a.

function filtraAdultos (arr) {
	return arr.filter( (pessoa) => {return pessoa.idade >= 20 } )
}


//	b.

function filtraSub20 (arr) {
	return arr.filter( (pessoa) => {return pessoa.idade < 20 } )
}


//	2a.

function dobraArray (arr) {
	return arr.map( (numero) => numero *= 2 )
}


//	b.

function triplicaArray (arr) {
	return arr.map( (numero) => (numero *= 3).toString() )
}


//	c.

function indicaParidade (arr) {
	return arr.map( (numero) => {
		if (numero % 2 ===0) {
			return numero.toString() + " é par"
		} else {
			return numero.toString() + " é ímpar"
		}
	})
}


//	3a.  

function filtraPessoas (arr) {
	return arr.filter( (pessoa) => pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5 )
}


//	b.

function filtraPessoas (arr) {
	return arr.filter( (pessoa) => !(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5) )
}


//	4.

function geraEmails (arr) {
	 
	return arr.map( (pessoa) => {

		let pronome, artigo, msg
		
		if (pessoa.genero === "masculino") {
			pronome = "Sr."
			artigo = "o"
		} else {
			pronome = "Sra."
			artigo = "a"
		}

		if (pessoa.cancelada) {
			msg = 
				" Olá, " + pronome + pessoa.nome + 
				". Infelizmente, sua consulta marcada para o dia "+ 
				pessoa.dataDaConsulta + 
				"foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la "
		} else {
			msg = "Olá, "+ pronome + pessoa.nome + 
				". Estamos enviando esta mensagem para lembrá-l" + artigo + 
				" da sua consulta no dia "+ pessoa.dataDaConsulta +
				". Por favor, acuse o recebimento deste e-mail."
		}

		return msg				
		
	} )
}


//	5.

function atualizaContas (arr) {
	arr.forEach( (conta) => {
		totalCompras = 0
		for ( let i = 0; i < conta.compras.length ;i++ ) { totalCompras += conta.compras[i] }
		conta.saldoTotal -= totalCompras
	} )
	return arr
}