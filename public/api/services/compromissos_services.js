'use strict';

var mongoose = require('mongoose'),
 Compromisso = mongoose.model('Compromissos');

exports.listar_todos = function(req, res) {
  Compromisso.find({}, function(err, compromisso) {
    if (err)
      return err;
    return compromisso;
  });
};

exports.criar_compromisso = function(req, res) {
  var novo_compromisso = new Compromisso(req.body);
  console.log(novo_compromisso);
  novo_compromisso.save(function(err, compromisso) {
    if (err)
      return err;
    return compromisso;
  });
};


exports.buscar_compromisso = function(req, res) {
  Compromisso.findById(req.query.id, function(err, compromisso) {
    if (err)
      return err;
    return compromisso;
  }).then(function(response){
    res.send(response);
  });
};


exports.atualizar_compromisso = function(req, res) {
  Compromisso.findOneAndUpdate({_id: req.query.id}, req.body, {new: true}, function(err, compromisso) {
    if (err)
      return err;
    return compromisso;
  });
};


exports.apagar_compromisso = function(req, res) {
  Compromisso.remove({
    _id: req.query.id
  }, function(err, compromisso) {
    if (err)
      return err;
    return 'Compromisso removido com sucesso!';
  }).then(function(response){
    res.send(response);
  });
};