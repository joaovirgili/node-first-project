'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Carrega as rotas
const index = require('./routes/index-route');
const product = require('./routes/products-route');
const customer = require('./routes/customer-route');
const order = require('./routes/order-route');

const app = express();

// Conecta ao banco
mongoose.connect('mongodb://master:master123@ds141633.mlab.com:41633/node-store');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index);
app.use('/products', product);
app.use('/customers', customer);
app.use('/orders', order);

module.exports = app;




