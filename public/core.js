var moduloCompromissos = angular.module('moduloCompromissos', []);

function mainController($scope, $http) {
    let vm = $scope;
     
    vm.compromisso = {};
    vm.compromissos = [];
    vm.obterCompromissos = obtemCompromissos;    
    vm.adicionarCompromisso = incluirCompromisso;
    vm.excluirCompromisso = excluiCompromisso;


    vm.obterCompromissos();

    function obtemCompromissos(){                
        $http.get('/compromissos/').then(function(dados){            
            vm.compromissos = dados.data;
        });        
    }

    function incluirCompromisso(){        
       // if (validarPreenchimentoCamposObrigatorios()){   
        var compromissoAdicao = {
          titulo:vm.compromisso.titulo,
          descricao:vm.compromisso.descricao,
          data:vm.compromisso.data
        };

        $http.post('/compromissos/', compromissoAdicao).then(function(data){
             vm.obterCompromissos();
        });  
        //}
    }
    
    function excluiCompromisso(id){        
        $http.delete('/compromissos/' + id).then(function(data){
             vm.obterCompromissos();
        });  
    }

    function validarPreenchimentoCamposObrigatorios(){
        if(validaPreenchimentoCampo(vm.titulo)){
            return "Necessário preenchimento do título!";
        } else if (validaPreenchimentoCampo(vm.descricao)){
            return "Necessário preenchimento do título!";
        } else if (validaPreenchimentoCampo(vm.data)){
            return "Necessário preenchimento da Data e Hora!";
        }
    }

    function validaPreenchimentoCampo(campo){
         if(campo == undefined || campo.length ==0) return false;
    }

}
    