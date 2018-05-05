var express = require('express');
var router = express.Router();

//todo restructure project
logger = require('../server/logger');


// Get Homepage
router.get('/', (req, res) => {
    logger.info('test from home page');
   res.render('index.ejs');
});

router.get('/blog', (req, res) => {
    res.render('blog.ejs');
})

router.get('/aboutMe', (req, res) => {
    res.render('aboutMe.ejs');
})

router.get('/addPost', ensureAuthenticated, (req, res) => {
    res.render('addPost.ejs');
})

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/users/login');
    }
}


module.exports = router;
