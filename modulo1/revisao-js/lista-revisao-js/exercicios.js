// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let arrayInvertido = []
  for(let i = array.length - 1; i >= 0; i--){
      arrayInvertido.push(array[i])
  }
  return arrayInvertido
  // return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter((elemento) => elemento % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((elemento) => elemento % 2 === 0).map((numPar) => numPar*numPar)
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  return array.sort((a, b) => b - a)[0]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maior = Math.max(num1, num2)
    let menor = Math.min(num1, num2)
    return {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor === 0,
        diferenca: maior - menor
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let array = []
   for (let i = 0; i < n; i++){
       array.push(i * 2)
   }
   return array
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let triangulo
    if (ladoA === ladoB && ladoA === ladoC){
        triangulo = 'Equilátero'
    } else if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        triangulo = 'Escaleno'
    } else {
        triangulo = 'Isósceles'
    }
    return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let oredenado = array.sort((a, b) => a - b)
  return [oredenado[oredenado.length - 2], oredenado[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let elenco = filme.atores[0]
    for (let i = 1; i < filme.atores.length; i++){
        elenco = elenco + ", " + filme.atores[i]
    }
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elenco}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   return {...pessoa, nome: "ANÔNIMO"}
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter((pessoa) => {
       return pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura >= 1.5
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        return pessoa.idade <= 14 || pessoa.idade >= 60 || pessoa.altura < 1.5
    })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let atualizaSaldo = (objeto) => {
        for (compra of objeto.compras){
            objeto.saldoTotal -= compra
        }
        objeto.compras = []
        return objeto
    }
    return contas.map(atualizaSaldo)
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let compara = (a, b) => {
      if (a.nome > b.nome){
          return 1
      }
      if (a.nome < b.nome){
          return -1
      }
    return 0
  }
  return consultas.sort(compara)
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   let comparaAno = (a, b) => {
    if (a.dataDaConsulta.substr(6) > b.dataDaConsulta.substr(6)){
        return 1
    }
    if (a.dataDaConsulta.substr(6) < b.dataDaConsulta.substr(6)){
        return -1
    }
    return 0
   }
   let comparaMes = (a, b) => {
    if (a.dataDaConsulta.substr(3, 2) > b.dataDaConsulta.substr(3, 2)){
        return 1
    }
    if (a.dataDaConsulta.substr(3, 2) < b.dataDaConsulta.substr(3, 2)){
        return -1
    }
    return 0
   }
   let comparaDia = (a, b) => {
    if (a.dataDaConsulta.substr(0, 2) > b.dataDaConsulta.substr(0, 2)){
        return 1
    }
    if (a.dataDaConsulta.substr(0, 2) < b.dataDaConsulta.substr(0, 2)){
        return -1
    }
    return 0
   }
   return consultas.sort(comparaDia).sort(comparaMes).sort(comparaAno)
}