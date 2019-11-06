import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

let carta1 , carta2 , carta3 , carta4 , ptsJog , ptsDlr 

console.log('---nossoJogo---' )
console.log('Bem vindo ao jogo de Blackjack!' )
console.log('')

while (confirm("Quer iniciar uma nova rodada?")) { 

	carta1 = comprarCarta() ,
	carta2 = comprarCarta() ,
	carta3 = comprarCarta() ,
	carta4 = comprarCarta() ,
  
  ptsJog = carta1.valor + carta2.valor
	ptsDlr = carta3.valor + carta4.valor

	console.log('Você: '   + carta1.texto + ' ' + carta2.texto + ' -> ' + ptsJog )
	console.log('Dealer: ' + carta3.texto + ' ' + carta4.texto + ' -> ' + ptsDlr )

	if 	  	(ptsJog === ptsDlr)	{ console.log('Empate!') 	    	}
	else if (ptsJog  >  ptsDlr)	{ console.log('Você venceu!') 	}
	else 					            	{ console.log('Dealer venceu!')	}

  console.log('')

}

console.log("O jogo acabou")
console.log('')
