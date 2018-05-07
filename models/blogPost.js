var mongoose = require('mongoose');
logger = require('../server/logger');

// Blog Post Schema
var BlogPostSchema = mongoose.Schema({
    title: {
        type: String,
        index:true
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
    },
    author: {
        type: String,
    }
});


var BlogPost = module.exports = mongoose.model('BlogPost', BlogPostSchema);

module.exports.createBlogPost = function(newBlogPost, callback){
    newBlogPost.save(callback);
}

module.exports.getAllBlogPosts = function(req, res, cb) {
    logger.info('Get All BLog Posts');
    logger.info('Get All BLog Posts');
    BlogPost
        .find({})
        .lean()
        .exec(function(err, result) {
            // var transformedBlogPosts = result.map(function(blogPost) {
            //     return blogPost.toObject();
            // });
            return cb(result);
        });
}
