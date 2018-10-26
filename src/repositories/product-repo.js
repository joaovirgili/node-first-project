'use strict';

const Product = require('../models/product');

exports.get = async () => {
    return Product
        .find({
            active: true
        }, 'title price slug');
}

exports.getBySlug = async (slug) => {
    return Product
        .findOne({
            active: true,
            slug: slug
        }, 'title description price slug tags');
}

exports.getById = async (id) => {
    return Product.findById(id);
}

exports.getByTag = async (tag) => {
    return Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags')
}

exports.create = async (data) => {
    var product = new Product(data);
    return product.save();
}

exports.update = async (id, data) => {
    const updateJson = {
        title: data.title,
        description: data.description,
        slug: data.slug,
        price: data.price
    };
    return Product.findByIdAndUpdate(
        id, { $set: updateJson }
    );
}

exports.delete = async (id) => {
    return Product.findByIdAndDelete(id);
}