'use strict';
var mongoose = require('mongoose');
var schema = mongoose.Schema;


var schema_compromisso = new Schema({
  Titulo: {
    type: String
  },  
  descricao: {
    type: String,
    required: 'Obrigatório Descrição'
  },
  data: {
    type: Date,
    default: Date.now
  },
  concluido: {
    type: Boolean, 
    default: false
  }
});

module.exports = mongoose.model('Compromissos', schema_compromisso);