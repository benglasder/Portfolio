var express = require('express');
var router = express.Router();

var BlogPost = require('../models/blogPost');

logger = require('../server/logger');


router.get('/createPost', ensureAuthenticated, function (req, res) {
    res.render('createPost');
});

router.post('/createPost', ensureAuthenticated, function (req, res) {
    var title = req.body.title;
    var content = req.body.content;
    var isHtml = req.body.isHtml;

    // Validation

    req.checkBody('title', 'Title is Required').notEmpty();
    req.checkBody('content', 'Content is Required').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
        logger.info(errors);
        res.render('createPost', {
            errors: errors
        });
    } else {
        let newBlogPost = new BlogPost({
            title: title,
            content: content,
            isHtml: isHtml
        });

        BlogPost.createBlogPost(newBlogPost, function (err, blogPost) {
            if (err) throw err;
            logger.info(`New Blog Post Created: ${blogPost}`);
            req.flash('success_msg', 'Blog Post added successfully!');
            res.redirect('/');
        })
    }
});

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {
        res.redirect('/users/login');
    }
}

module.exports = router;
