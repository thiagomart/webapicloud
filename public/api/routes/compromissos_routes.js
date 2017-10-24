'use strict';
module.exports = function(app) {
  var compromissos = require('../services/compromissos_services');

  // Compromissos Routes
  app.route('/compromissos')
    .get(compromissos.listar_todos_compromissos)
    .post(compromissos.criar_compromisso);

  app.route('/compromissos/:compromissoID')
    .get(compromissos.buscar_compromisso)
    .put(compromissos.atualizar_compromisso)
    .delete(compromissos.apagar_compromisso);
};
