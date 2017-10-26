var express  = require('express');
var app      = express();                         
var mongoose = require('mongoose');               
var morgan = require('morgan');             
var bodyParser = require('body-parser');    
var methodOverride = require('method-override'); 
var port = process.env.PORT || 3000;


  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://thiagomartins:martins@ds227555.mlab.com:27555/dbmongo_cloud', { useMongoClient: true }); 
var compromisso = require('./public/api/models/compromisso')(mongoose);

 	app.use(express.static(__dirname + '/public'));                 
    app.use(morgan('dev'));                                         
    app.use(bodyParser.urlencoded({'extended':'true'}));            
    app.use(bodyParser.json());                                     
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 
    app.use(methodOverride());



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