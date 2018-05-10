var express = require('express');
var router = express.Router();

var ToDoItem = require('../models/toDoItem');

logger = require('../server/logger');


router.get('/', (req, res) => {
   let toDoItems = ToDoItem.find({}, function(err, result) {
       console.log(result.length);
       res.render('aboutSite.ejs', { toDoItems: result });
   });
});

// Create Item

router.post('createToDoItem', ensureAuthenticated, function (req, res) {
    let name = req.body.name;
    let category = req.body.category;
    let status = "New";
    let priority = req.body.priority;
    let dateEntered = new Date();


    // Validation

    req.checkBody('name', 'Name is Required').notEmpty();


    let errors = req.validationErrors();

    if (errors) {
        logger.info(errors);
        let toDoItems = ToDoItem.find({}, function(err, result) {
            res.render('aboutSite.ejs', {
                toDoItems: result,
                errors: errors
            });
        });

    } else {
        let newToDoItem = new ToDoItem({
            name: name,
            category: category,
            status: status,
            priority: priority,
            dateEntered: dateEntered
        });

        ToDoItem.createToDoItem(newToDoItem, function (err, toDoItem) {
            if (err) throw err;
            logger.info(`New ToDo Item Created: ${toDoItem}`);

            req.flash('success_msg', `${toDoItem.name} | Priority: ${toDoItem.priority}`);
            let toDoItems = ToDoItem.find({}, function(err, result) {
                res.render('aboutSite.ejs', {
                    toDoItems: result
                });
            });
        });
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
