var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://thiagomartins:martins@ds227555.mlab.com:27555/dbmongo_cloud', { useMongoClient: true }); 
var compromisso = require('./public/api/models/compromisso')(mongoose);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

var routes = require('./public/api/routes/compromissos_routes');
routes(app); 

app.listen(port);

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Gerenciador de Compromissos REST API server started on: ' + port);