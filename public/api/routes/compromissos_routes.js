'use strict';
module.exports = function(app) {
  var compromissos = require('../services/compromissos_services');

	app.get('/compromissos/', function(req, res){
    	let retorno = compromissos.listar_todos(req,res);
    	res.send(retorno);

    });
    app.post('/compromissos/criar/', function(req, res){
    	console.log(req.body);
    	const  retorno = compromissos.criar_compromisso(req, res);
    	res.send(retorno);
    });
    app.get('/compromissos/busca/', function(req, res){
    	console.log(req.query);
    	const retorno = compromissos.buscar_compromisso(req,res);
    });
    app.put('/compromissos/atualiza/', function(req, res){
    	compromissos.atualizar_compromisso(req, res);
    	res.send("Atualiza compromisso...");
    });
    app.delete('/compromissos/delete/', function(req, res){
    	compromissos.apagar_compromisso(req, res);
    	res.send("Apagando...");
    });
  
};
