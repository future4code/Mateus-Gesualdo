/**
 *
 * EXERCÍCIOS DE INTERPRETAÇÃO
 *
 * 1)
 * 
 * a. false
 * b. false
 * c. true
 * d. false
 * e. boolean
 * 
 * 2)
 * 
 * a. Array é uma variável que armazena diversos 
 *    valores diferentes, declarados entre colchetes
 *    e separados por vírgula. Cada valor pode ser
 *    acessado individualmente através de seu índice.
 * b. Zero
 * c. Um array x tem seu tamanho encontrado pelo
 *    comando x.length 
 * d. I. undefined
 *    II. null
 *    III. 11
 *    IV. 3 e 4
 *    V. 19 e 9
 *    VI. 3
 *    VII. 1
 *   
 *EXERCÍCIOS DE ESCRITA DE CÓDIGO
 *1a.
 */
 console.log((77-32)*5/9 + 273.15 +  ' K')
 //b.
 console.log(80*9/5+32 + ' ºF')
 //c.
 console.log(30*9/5+32 + ' ºF (' + (30+273.15) + ' K)')
 //d.
 let T = Number(prompt('digite a temperatura em graus Celsius:'))
 console.log(T*9/5+32 + ' ºF (' + (T+273.15) + ' K)') 
 //2a.
 let Q1 = prompt('1. Qual o seu sonho de infância? ')
 let Q2 = prompt('2. Quantos filhos você tem? ')
 let Q3 = prompt('3. Onde passa a maior parte do seu tempo? ')
 let Q4 = prompt('4. Onde espera estar daqui a dez anos? ')
 let Q5 = prompt('5. O que te faz levantar da cama pela manhã? ')
 console.log('1. Qual o seu sonho de infância?')
 console.log('Resposta: ',Q1)
 console.log('2. Quantos filhos você tem?')
 console.log('Resposta: ',Q2)
 console.log('3. Onde passa a maior parte do seu tempo?')
 console.log('Resposta: ',Q3)
 console.log('4. Onde espera estar daqui a dez anos?')
 console.log('Resposta: ',Q4)
 console.log('5. O que te faz levantar da cama pela manhã?')
 console.log('Resposta: ',Q5)
 //3a.
 let salarioMinimo = Number(prompt('digite o valor, em reais, do salário mínimo'))
 let consumo = Number(prompt('digite o consumo de energia em kWh'))
 console.log('Preço do kWh: '+ (salarioMinimo/5)+' Reais')
 //b.
 consumo = 280
 console.log('Valor da conta: '+(consumo*salarioMinimo/5)+' Reais')
 //c.
 let desconto = Number(prompt('digite o valor percentual do desconto'))
 console.log('Valor da conta: '+(1-desconto/100)*consumo*salarioMinimo/5 +' Reais') 