import Customer from "./Classes/Heranca/Customer";
import User from "./Classes/Heranca/User";
import { Client } from "./Classes/Polimorfismo/Client";
import { Place } from "./Classes/Polimorfismo/Places";


const usuario = new User('001', 'user@email.com', 'Usuario', 'abc123')

console.log(usuario.getId());
console.log(usuario.getName());
console.log(usuario.getEmail());

//1. a)
// Não pois é private e não temos método na classe para isso

//b)
// Uma vez, quando o objeto usuario foi instanciado

const consumidor = new Customer('001', 'user@email.com', 'Usuario', 'abc123', 'credito1234')

//2. a)
// Uma vez

//b)
// Uma vez, pois o constructor foi chamado somente uma vez ao ser instanciada a classe

console.log(consumidor.getId());
console.log(consumidor.getName());
console.log(consumidor.getEmail());
console.log(consumidor.getCreditCard());
console.log(consumidor.purchaseTotal);

//3. a)
// Não pois é private e não temos método na classe para isso

console.log(consumidor.introduceYourself());

//--------------------------------------------

const client: Client = {
    name: "Goli",
    registrationNumber: 1,
    consumedEnergy: 100,
  
    calculateBill: () => {
      return 2;
    }
}

console.log(client.name, client.registrationNumber, client.consumedEnergy, client.calculateBill());

//1. a)
//Todas.


// const lugar = new Place()

//2. a)
// Cannot create instance of an abstract class

//b)
// Criar classes que recebam essas informações e instanciá-las


//4. a)
// name, registrationNumber, consumedEnergy, cpf, residentsQuantity, cep, getCep, getCPF(), calculateBill()


//5. a)
// extends classe que é subclasse de Place e implementa Client

//b)
// cnpj no lugar de cpf, número de andares no lugar de residentes e cálculo de energia