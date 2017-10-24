var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  compromisso = require('./public/api/models/compromisso'), //created model loading here
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://thiagomartins:martins@ds227555.mlab.com:27555/dbmongo_cloud', { useMongoClient: true }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./public/api/routes/compromissos_routes'); //importing route
routes(app); //register the route

app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('Gerenciador de Compromissos REST API server started on: ' + port);