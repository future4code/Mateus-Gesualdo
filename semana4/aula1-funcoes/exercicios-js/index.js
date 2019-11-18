/*	1. O programa em questão converte dólares em reais, solicitando ao usuário a cotação do dólar 
e multiplicando esse valor pela quantidade de dólares dada como argumento da função de conversão.
No exemplo acima, caso a cotação informada seja igual a 4, o programa imprimirá no console a mensagem " R$400 ",
correspondente a 100 dólares. */

// 2. É possível percorrer uma lista por diferentes métodos, como exemplificado a seguir:

// a. Usando o laço while
let primos = [2,3,5,7,11,13,17,19]

i=0;
while (i<primos.length) {
	document.querySelector('header').innerHTML += primos[i] +' '
	i++
}

// b. Usando o laço for
for (let i = 0; i < primos.length; i++) {
	document.querySelector('section').innerHTML += primos[i] +' '
}

// b. Usando o laço for/of
for (let item of primos) {
	document.querySelector('footer').innerHTML += item +' '
}

/*	3a.	false
	b.	false
	c.	true
	d.	true
	e.	true */

// 4.

function cumprimenta() {
	alert("Hello Future4")
}

cumprimenta()

// 5.

function vices(array) {
	let auxiliar
	for (let n = 0; n < array.length-1; n++) {              
		for (let i = 0; i < array.length-1; i++) {  //troca dois elementos de posição sempre que o primeiro for maior que o próximo
			if (array[i]>array[i+1]) {              //ao percorrer todos os elementos uma vez, o último será o maior     
				auxiliar = array[i+1]               //o processo é repetido até que todos os elementos estejam em ordem           
				array[i+1] = array[i]
				array[i] = auxiliar
			}
		}
	}
	alert("Segundo maior: "+array[array.length-2]+" , Segundo menor: " + array[1])		
}

vices([2,7,4,6,9,3,5])
