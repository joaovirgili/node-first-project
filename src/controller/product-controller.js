'use strict'

const Product = require('../models/product');

exports.get = (req, res, next) => {
    Product.find(
        { active: true },
        'title price slug')
        .then((data) => {
            res.status(200).send(data);
        }).catch(e => {
            res.status(400).send(e);
        });
};

exports.getBySlug = (req, res, next) => {
    Product.findOne(
        { active: true, slug: req.params.slug },
        'title description price slug tags')
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
    Product.findById(req.params.id)
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
    Product.find({
        tags: req.params.tag,
        active: true
    }, 'title description price slug tags').then((data) => {
        if (data)
            res.status(200).send(data);
        else
            res.status(200).send({ message: "Produto não encontrado." });
    }).catch(e => {
        res.status(400).send(e);
    });
};

exports.post = (req, res, next) => {
    var product = new Product(req.body);
    product.save().then(() => {
        res.status(201).send({ message: "Produto cadastrado com sucesso." });
    }).catch(e => {
        res.status(400).send({ message: "Falha ao cadastrar o produto.", data: e });
    });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    const updateJson = {
        title: req.body.title,
        description: req.body.description,
        slug: req.body.slug,
        price: req.body.price,
    };

    Product.findByIdAndUpdate(
        id, { $set: updateJson }
    ).then(() => {
        res.status(200).send({ message: "Produto atualizado com sucesso." })
    }).catch(() => {
        res.status(400).send({ message: "Não foi possível realizar a atualização do produto." })
    });
};

exports.delete = (req, res, next) => {
    const id = req.body.id;
    Product.findByIdAndDelete(id).then(() => {
        res.status(200).send({ message: "Produto deletado com sucesso." })
    }).catch(() => {
        res.status(400).send({ message: "Não foi possível deletar o produto." })
    });
};