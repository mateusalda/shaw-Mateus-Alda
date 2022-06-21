import { Client } from "./Client";
import { Residence } from "./Places";

export class ResidencialClient extends Residence implements Client {
    constructor(
        public name: string, 
        public registrationNumber: number, 
        public consumedEnergy: number,
        private cpf: string,

        residentsQuantity: number,
        cep: string
    ){
        super(residentsQuantity, cep)
    }

    getCPF(): string {
        return this.cpf
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.75;
    }
}