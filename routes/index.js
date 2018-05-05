var express = require('express');
var router = express.Router();

//todo restructure project
logger = require('../server/logger');


// Get Homepage
router.get('/', (req, res) => {
   res.render('index.ejs');
});

router.get('/blog', (req, res) => {
    res.render('blog.ejs');
})

router.get('/aboutMe', (req, res) => {
    res.render('aboutMe.ejs');
});



module.exports = router;
