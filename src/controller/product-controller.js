'use strict'

const repository = require('../repositories/product-repo');
const ERROR = "Falha ao processar a requisição.";

exports.get = async (req, res, next) => {
    try {
        const data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: ERROR,
            log: e
        });
    }
};

exports.getBySlug = async (req, res, next) => {
    try {
        const data = await repository.getBySlug(req.params.slug);
        if (data)
            res.status(200).send(data);
        else
            res.status(200).send({ message: "Produto não encontrado." });
    } catch (e) {
        res.status(500).send({
            message: ERROR,
            log: e
        });
    }
};

exports.getById = async (req, res, next) => {
    try {
        const data = await repository.getById(req.params.id);
        if (data)
            res.status(200).send(data);
        else
            res.status(200).send({ message: "Produto não encontrado." });
    } catch (e) {
        res.status(500).send({
            message: ERROR,
            log: e
        });
    }
};

exports.getByTag = async (req, res, next) => {
    try {
        const data = await repository.getByTag(req.params.tag)
        if (data)
            res.status(200).send(data);
        else
            res.status(200).send({ message: "Produto não encontrado." });
    } catch (e) {
        res.status(500).send({
            message: ERROR,
            log: e
        });
    }
};

exports.post = async (req, res, next) => {
    try {
        const data = await repository.create(req.body);
        res.status(201).send({ message: "Produto cadastrado com sucesso." });
    } catch (e) {
        res.status(400).send({ message: "Falha ao cadastrar o produto.", data: e });
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({ message: "Produto atualizado com sucesso." });
    } catch (e) {
        res.status(400).send({ message: "Não foi possível realizar a atualização do produto." })
    }
};

exports.delete = async (req, res, next) => {
    try {
        const deleted = await repository.delete(req.body.id);
        const msg = deleted ? "Produto deletado com sucesso." : "Produto não encontrado";
            res.status(200).send({ message: msg })
    } catch (e) {
        res.status(400).send({ message: "Não foi possível deletar o produto." })
    }
};