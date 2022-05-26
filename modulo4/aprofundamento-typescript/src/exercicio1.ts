//a
let minhaString: string = 'ola'
// minhaString = 10

//tipo number não pode ser designado ao tipo string

//b
let meuNumero: number | string = 10

//d
enum arcoIris {
    vermelho = 'vermelho',
    laranja = 'laranja',
    amarelo = 'amarelo',
    verde = 'verde',
    azul = 'azul',
    anil = 'anil',
    violeta = 'violeta'
}

//c
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: arcoIris
}

const pessoa1: Pessoa = {
    nome: 'Mateus',
    idade: 28,
    corFavorita: arcoIris.azul
}
const pessoa2: Pessoa = {
    nome: 'Emilly',
    idade: 25,
    corFavorita: arcoIris.verde
}
const pessoa3: Pessoa = {
    nome: 'Marcos',
    idade: 33,
    corFavorita: arcoIris.vermelho
}

console.table([pessoa1, pessoa2, pessoa3]);
