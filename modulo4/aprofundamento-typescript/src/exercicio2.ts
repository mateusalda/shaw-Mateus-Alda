//a
// entrada numeros: number e saída estatisticas: object
function obterEstatisticas(numeros: number[]): object {

    const numerosOrdenados = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.table(obterEstatisticas([29, 84, 37, 18, 3]))

//b
// todas são números

//c
type amostra = {
    numeros: Array<number>
    obterEstatisticas: (numeros: number[]) => void
}