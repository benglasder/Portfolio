var express = require('express');
var router = express.Router();


// Get Homepage
router.get('/', (req, res) => {
   res.render('index.ejs');
});

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
