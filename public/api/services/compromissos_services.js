'use strict';

var mongoose = require('mongoose');
var model = mongoose.model('Compromissos');

exports.listar_todos = function(req, res) {    
  model.find(function(err, compromissos) {
    if (err){
        res.send(err)
    }
    res.json(compromissos); 
  });
};

exports.criar_compromisso = function(req, res) {
  model.create({
    titulo : req.body.titulo,
    descricao : req.body.descricao,
    data : req.body.data
  }, function(err, compromisso) {            
    if (err){
        res.send(err)
    }
    res.json(compromisso); 
  });
};


exports.buscar_compromisso = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query.id);
  model.findById({_id:id}, function(err, compromissos) {    
    if (err){
        res.send(err)
        console.log(err);
    }
    res.json(compromissos); 
  });
};

exports.atualizar_compromisso = function(req, res) {
  Compromisso.findOneAndUpdate({_id: req.query.id}, req.body, {new: true}, function(err, compromisso) {
   if (err){
        res.send(err);
    }
    res.send(compromisso);
  });
};

exports.apagar_compromisso = function(req, res) {
  var id = mongoose.Types.ObjectId(req.params.id); 
  model.remove({
    _id: id
  }, function(err, compromissos) {
      if (err){
        res.send(err);
      }
      res.send('Compromisso removido com sucesso!');
  });
};