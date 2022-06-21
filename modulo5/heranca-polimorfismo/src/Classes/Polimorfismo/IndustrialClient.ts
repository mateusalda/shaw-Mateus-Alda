import { Client } from "./Client";
import { Industry } from "./Places";

export class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string, 
        public registrationNumber: number, 
        public consumedEnergy: number,
        private registroIndustrial: string,

        machinesQuantity: number,
        cep: string
    ){
        super(machinesQuantity, cep)
    }

    getRegistroIndustrial(): string {
        return this.registroIndustrial
    }

    calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100;
    }
}