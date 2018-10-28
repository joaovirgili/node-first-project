'use strict';

const jsonwebtoken = require('jsonwebtoken');

exports.generateToken = async (data) => {
    return jsonwebtoken.sign(data, global.SALT_KEY, {expiresIn: '1d'});
}

exports.decodeToken = async (token) => {
    return await jsonwebtoken.decode(token, global.SALT_KEY);
}

exports.authorize = async (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jsonwebtoken.verify(token, global.SALT_KEY, (error, decoded) => {
            if (error) {
                res.status(401).json({
                    message: 'Token inválido.'
                });
            } else
                next();
        });
    }
}