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
const url = 'mongodb://localhost:27017';
MongoClient.connect(url, {poolSize:10},function(err, client) {
  if(err) {return console.log(err)}
  const dbName = 'users';
  const db = client.db(dbName);
  require('/routes/auth.js')(app, db);
  require('/routes/register.js')(app, db);
  require('/routes/getchat.js')(app, db);
  require('/socket.js')(app, io, db);
  require('/listen.js')(http);
});
