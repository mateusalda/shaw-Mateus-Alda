// 1.
// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// 2.
// a.
// {nome: "Juca", idade: 3, raca: "SRD"}
// {nome: "Juba", idade: 3, raca: "SRD"}
// {nome: "Jubo", idade: 3, raca: "SRD"}

// b. O espalhamento faz uma cópia do objeto e aplica as alterações que vierem a seguir

// 3.
// a.
// false
// undefined

// b. O valor impresso é o retorno da função, que é a propriedade do objeto pessoa, no primeiro caso false e no segundo undefined, pois o objeto não possui propriedade "altura"

//-----------------------------------------------------------
// EXERCICIO 1

const pessoaApelido = {
    nome: "Mateus",
    apelidos: ["Harry", "Mat", "Dudu"]
}

function pessoasApelidos(objeto){
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`)
}

const novaPessoa = {
    ...pessoaApelido,
    apelidos: ["Teus", "Mah", "Aldá"]
}
pessoasApelidos(novaPessoa)

//-----------------------------------------------------------
// EXERCICIO 2

const pessoa1 = {
    nome: "Marcos",
    idade: 38,
    profissao: "Dev Fullstack"
}

const pessoa2 = {
    nome: "Amanda",
    idade: 26,
    profissao: "FrontEnd"
}

function pessoaArray(pessoa){
    return [pessoa.nome, pessoa.nome.length, pessoa.idade, pessoa.profissao, pessoa.profissao.length]
}

//-----------------------------------------------------------
// EXERCICIO 3

let carrinho = []

const fruta1 = {
    nome: "banana",
    disponivel: true
}
const fruta2 = {
    nome: "maçã",
    disponivel: true
}
const fruta3 = {
    nome: "morango",
    disponivel: true
}

function addCarrinho(fruta){
    carrinho.push(fruta)
}

addCarrinho(fruta1)
addCarrinho(fruta2)
addCarrinho(fruta3)

console.log(carrinho);

//-----------------------------------------------------------
// DESAFIO 1

function criarObjeto(){
    const nomeUsuario = prompt("Digite seu nome")
    const idadeUsuario = prompt("Digite sua idade")
    const profissaoUsuario = prompt("Digite sua profissão")

    const objeto = {
        nome: nomeUsuario,
        idade: idadeUsuario,
        profissao: profissaoUsuario
    }

    console.log(objeto);
    console.log(typeof objeto);
}

//-----------------------------------------------------------
// DESAFIO 2

const primeiroFilme = {
    nome: "O silêncio dos inocentes",
    lancamento: 1991
}
const segundoFilme = {
    nome: "Duro de matar",
    lancamento: 1988
}

function lancamentoFilmes(filme1, filme2){
    return `O primeiro filme foi lançado antes do segundo? ${filme1.lancamento < filme2.lancamento}
    O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.lancamento === filme2.lancamento}`
}

//-----------------------------------------------------------
// DESAFIO 3

function disponibilidade(fruta){
    fruta.disponivel = !fruta.disponivel
    return fruta
}