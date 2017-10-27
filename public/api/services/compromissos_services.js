'use strict';

var mongoose = require('mongoose');
var Compromisso = mongoose.model('Compromissos');

exports.listar_todos = function(req, res) {    
   Compromisso.find(function(err, compromissos) {
      if (err){
          res.send(err)
      }
      res.json(compromissos); 
  });
};

exports.criar_compromisso = function(req, res) {
  console.log(req.body);
  Compromisso.create({
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
  console.log(id);  
    Compromisso.findById({_id:id}, function(err, compromissos) {
        if (err)
            res.send(err)

        res.json(compromissos); 
    });
  /*Compromisso.findOne({_id:id}, function(err, compromisso) {
    if (err)
      return err;
    return compromisso;
  }).then(function(response){
    res.send(response);
  });*/
};


exports.atualizar_compromisso = function(req, res) {
  Compromisso.findOneAndUpdate({_id: req.query.id}, req.body, {new: true}, function(err, compromisso) {
    if (err)
      return err;
    return compromisso;
  });
};


exports.apagar_compromisso = function(req, res) {
  var id = mongoose.Types.ObjectId(req.params.id); 
  Compromisso.remove({
    _id: id
  }, function(err, compromissos) {
      if (err){
        res.send(err);
      }
    res.send('Compromisso removido com sucesso!');
  });
};