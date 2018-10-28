'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/customer-controller');

router.post('/', controller.post);
router.post('/authenticate', controller.authenticate);
router.get('/', controller.get);

module.exports = router;