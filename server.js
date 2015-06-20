// Get the packages we need
var express = require('express');
var mongoose = require('mongoose');
// Load required packages
var Beer = require('./models/beer');
var bodyParser = require('body-parser');
var uriUtil = require('mongodb-uri');



/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
 
/*
 * Mongoose uses a different connection string format than MongoDB's standard.
 * Use the mongodb-uri library to help you convert from the standard format to
 * Mongoose's format.
 */
var mongodbUri = 'mongodb://hacker:hacker@ds031098.mongolab.com:31098/mackahmarket';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);
 
mongoose.connect(mongooseUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});


// Create our Express application
var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));






// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3000/api
router.get('/', function(req, res) {
  res.json({ message: 'You are running dangerously low on beer, really!' });
});



// -- New Code Below Here -- //


var users = require('./routes/User');
app.use('/api/users', users);


var beers = require('./routes/Beer');
app.use('/api/beers', beers);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('Insert beer on port ' + port);
