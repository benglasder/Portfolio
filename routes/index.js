var express = require('express');
var router = express.Router();

//todo restructure project
logger = require('../server/logger');


// Get Homepage
router.get('/', (req, res) => {
    logger.info('test from home page');
   res.render('index.ejs');
});

router.get('/aboutMe', (req, res) => {
    res.render('aboutMe.ejs');
});



module.exports = router;
