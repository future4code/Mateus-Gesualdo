let tagValor = document.getElementById("valor") ,
	tagTipo = document.getElementById("novoTipo") ,
	tagDescricao = document.querySelector("textarea") ,
	tagTabela = document.querySelector("table") ,
	tagExtrato = document.querySelector("div") ,
	filtroMax = document.getElementById('filtroMax') ,
	filtroMin = document.getElementById("filtroMin") ,
	filtroTipo = document.getElementById("filtroTipo") ,
	gastoTotal = 0 ,
	listaGastos = [] ,
	listaFiltrada = []

class Gasto {
	constructor (valor, tipo, descricao) {
		this.valor = valor
		this.tipo = tipo
		this.descricao = descricao
	}
}

document.querySelector("button").onclick = function(){

	novoGasto = new Gasto ( Number(tagValor.value), tagTipo.value, tagDescricao.value)

	listaGastos.push(novoGasto)

	listaFiltrada = listaGastos.filter( (gasto) => gasto.valor >= filtroMin.value && gasto.valor <= filtroMax.value && gasto.tipo === filtroTipo.value)

	tagTabela.innerHTML += 
		'<tr>' +
			'<td>' + novoGasto.valor	+ '</td>' +
			'<td>' + novoGasto.tipo 		+ '</td>' +
			'<td>' + novoGasto.descricao + '</td>' +
		'</tr>'

	gastoTotal += Number(novoGasto.valor)

	tagExtrato.innerHTML = 
		"<h3>EXTRATO</h3>" +
		"<p>Gasto Total: " + gastoTotal + "</p>"

	tagDescricao.value = null
	tagTipo.value = null
	tagValor.value = null
}