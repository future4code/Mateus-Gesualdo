/*

1. O programa cria, a partir de um dado array, dois outros: um com os elementos pares do original e outro com os ímpares.
O console imprimirá as seguintes mensagens:
	"Quantidade total de números 14"
	"6"
	"8"


2. O programa percorre os elementos de um dado array, armazenando o maior e o menor valor dentre eles.
O console imprimirá as seguintes mensagens:
	"-10"
	"1590"

	
3.										   */ 

let quantidadeDeNumerosPares = 6          // Atribuí um valor inicial para testar o código 
let i = 0							     // e troquei o declarador para que o valor possa ser alterado
while(i < quantidadeDeNumerosPares) {   // Retirei o sinal de igual, que faria o laço ser executado uma vez a mais que o pedido
  console.log(i*2)
  i++                                 // Sem incrementar o valor de i, o código entraria num loop infinito
}


//	4a.

function classificaTriangulo(lado1, lado2, lado3) {
	if (lado1 === lado2 && lado1 === lado3) {
		return "Equilátero"
	} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
		return "Isóceles"
	} else {
		return "Escaleno"
	}	
}


//	b.

class triangulo {	
	constructor (a, b, c) {
		this.lados = [a, b, c]
		this.classifica = function () {
			if (a === b && a === c) {
				return "Equilátero"
			} else if (a === b || a === c || b === c) {
				return "Isóceles"
			} else {
				return "Escaleno"
			}	
		}
	}
}


//	5.

class parDeNumeros {
	constructor (a, b) {
		if (a > b) {
			this.maior = a
			this.menor = b
		} else {
			this.maior = b
			this.menor = a
		}	
	}

	saoDivisiveis () {
		return (this.maior % this.menor === 0) 			
	}
}

novoPar = new parDeNumeros (5,3)

console.log( "O maior é", novoPar.maior )

if (novoPar.saoDivisiveis()) {
	console.log(novoPar.maior + ' é divisível por ' + novoPar.menor)
} else {
	console.log(novoPar.maior + ' não é divisível por ' + novoPar.menor)
}

console.log("A diferença entre eles é", novoPar.maior - novoPar.menor)











