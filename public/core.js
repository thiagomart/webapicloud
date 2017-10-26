var moduloCompromissos = angular.module('moduloCompromissos', []);

function mainController($scope, $http) {
    let vm = $scope;
     
    vm.formData = {};
    vm.compromissos = [];


    vm.obterCompromissos = obtemCompromissos;    

    vm.obterCompromissos();

    function obtemCompromissos(){                
        $http.get('/compromissos/').then(function(data){
            vm.compromissos = data;
        });        
    }

}
