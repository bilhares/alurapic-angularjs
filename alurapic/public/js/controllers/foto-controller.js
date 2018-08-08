angular.module('alurapic').controller('FotoController', function ($scope, $http) {
    $scope.foto = {};
    $scope.mensagem = "";

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            console.log($scope.foto);
            $http.post('v1/fotos', $scope.foto).then(
                function success (response) {
                    $scope.foto = {};
                    $scope.mensagem = "Foto cadastradad com sucesso";
                },
                function error(response){
                    $scope.mensagem = "Erro ao cadastrar";
                }
            );
        }else{
            $scope.mensagem = "Erro ao cadastrar formulario invalido";
        }
    }
});