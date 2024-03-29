
var express =         require("express");
var bodyParser =      require("body-parser");
var mongoose =        require('mongoose');
var fs = require('fs');

var forceSsl = require('express-force-ssl');
var https = require('https');
var key = fs.readFileSync('server.key');
var cert = fs.readFileSync( 'server.crt' );
var options = {
    key: key,
    cert: cert
  };

//////////////////////////////////////////
//Initialize app and start express server
var app = express();
app.use(forceSsl);
app.use(bodyParser.json());

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

const server = https.createServer(options, app);

server.listen(3000, function (err) {
    if (err) {console.log(err);process.exit(1);}
    var port = server.address().port;
    console.log("App now running on port",port);
});

//////////////////////////////////////////
//Connect to mongoose db
var MongoDbConStr = "mongodb://donkw:donkw@ds155315.mlab.com:55315/heroku_37qvp4zk";
global.db = mongoose.createConnection(MongoDbConStr);
//////////////////////////////////////////

const apis = require('./server/routes/apis');
app.use('/apis',apis);

module.exports = app;