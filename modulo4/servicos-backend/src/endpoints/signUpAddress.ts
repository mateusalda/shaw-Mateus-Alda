import { Request, Response } from "express";
import axios from 'axios'
import { baseURL } from "../data/constants";
import { FullAddress } from "../data/types";
import insertAddressDB from "../data/insertAddressDB";


export const signUpAddress = async (req: Request, res: Response) => {
    try {
        const result = await axios.get(`${baseURL}/ws/${req.body.cep}/json/`)

        const address: FullAddress = {
            cep: req.body.cep,
            logradouro: req.body.logradouro || result.data.logradouro,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro || result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }

        await insertAddressDB(address)

        res.status(201).send('Endereço registrado com sucesso.')
        
    } catch (error: any) {
        res.status(400).send(error.message)
    }
}