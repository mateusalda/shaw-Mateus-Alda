const list = ['Lavar o gato']
const newTask = process.argv[2]

list.push(newTask)

console.log('Tarefa adicionada com sucesso!');
console.log(list);