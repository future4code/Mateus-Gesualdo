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

console.log('---desafio---' )
console.log('Bem vindo ao jogo de Blackjack!' )
console.log('')

while (confirm("Quer iniciar uma nova rodada?")) {
  
  let carta1 , carta2 , carta3 , carta4 , cartaX ,
      jog = { mao: [] , pts:0 },
      dlr = { mao: [] , pts:0 }
  
  carta1 = comprarCarta()
	carta2 = comprarCarta()
  carta3 = comprarCarta()
	carta4 = comprarCarta()
 
  while (jog.pts === 22) { 
    carta1 = comprarCarta()
	  carta2 = comprarCarta() 
  }
  while (dlr.pts === 22) { 
    carta3 = comprarCarta()
	  carta4 = comprarCarta() 
  }

  jog.pts +=   carta1.valor + carta2.valor
  jog.mao.push(carta1.texto , carta2.texto) 
  dlr.pts +=   carta3.valor + carta4.valor
  dlr.mao.push(carta3.texto)      
    
  while (jog.pts < 21 && confirm("Você: "+jog.mao+'\n'+'Dealer: '+dlr.mao+'\n'+'Comprar carta?')) { 
    cartaX = comprarCarta()
    jog.mao.push(cartaX.texto)
    jog.pts += cartaX.valor 
  }	

  dlr.mao.push(carta4.texto)                                        
  
  while (jog.pts <= 21 && dlr.pts < 21 && dlr.pts < jog.pts)	{ 
    cartaX = comprarCarta()
    dlr.mao.push(cartaX.texto)
    dlr.pts += cartaX.valor 
  }	
	
  console.log( "Você: "+jog.mao+' -> '+jog.pts+'\n'+'Dealer: '+dlr.mao+' -> '+dlr.pts )

	if (jog.pts === dlr.pts) { 
    console.log('Empate!') 	    	
  }	else if (jog.pts  <= 21 && dlr.pts > 21)	{ 
    console.log('Você venceu!') 	
  }	else if	(dlr.pts  <= 21 && jog.pts > 21) 	{ 
      console.log('Dealer venceu!')	} else if (jog.pts  <= 21 && dlr.pts <= 21) { 
      if (jog.pts > dlr.pts) { 
        console.log('Você venceu!'  ) 
      } else { 
        console.log('Dealer venceu!') 
      } 
  } else { 
    if (jog.pts < dlr.pts) { 
      console.log('Você venceu!'  )
    } else { 
      console.log('Dealer venceu!')
    } 
  }

  console.log('')

}

console.log("O jogo acabou")
console.log('') 