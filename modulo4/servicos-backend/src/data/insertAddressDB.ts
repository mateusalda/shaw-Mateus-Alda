import { connection } from "./connection";
import { FullAddress } from "./types";

export default async function insertAddressDB(address: FullAddress) {

    const { cep, logradouro, numero, complemento, bairro, cidade, estado } = address

    await connection("address").insert({
        cep,
        logradouro,
        numero,
        complemento,
        bairro,
        cidade,
        estado
    })

}