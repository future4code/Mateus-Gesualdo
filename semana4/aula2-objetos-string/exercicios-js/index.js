/*

1. O trecho de código em questão retorna o resultado de um investimento após receber o montante investido e a modalidade escolhida.
Na primeira linha do console, será impressa a mensagem "165", retorno correspondente ao investimento de '150' em 'Ações'.
Na segunda linha, será impressa a mensagem 'undefined', junto com o alerta 'TIPO DE INVESTIMENTO INFORMADO INCORRETO!', 
emitido pelo navegador, pois a função programada não reconhece a modalidade de investimento 'tesouro direto'.


2. Arrays e objetos são estruturas do JS que devem ser utilizadas quando queremos agrupar um conjunto de variáveis. 
Quando, por exemplo, desejamos processar uma lista das notas de uma turma, podemos declará-las como elementos de um array. 
Já as informações pessoais de um aluno são melhor agrupadas em um objeto, uma vez que podem incluir texto, datas, números e valores lógicos.


3.									*/

function criaRetangulo(a,b){	
	let retangulo ={			
		largura:a,
		altura:b,
		perímetro:2*(a+b),
		area:a*b
	}	
	return retangulo
}


//	4.

let pessoa = {
	nome:"Mateus" ,
	idade: 29,
	email: "meu@email",
	endereco: "BH, MG, Brasil"
}

function anonimizarPessoa(obj){
	let anonimo = {
		...obj,
		nome:"ANÔNIMO"
	}
	return anonimo
}


//	5.

let filme = {
	titulo: "O Senhor dos Anéis - A Sociedade do Anel",
	ano: 2001,
	diretor: "Peter Jackson",
	elenco: ["Elijah Wood"," Ian McKellen"," Sean Astin"," Orlando Bloom"]
}

console.log("Venha assistir ao filme "+filme.titulo+", de "+filme.ano+", dirigido por "+filme.diretor+" e estrelado por "+filme.elenco)
