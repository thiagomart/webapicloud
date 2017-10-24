'use strict';

var mongoose = require('mongoose'),
 Compromisso = mongoose.model('Compromissos');

exports.listar_todos = function(req, res) {
  Compromisso.find({}, function(err, compromisso) {
    if (err)
      res.send(err);
    res.json(compromisso);
  });
};

exports.criar_compromisso = function(req, res) {
  var novo_compromisso = new Compromisso(req.body);
  novo_compromisso.save(function(err, compromisso) {
    if (err)
      res.send(err);
    res.json(compromisso);
  });
};


exports.buscar_compromisso = function(req, res) {
  Compromisso.findById(req.params.compromissoID, function(err, compromisso) {
    if (err)
      res.send(err);
    res.json(compromisso);
  });
};


exports.atualizar_compromisso = function(req, res) {
  Compromisso.findOneAndUpdate({_id: req.params.compromissoID}, req.body, {new: true}, function(err, compromisso) {
    if (err)
      res.send(err);
    res.json(compromisso);
  });
};


exports.apagar_compromisso = function(req, res) {
  Compromisso.remove({
    _id: req.params.compromissoID
  }, function(err, compromisso) {
    if (err)
      res.send(err);
    res.json({ message: 'Compromisso removido com sucesso!' });
  });
};