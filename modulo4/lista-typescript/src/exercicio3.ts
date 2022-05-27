enum Genero {
    Acao = 'ação',
    Drama = 'drama',
    Comedia = 'comédia',
    Romance = 'romance',
    Terror = 'terror'
}

type Filme = {
    nome: string,
    ano: number,
    genero: Genero,
    pontuacao?: number
}

function organizaFilme(nome: string, ano: number, genero: Genero, pontuacao?: number): Filme {
    const filme: Filme = pontuacao ? {
        nome: nome,
        ano: ano,
        genero: genero,
        pontuacao: pontuacao
    } : {
        nome: nome,
        ano: ano,
        genero: genero
    }

    return filme
}

console.log(organizaFilme("Duna", 2021, Genero.Acao, 74));
console.log(organizaFilme("Duna", 2021, Genero.Acao));
