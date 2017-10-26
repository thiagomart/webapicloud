var angular = require('angular');
var moduloCompromissos = angular.module('moduloCompromissos', []);

;(function(angular) {
    angular.module('moduloCompromissos', ['ngResource']);
    angular.bootstrap(document.body, ['moduloCompromissos']);
})(angular);

function mainController($scope, $http) {
    
    $scope.formData = {};
    $scope.itens = [
        {produto: 'Leite', quantidade: 2, comprado: false},
        {produto: 'Cerveja', quantidade: 12, comprado: false}
    ];

    $http.get('/api/compromissos/')
        .success(function(data) {
            $scope.compromissos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });


    $scope.createCompromisso= function() {
        $http.post('/api/compromissos', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.compromissos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    $scope.deleteCompromisso = function(id) {
        $http.delete('/api/compromissos/' + id)
            .success(function(data) {
                $scope.compromissos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}
