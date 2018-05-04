console.log('May node be with you');

const express = require('express'),
    morgan = require('morgan'),
    logger = require('./server/logger');
const bodyParser = require('body-parser');

var path = require('path');
var favicon = require('serve-favicon');

// Authentication
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');
const winston = require('winston');

require('dotenv').config();






mongoose.connect(process.env.MONGO_DB_CONNECTION);
var db = mongoose.connection;

db.on("open", function() {
    logger.info("Connection to MongoDB successful");
});

db.on("error", function(err) {
    logger.info(err);
    return console.log(err);
});

var routes = require('./routes/index');
var users = require('./routes/users');

const app = express();

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
}));


// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Set Static Folder
app.use(express.static('public'));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());


app.use(expressValidator({
    errorFormatter: function(param, msg, value){
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;
        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }

        return {
            param : formParam,
            msg : msg,
            value : value
        };
    }

}));

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next();
});


app.use('/', routes);
app.use('/users', users);

// Setup Port
var port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`listening on ${port}`);
});

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/css', express.static(path.join(__dirname,'/public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use(favicon(__dirname + '/images/favicon.ico'));





app.get('/download', function(req, res){
    var file = __dirname + '/uploads/Resume.pdf';
    res.download(file); // Set disposition and send it.
});
