var mongoose = require('mongoose');
logger = require('../server/logger');

// to-do item schema
var ToDoItemSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    category: {
        type: String,
    },
    status: {
      type: String,
    },
    priority: {
        type: String,
    },
    dateEntered: {
        type: Date,
    },
    dateCompleted: {
        type: Date,
        nullable: true
    },
    assignedUser: {
        type: String,
    }
});

var ToDoItem = module.exports = mongoose.model('ToDoItem', ToDoItemSchema);

module.exports.createToDoItem = function(newToDoItem, callback){
    newToDoItem.save(callback);
}

module.exports.getAllToDoItems = function(req, res, callback){
    logger.info('Get all ToDoItems');
    ToDoItem
        .find({})
        .lean
        .exec(function(err, result) {
            return callback(result);
        });
}

module.exports.updateToDoItemById = function(toDoItem, callback){
    try {
        ToDoItem.updateOne(toDoItem.Name, toDoItem, callback);
    } catch (err) {
        logger.Info(err);
    }
}
