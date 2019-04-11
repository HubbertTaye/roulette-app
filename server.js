//tehya note: database.js is not set up so everything involving the database is commented out
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

// const MongoClient = require('mongodb').MongoClient
const mongoose = require('mongoose');

const morgan = require('morgan');
const flash = require('connect-flash');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const passport = require('passport');
const session = require('express-session');

const configDB = require('./config/database.js');

 var db

 mongoose.connect(configDB.url, (err, database) => {
  if (err) return console.log(err)
  db = database
  require('./app/routes.js')(app, passport, db); 
 });

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('/public'))

app.set('view engine', 'ejs');

// required for passport
app.use(session({
    secret: 'rouletteOfDeath', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

app.listen(port);
console.log(`The magic happens on port ${port}`);
