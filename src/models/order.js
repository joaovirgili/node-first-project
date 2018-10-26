'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    costumer: {
        type: mongoose.scheam.Types.ObjectId,
        ref: 'Costumer',
    },
    number: {
        type: String,
        required: true,
    },
    createdate: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    status: {
        type: String,
        required: true,
        enum: ['created', 'done'],
        default: 'created',
    },
    items: [{
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
        price: {
            type: Number,
            required: true
        },
        product: {
            type: mongoose.scheam.Types.ObjectId,
            ref: 'Product',
        },
    }],
});

module.exports = mongoose.model('Order', schema);
