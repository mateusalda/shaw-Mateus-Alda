// 1.
// { nome: "Amanda Rangel", apelido: "Mandi" } 0 [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]
// { nome: "Laís Petra", apelido: "Laura" } 1 [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]
// { nome: "Letícia Chijo", apelido: "Chijo" } 2 [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// 2.
// [ "Amanda Rangel", "Laís Petra", "Letícia Chijo" ]

// 3.
// [ "Amanda Rangel", "Laís Petra" ]

//-----------------------------------------------------------
// 1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

 const nomePets = pets.map((pet) => pet.nome)

 const petSalsicha = pets.filter((pet) => pet.raca === "Salsicha")

 const desconto = pets.filter((pet) => pet.raca === 'Poodle').map((pet) => {
     return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
 })

//-----------------------------------------------------------
// 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 const nomeProdutos = produtos.map((produto) => produto.nome)

 const descontoProdutos = produtos.map((produto) => {
     return { nome: produto.nome, preco: produto.preco*0.95}
 })

 const bebidas = produtos.filter((produto) => produto.categoria === 'Bebidas')

 const produtosYpe = produtos.filter((produto) => produto.nome.includes('Ypê'))

 const marketingYpe = produtosYpe.map((produto) => {
     return `Compre ${produto.nome} por ${produto.preco}`
 })

//-----------------------------------------------------------
// Desafio

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 const pokemonsABC = pokemons.map((pokemon) => pokemon.nome).sort()
 
 let tiposRepetidos = []
 const tipos = pokemons.map((pokemon) => pokemon.tipo).filter((tipo) => {
     let repete = false
     for(tipoAtual of tiposRepetidos){
        if (tipo === tipoAtual){
            repete = true
        }
     }
     if (!repete){
         tiposRepetidos.push(tipo)
         return true
     }else{
         return false
     }
 })