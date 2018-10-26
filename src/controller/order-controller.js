'use strict'

const repository = require('../repositories/order-repo');
const ERROR = "Falha ao processar a requisição.";
const guid = require('guid');

exports.post = async (req, res, next) => {
    try {
        // console.log(req.body.costumer);
        await repository.create({
            costumer: req.body.costumer,
            number: guid.raw().substring(0,6),
            items: req.body.items,
        });
        res.status(201).send({message: "Pedido cadastrado com sucesso."});
    } catch (e) {
        res.status(400).send({ message: "Falha ao cadastrar o pedido.", data: e });
    }
}
exports.get = async (req, res, next) => {
    try {
        const orders = await repository.get();
        res.status(200).send(orders);
    } catch (e) {
        res.status(400).send({ message: ERROR, data: e });
    }
}