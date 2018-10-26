'use strict'

const Costumer = require('../models/costumer');

exports.create = async (data) => {
    var costumer = new Costumer(data);
    return costumer.save();
}

exports.get = async () => {
    return Costumer.find({});
}