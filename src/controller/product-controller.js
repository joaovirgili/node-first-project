'use strict'

const Product = require('../models/product');
const repository = require('../repositories/product-repo');

exports.get = (req, res, next) => {
    repository
        .get()
        .then((data) => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    repository
        .getBySlug(req.params.slug)
        .then((data) => {
            if (data)
                res.status(200).send(data);
            else
                res.status(200).send({ message: "Produto não encontrado." });
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getById = (req, res, next) => {
    repository
        .getById(req.params.id)
        .then((data) => {
            if (data)
                res.status(200).send(data);
            else
                res.status(200).send({ message: "Produto não encontrado." });
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getByTag = (req, res, next) => {
    repository
        .getByTag(req.params.tag)
        .then((data) => {
            if (data)
                res.status(200).send(data);
            else
                res.status(200).send({ message: "Produto não encontrado." });
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.post = (req, res, next) => {
    repository.create(req.body)
        .then(() => {
            res.status(201).send({ message: "Produto cadastrado com sucesso." });
        }).catch(e => {
            res.status(400).send({ message: "Falha ao cadastrar o produto.", data: e });
        });
};

exports.put = (req, res, next) => {
    repository.update(req.params.id, req.body)
        .then(() => {
            res.status(200).send({ message: "Produto atualizado com sucesso." })
        }).catch(() => {
            res.status(400).send({ message: "Não foi possível realizar a atualização do produto." })
        });
};

exports.delete = (req, res, next) => {
    repository
        .delete(req.body.id)
        .then(() => {
            res.status(200).send({ message: "Produto deletado com sucesso." })
        }).catch(() => {
            res.status(400).send({ message: "Não foi possível deletar o produto." })
        });
};