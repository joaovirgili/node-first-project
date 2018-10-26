'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({
            active: true
        }, 'title price slug');
}

exports.getBySlug = (slug) => {
    return Product
        .findOne({
            active: true,
            slug: slug
        }, 'title description price slug tags');
}

exports.getById = (id) => {
    return Product
        .findById(id);
}

exports.getByTag = (tag) => {
    return Product
        .find({
            tags: tag,
            active: true
        }, 'title description price slug tags')
}

exports.create = (data) => {
    var product = new Product(data);
    return product.save();
}

exports.update = (id, data) => {
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

exports.delete = (id) => {
    return Product.findByIdAndDelete(id);
}