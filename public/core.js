var moduloCompromissos = angular.module('moduloCompromissos', []);

function mainController($scope, $http) {
    let vm = $scope;
     
    vm.formData = {};
    vm.compromissos = [];
    vm.obterCompromissos = obtemCompromissos;    
    vm.adicionarCompromisso = incluirCompromisso;

    vm.obterCompromissos();
    //vm.adicionarCompromisso();

    function obtemCompromissos(){                
        $http.get('/compromissos/').then(function(dados){            
            vm.compromissos = dados.data;
        });        
    }

    function incluirCompromisso(){                
        $http.post('/compromissos/', vm.formData).then(function(data){            
            vm.obterCompromissos();
        });        
    }

}
    