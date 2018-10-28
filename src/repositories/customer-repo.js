'use strict'

const Customer = require('../models/customer');

exports.create = async (data) => {
    var customer = new Customer(data);
    return customer.save();
}

exports.get = async () => {
    return Customer.find({});
}

exports.authenticate = async (data) => {
    return await Customer.findOne({
        email: data.email,
        password: data.password,
    });
}