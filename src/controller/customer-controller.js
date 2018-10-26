'use strict'

const repository = require('../repositories/customer-repo');
const ERROR = "Falha ao processar a requisição.";

exports.post = async (req, res, next) => {
    try {
        await repository.create(req.body);
        res.status(201).send({ message: "Cliente cadastrado com sucesso." });
    } catch (e) {
        res.status(400).send({ message: "Falha ao cadastrar o cliente.", data: e });
    }
};

exports.get = async (req, res, next) => {
    try {
        const customers = await repository.get();
        res.status(200).send(customers)
    } catch (e) {
        res.status(400).send({ message: ERROR, data: e });
    }
}