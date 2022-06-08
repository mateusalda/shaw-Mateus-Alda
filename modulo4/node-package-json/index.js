// usando process.argv[n] com n sendo 2 ou mais e no terminal passar as informações no comando

const nome = process.argv[2]
const idade = Number(process.argv[3])

//B
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

//C
console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`);