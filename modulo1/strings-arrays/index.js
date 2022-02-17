// 1.
// a. undefined
// b. null
// c. 11
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// 2.
// SUBI NUM ÔNIBUS EM MIRROCOS 27

//------------------------------------------------------

const nome = prompt("Digite seu nome")
const email = prompt("Digite seu email")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//------------------------------------------------------

const comidas = ["burrito", "pizza", "hamburguer", "mac'n cheese", "shawarma"]

console.log(comidas);
console.log("Essas são as minhas comidas preferidas: ");
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

const novaComida = prompt("Qual é a sua comida preferida?")

comidas[1] = novaComida

console.log(comidas)

//------------------------------------------------------

const listaDeTarefas = []
const tarefa1 = prompt("Digite a primeira tarefa do dia")
const tarefa2 = prompt("Digite a segunda tarefa do dia")
const tarefa3 = prompt("Digite a terceira tarefa do dia")

listaDeTarefas.push(tarefa1, tarefa2, tarefa3)

console.log(listaDeTarefas);

const tarefaCompleta = Number(prompt("Digite o índice de uma tarefa que ja realizou"))
listaDeTarefas.splice(tarefaCompleta, 1)

console.log(listaDeTarefas);