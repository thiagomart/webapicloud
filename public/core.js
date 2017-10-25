var moduloCompromissos = angular.module('moduloCompromissos', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/api/compromissos')
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