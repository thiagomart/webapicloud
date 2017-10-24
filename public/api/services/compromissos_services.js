'use strict';

var mongoose = require('mongoose'),
   Compromisso = mongoose.model('Compromissos');

exports.listar_todos_compromissos = function(req, res) {
  Compromisso.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.criar_compromisso = function(req, res) {
  var new_task = new Compromisso(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.buscar_compromisso = function(req, res) {
  Compromisso.findById(req.params.compromissoID, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.atualizar_compromisso = function(req, res) {
  Compromisso.findOneAndUpdate({_id: req.params.compromissoID}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.apagar_compromisso = function(req, res) {
  Compromisso.remove({
    _id: req.params.compromissoID
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Compromisso removido com sucesso!' });
  });
};