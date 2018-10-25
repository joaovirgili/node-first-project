'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = 3000;

// Carrega as rotas
const index = require('./routes/indexRoute');
const product = require('./routes/productsRoute');

const app = express();

// Conecta ao banco
mongoose.connect('mongodb://master:master123@ds141633.mlab.com:41633/node-store');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', index);
app.use('/products', product);


app.set('port', PORT);
module.exports = app;




