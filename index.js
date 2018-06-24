var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + '/newsletter')));
app.use("/styles", express.static(__dirname + '/newsletter/styles'));
app.use("/images", express.static(__dirname + '/newsletter/images'));
app.use("/scripts", express.static(__dirname + '/newsletter/scripts'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'newsletter/views/index.html'));
});

// add other routes below
app.get('/about', function (req, res) {
  res.sendFile(path.join(__dirname + 'newsletter/views/about.html'));
});

app.listen(process.env.PORT || 3000 );