// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = Number(prompt("Digite a altura do retângulo"))
  const largura = Number(prompt("Digite a largura do retângulo"))
  const area = altura * largura

  console.log(area);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
    const anoAtual = Number(prompt("Digite o ano atual"))
    const anoNasc = Number(prompt("Digite o ano de seu nascimento"))
    const idade = anoAtual - anoNasc

    console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
    return peso/(altura*altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  let nome = prompt("Digite seu nome")
  let idade = prompt("Digite sua idade")
  let email = prompt("Digite seu email")
  
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
    const cor1 = prompt("Digite sua primeira cor favorita")
    const cor2 = prompt("Digite sua segunda cor favorita")
    const cor3 = prompt("Digite sua terceira cor favorita")
    const array = [cor1, cor2, cor3]

    console.log(array);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
    return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
    return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
    return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
    return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
    const elemento1 = array[0]
    array[0] = array[array.length - 1]
    array[array.length - 1] = elemento1

    return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
    return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
    const anoAtual = Number(prompt("Digite o ano atual"))
    const anoNasc = Number(prompt("Digite seu ano de nascimento"))
    const anoEmissao = Number(prompt("Digite o ano da emissão de seu RG"))
    const idade = anoAtual - anoNasc
    const idadeRG = anoAtual - anoEmissao

    let renovacao = (idade <= 20 && idadeRG >= 5) || (idade > 20 && idade <= 50 && idadeRG >= 10) || (idade > 50 && idadeRG >= 15)

    console.log(renovacao);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  return (ano % 400 === 0) || (ano % 100 !== 0 && ano % 4 === 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
    const maioridade = prompt("Você tem mais de 18 anos?") === "sim"
    const emCompleto = prompt("Você possui ensino médio completo?") === "sim"
    const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?") === "sim"

    console.log(maioridade && emCompleto && disponibilidade);
}
