// 1. O código está somando i ao valor a cada iteração, o resultado no console será 10

// 2. a.
// 19
// 21
// 23
// 25
// 27
// 30
// b. Poderia ser criada uma variável com valor zero que aumentasse o valor a cada iteração concluída, acompanhando o valor do índice

// 3.
// *
// **
// ***
// ****
// *****

//--------------------------------------------------------
// 1.

const numPet = Number(prompt("Digite o número de pets que você possui"))
const arrayPet = []
if(numPet <= 0){
    console.log("Que pena! Você pode adotar um pet!");
}else{
    for (let i = 0; i < numPet; i++) {
        let nome = prompt(`Digite o nome do seu ${i+1}° pet`)
        arrayPet.push(nome)
    }
    console.log(arrayPet);
}

//--------------------------------------------------------
// 2.

function imprimeValores(array){
    for(let num of array){
        console.log(num);
    }
}

function imprimeValoresPor10(array){
    for(let num of array){
        console.log(num/10);
    }
}

function arrayPares(array){
    let arrayPar = []
    for(let num of array){
        if(num % 2 === 0){
            arrayPar.push(num)
        }
    }
    console.log(arrayPar);
}

function arrayFrase(array){
    let arrayFrases = []
    for(let i = 0; i < array.length; i++){
        arrayFrases.push(`O elemento do índex ${i} é: ${array[i]}`)
    }
    console.log(arrayFrases);
}

function maiorEMenor(array){
    let maior = array[0]
    let menor = array[0]
    for(let num of array){
        if(num > maior){
            maior = num
        }
        if(num < menor){
            menor = num
        }
    }
    console.log(`O maior número do array é ${maior}, e o menor é ${menor}`);
}

const arrayEx = [5, 8, 40, -10, 55]
imprimeValores(arrayEx)
imprimeValoresPor10(arrayEx)
arrayPares(arrayEx)
arrayFrase(arrayEx)
maiorEMenor(arrayEx)

//--------------------------------------------------------
// Desafio 1

// let numEscolhido = Number(prompt("Escolha um numero de 0 a 99"))
// Desafio 2
let numSorteado = Math.floor(Math.random() * 100)
numEscolhido = numSorteado
//-----------
console.log("Vamos jogar!");

let chute = Number(prompt("Adivinhe o número escolhido"))
let tentativas = 1
while (chute !== numEscolhido) {
    if (chute < numEscolhido){
        console.log(`O número chutado foi: ${chute}`)
        console.log(`Errrrrrrrou, é maior`);
    }else{
        console.log(`O número chutado foi: ${chute}`)
        console.log(`Errrrrrrrou, é menor`);
    }
    tentativas++
    chute = Number(prompt("Adivinhe o número escolhido"))
}
console.log("Acertou!");
console.log(`O número de tentativas foi : ${tentativas}`);
