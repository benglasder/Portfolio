const winston = require("winston");
require('dotenv').config();

const level = process.env.LOG_LEVEL || 'debug';

console.log(process.env.LOG_LOCATION);

const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ json: false, timestamp: true }),
        new winston.transports.File({ filename: process.env.LOG_LOCATION, json: false })
    ],
    exitOnError: false
});

module.exports = logger;
