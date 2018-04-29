console.log('May node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
var favicon = require('serve-favicon');
require('dotenv').config();

// Setup Port
var port = process.env.PORT || 3000;

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use(favicon(__dirname + '/images/favicon.ico'));

app.listen(port, () => {
    console.log(`listening on ${port}`);
});


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));



app.set('view engine', 'ejs');

// Landing Page //

app.get('/', (req, res) => {
    res.render('index.ejs');
})


app.get('/aboutMe', (req, res) => {
    res.render('aboutMe.ejs');
})

app.get('/download', function(req, res){
    var file = __dirname + '/uploads/Resume.pdf';
    res.download(file); // Set disposition and send it.
});
