/* 

  EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

  1. O código soma on números naturais menores que 11 e o resultado impresso será 55.
  
  2a. O comando .push inclui um elemento no final de um array.
  
  b. 10,15,20,25,30.
  
  c. Se a variável numero tivesse o valor de 3 a impressão seria: 12,15,18,27,30. Se tivesse o valor de 4, seria: 12,20

  3. O resultado impresso no console seria: 0
                                            00
                                            000
                                            0000
     
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 4a.

const conjunto = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

let maior = conjunto[0] , menor = conjunto[0]

for (const item of conjunto) { if (item > maior) { maior = item }
                               if (item < menor) { menor = item } }

console.log('4a.O maior número do conjunto é ',maior,' e o menor é ',menor)

// b.

let conjunto2 = []

for (const item of conjunto) { conjunto2.push(item / 10) }

console.log('b. ',conjunto2)

// c.

let conjunto3 = []

for (const item of conjunto) { if (item%2 === 1) { conjunto3.push(item) } }

console.log('c. ',conjunto3)

// d.

let conjunto4 = []

for (let i=0 ; i < conjunto.length ; i++) { conjunto4.push( 'O elemento do index ' + i + ' é ' + conjunto[i] ) }

console.log('d. ',conjunto4)

// 5

let alvo = Number(prompt('Escolha um número, Jogador1 (não deixe que o Jogador2 veja):'))

console.log ('');console.log ('5.');console.log ('Vamos jogar!')

let chute = Number(prompt('Qual é o número, Jogador2 ?')) , tentativas = 1

console.log('O número chutado foi: ' + chute)

while (chute !== alvo) { tentativas ++
                         let diferente
                         if (chute-alvo > 0) { diferente = 'menor' } 
                         else { diferente = 'maior'}
                         console.log('Errrrrrrrrrou, é '+ diferente)
                         chute = Number(prompt('Errou, é '+diferente+'. Qual é o número, Jogador2 ?'))
                         console.log('O número chutado foi: ' + chute) }

console.log('Acertou!!!!!!!!!!')

console.log('Número de tentativas: ' + tentativas)

// 6

alvo = 1+Math.floor(100*Math.random())

console.log ('');console.log ('6.');console.log ('Vamos jogar!')

chute = Number(prompt('Minha vez de jogar. Em qual número estou pensando? (1 a 100)')) 
tentativas = 1

console.log('O número chutado foi: ' + chute)

while (chute !== alvo) { tentativas ++
                         let diferente
                         if (chute-alvo > 0) { diferente = 'menor' } 
                         else { diferente = 'maior'}
                         console.log('Errrrrrrrrrou, é '+ diferente)
                         chute = Number(prompt('Errou, é '+diferente+'. Em qual número estou pensando?'))
                         console.log('O número chutado foi: ' + chute) }

console.log('Acertou!!!!!!!!!!')

console.log('Número de tentativas: ' + tentativas)

/*    Achei bem tranquilo adaptar o código, pois já sabia como sortear um número 
e precisei apenas relembrar. 
Poderia ter inicialmente declarado a variável alvo usando o declarador const,
mas isso também foi simples de resolver =)          */