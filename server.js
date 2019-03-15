const express = require('express');
var path = require('path');

//App setup
const app = express();
const server = require('http').createServer(app);
server.listen(process.env.PORT || 4000 , function () {
  console.log('Server is up!');
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, 'public/about.html'));
});
