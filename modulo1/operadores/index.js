// 1.
// a.  false
// b.  false
// c.  true
// d.  boolean

// 2.
// O retorno do prompt é string então a soma será um string

// 3.
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//------------------------------------------------------------

let idadeUsuario = Number(prompt("Digite a sua idade"))
let idadeAmigoa = Number(prompt("Digite a idade da sua melhor amiga ou seu melhor amigo"))

console.log("Sua idade é maior do que a do seu melhor amigo ou melhor amiga", idadeUsuario > idadeAmigoa);
console.log("Diferença de idade: ", idadeUsuario - idadeAmigoa)

//------------------------------------------------------------

let numero = Number(prompt("Insira um número par"))

console.log("Resto da divisão por 2: ", numero % 2);
// O resto da divisão de qualquer número par por 2 será 0
// Se o número inserido for ímpar o resto da divisão será 1

//------------------------------------------------------------

let idadeEmAnos = Number(prompt("Insira sua idade em anos"))

console.log("Idade em meses:", idadeEmAnos * 12);
console.log("Idade em dias:", idadeEmAnos * 365);
console.log("Idade em horas:", idadeEmAnos * 365 * 24);

//------------------------------------------------------------

let primeiroNum = Number(prompt("Insira um número"))
let segundoNum = Number(prompt("Insira outro número"))

console.log("O primeiro número é maior que o segundo?", primeiroNum > segundoNum)
console.log("O primeiro número é igual ao segundo?", primeiroNum === segundoNum)
console.log("O primeiro número é divisível pelo segundo?", primeiroNum % segundoNum === 0)
console.log("O segundo número é divisível pelo primeiro?", segundoNum % primeiroNum === 0)

//------------------------------------------------------------

let primeiroNumero = 77
let segundoNumero = 80
let terceiroNumero = 30

let primeiraConversao = (primeiroNumero - 32)*(5/9) + 273.15
let segundaConversao = segundoNumero*(9/5) + 32
let terceiraConversao = (terceiroNumero - 32)*(5/9)
let quartaConversao = terceiroNumero + 273.15

let quartoNumero = Number(prompt("Digite o valor em graus Celsius que deseja converter"))

let quintaConversao = (quartoNumero - 32)*(5/9)
let sextaConversao = quartoNumero + 273.15

console.log(primeiroNumero,"°F =", primeiraConversao, "K");
console.log(segundoNumero,"°C =", segundaConversao, "°F");
console.log(terceiroNumero,"°C =", terceiraConversao, "°F");
console.log(terceiroNumero,"°C =", quartaConversao, "K");
console.log(quartoNumero,"°C =", quintaConversao, "°F");
console.log(quartoNumero,"°C =", sextaConversao, "K");