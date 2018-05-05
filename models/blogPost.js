var mongoose = require('mongoose');


// Blog Post Schema
var BlogPostSchema = mongoose.Schema({
    title: {
        type: String,
        index:true
    },
    content: {
        type: String,
    },
    isHtml: {
        type: Boolean
    }
});


var BlogPost = module.exports = mongoose.model('BlogPost', BlogPostSchema);

module.exports.createBlogPost = function(newBlogPost, callback){
    newBlogPost.save(callback);
}
