'use strict';
module.exports = function(app) {
  var services = require('../services/compromissos_services');

	app.get('/compromissos', services.listar_todos);
    app.post('/compromissos', services.criar_compromisso);
    app.get('/compromissos/:id', services.buscar_compromisso);
    app.put('/compromissos', services.atualizar_compromisso);
    app.delete('/compromissos', services.apagar_compromisso);
  
};
