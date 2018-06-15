var express = require('express');
var router = express.Router();

//todo restructure project
logger = require('../server/logger');




// Get Homepage
router.get('/', (req, res) => {

    var ip = req.headers['x-forwarded-for'] ||
	    req.connection.remoteAddress ||
	    req.socket.remoteAddress ||
	    (req.connection.socket ? req.connection.socket.remoteAddress : null);

    logger.info(`Home ${ip}`);
    res.render('index.ejs');
});

router.get('/aboutMe', (req, res) => {

    var ip = req.headers['x-forwarded-for'] ||
	    req.connection.remoteAddress ||
	    req.socket.remoteAddress ||
	    (req.connection.socket ? req.connection.socket.remoteAddress : null);

    logger.info(`About me ${ip}`);
    res.render('aboutMe.ejs');
});



module.exports = router;
