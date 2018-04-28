console.log('May node be with you');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var path = require('path');
require('dotenv').config();

// Setup Port
var port = process.env.PORT || 3000;


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