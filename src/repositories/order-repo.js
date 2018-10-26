'use strict';

const Order = require('../models/order');

exports.get = async () => {
    return Order.find({}, 'number status')
        .populate('customer', 'name')
        .populate('items.product', 'title');
}

exports.create = async (data) => {
    var order = new Order(data);
    order.save();
}