'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
<<<<<<< HEAD

=======
>>>>>>> bc6707dfcc2c02a804ed6a2ddf3dcf87192396b6

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

<<<<<<< HEAD

=======
>>>>>>> bc6707dfcc2c02a804ed6a2ddf3dcf87192396b6
module.exports = app;




