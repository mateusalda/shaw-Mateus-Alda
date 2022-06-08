function nascimento(nome: string, data: string): string {
    return `Olá me chamo ${nome}, nasci no dia ${data.substring(0, 2)} do mês de ${data.substring(3, 5)} do ano de ${data.substring(6)}`
}

console.log(nascimento('Mateus', '02/08/1993'));
