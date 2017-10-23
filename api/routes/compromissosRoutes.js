'use strict';
module.exports = function(app) {
  var compromissos = require('../controllers/compromissosController');

  // compromissos Routes
  app.route('/tasks')
    .get(compromissos.list_all_tasks)
    .post(compromissos.create_a_task);


  app.route('/tasks/:taskId')
    .get(compromissos.read_a_task)
    .put(compromissos.update_a_task)
    .delete(compromissos.delete_a_task);
};
