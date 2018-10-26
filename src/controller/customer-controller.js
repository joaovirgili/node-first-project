'use strict'

const repository = require('../repositories/customer-repo');
const ERROR = "Falha ao processar a requisição.";
const md5 = require('md5');
const emailService = require('../services/email-service');

exports.post = async (req, res, next) => {
    try {
        await repository.create({
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY),
        });

        emailService.send(
            req.body.email, 
            'Bem vindo ao Node Store',
            global.EMAIL_TMPL.replace('{0}', req.body.name)
        );

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