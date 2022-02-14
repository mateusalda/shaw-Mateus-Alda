// 1.
// 10
// 10 5

// 2.
// 10 10 10

// 3.
// p seria horasDeTrabalhoPorDia, t seria recebePorDia
// a terceira linha emite um alerta com o resultado da divisão de horasDeTrabalhoPorDia por recebePorDia.

//---------------------------------------------------------

let nome
let idade

console.log(typeof nome)
console.log(typeof idade)
// variáveis sem valor atribuído são de tipo undefined

nome = prompt("Digite seu nome")
idade = prompt("Digite sua idade")

console.log(typeof nome)
console.log(typeof idade)
// o valore retornado pelo comando prompt() é de tipo string

console.log("Olá", nome, ", você tem", idade, "anos")

//---------------------------------------------------------

let maioridade = prompt("Você é maior de idade?")
let direcao = prompt("Você já pilotou um automóvel?")
let bebida = prompt("Você já bebeu cerveja?")

console.log("Você é maior de idade? -", maioridade)
console.log("Você já pilotou um automóvel? -", direcao)
console.log("Você já bebeu cerveja? -", bebida)

//---------------------------------------------------------

let a = 10
let b = 25
let c = a

a = b
b = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//---------------------------------------------------------

let num1 = Number(prompt("Digite um número"))
let num2 = Number(prompt("Digite outro número"))

console.log("O primeiro número somado ao segundo número resulta em:", num1 + num2)
console.log("O primeiro número multiplicado ao segundo número resulta em:", num1 * num2)