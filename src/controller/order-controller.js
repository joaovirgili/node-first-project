'use strict'

const repository = require('../repositories/order-repo');
const ERROR = "Falha ao processar a requisição.";
const guid = require('guid');
const authServices = require('../services/auth-service');

exports.post = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await authServices.decodeToken(token);
        await repository.create({
            customer: data.id,
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