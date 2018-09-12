const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser');
app.use (bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'../dist/my-app2/')));
//app.use(express.static(__dirname + '/www'));
require('./routes.js')(app, path);
require('./socket.js')(app, io);
require('./listen.js')(http);

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017/mydb';
MongoClient.connect(url, {poolSize:10, useNewUrlParser: true },function(err, client) {
  if(err) {return console.log("This is the error")}
  console.log("database running");
  const dbName = 'mydb';
  const db = client.db(dbName);
  require('./auth.js')(app, db);
  require('./create.js')(app, db);
  require('./add.js')(app, db);
  require('./remove.js')(app, db);
  require('./update.js')(app, db);
  require('./read.js')(app, db);
});
