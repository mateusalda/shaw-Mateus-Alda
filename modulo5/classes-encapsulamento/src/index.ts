import UserAccount from "./Classes/UserAccount";

//1.
//a)
// O construtor inicializa os valores necessários ao instanciar a classe, chamamos o constructor ao criar nova classe new Class(argumentos constructor)

const mateusAcc = new UserAccount('123.456.789-10', 'Mateus Aldá', 28)

//b)
// Apareceu uma vez

//c)
// As propriedades privadas só podem ser acessadas dentro da classe, para acessá-las de fora precisamos de um método que o faça dentro da classe