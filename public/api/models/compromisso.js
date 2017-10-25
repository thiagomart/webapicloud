'use strict';

module.exports = function(mongoose) {
var schema_compromisso = new mongoose.Schema({
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

mongoose.model('Compromissos', schema_compromisso);

}

