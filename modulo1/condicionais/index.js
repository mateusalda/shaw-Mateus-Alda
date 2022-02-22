// 1.
// a. O código recebe um input do usuário, transforma em number e confere se é par ou ímpar
// b. Números pares
// c. Números ímpares

// 2.
// a. Para informar o preço de uma fruta
// b. O preço da fruta  Maçã  é  R$  2.25
// c. O preço da fruta  Pêra  é  R$  5

// 3.
// a. Recebendo um input do usuário e convertendo para number
// b.i.
// Esse número passou no teste
// erro
// ii.
// erro
// c. Sim, pois a variável mensagem é de escopo local e está sendo chamada no escopo global

//----------------------------------------------------------------
// 1.

const idade = Number(prompt("Qual sua idade?"))
if (idade >= 18) {
    console.log("Você pode dirigir")
        ;
} else {
    console.log("Você não pode dirigir")
}

//----------------------------------------------------------------
// 2.

const turno = prompt("Em qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

if (turno === 'M') {
    console.log("Bom Dia!");
} else if (turno === 'V') {
    console.log("Boa Tarde!");
} else if (turno === 'N') {
    console.log("Boa Noite!");
}

//----------------------------------------------------------------
// 3.

const turno2 = prompt("Em qual turno você estuda? M (matutino) ou V (Vespertino) ou N (Noturno)")

switch (turno2) {
    case 'M':
        console.log("Bom Dia!");
        break;
    case 'V':
        console.log("Boa Tarde!");
        break;
    case 'N':
        console.log("Boa Noite!");
        break;
    default:
        break;
}

//----------------------------------------------------------------
// 4.

const generoFilme = prompt("Qual o gênero do filme?")
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme === "fantasia" && precoIngresso < 15) {
    // Desafio 1
    const lanchinho = prompt("Qual lanchinho você vai comprar?")
    console.log("Bom filme!");
    console.log(`Aproveite o seu ${lanchinho}`);
} else {
    console.log("Escolha outro filme :(");
}

//----------------------------------------------------------------
// Desafio 2

const nomeCliente = prompt("Digite seu nome completo")
const tipoJogo = prompt("Digite o tipo do jogo: IN (Internacional) ou DO (Doméstico)")
const etapaJogo = prompt("Digite a etapa do jogo: SF (Semi-final), DT (Decisão terceiro lugar) ou FI (Final)")
const categoria = Number(prompt("Digite o número da categoria"))
const quantidade = Number(prompt("Digite quantos ingressos vai comprar"))

let etapaSaida

const tabelaPrecos = [
    [1320, 660, 1980],
    [880, 440, 1320],
    [550, 330, 880],
    [220, 170, 330]
]

let i
switch (etapaJogo.toUpperCase()) {
    case 'SF':
        i = 0
        etapaSaida = 'Semi-Final'
        break
    case 'DT':
        i = 1
        etapaSaida = 'Decisão de Terceiro Lugar'
        break
    case 'FI':
        i = 2
        etapaSaida = 'Final'
        break
    default:
        break
}
const preco = tabelaPrecos[categoria-1][i]
if (tipoJogo.toUpperCase() === 'IN') {
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCliente}
    Tipo do jogo: Internacional
    Etapa do jogo: ${etapaSaida}
    Categoria: ${categoria}
    Quantidade de Ingressos: ${quantidade} ingressos
    ---Valores---
    Valor do ingresso: U$ ${preco/4.10}
    Valor total: U$ ${(preco/4.10)*quantidade}`);
} else if (tipoJogo.toUpperCase() === 'DO') {
    console.log(`
    ---Dados da compra---
    Nome do cliente: ${nomeCliente}
    Tipo do jogo: Nacional
    Etapa do jogo: ${etapaSaida}
    Categoria: ${categoria}
    Quantidade de Ingressos: ${quantidade} ingressos
    ---Valores---
    Valor do ingresso: R$ ${preco}
    Valor total: R$ ${preco*quantidade}`);
}