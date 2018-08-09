angular.module('alurapic').controller('FotoController', function ($scope, $routeParams, recursoFoto, cadastroFotos) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.fotoId) {
        recursoFoto.get({ id: $routeParams.fotoId }, function (response) {
            console.log(response);
            $scope.foto = response;
        });

    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            cadastroFotos.cadastrar($scope.foto).then(
                function success(response){
                    $scope.mensagem = response.mensagem;
                    if(response.inclusao){
                        $scope.foto = {};
                    };     
                },
                function error(response){
                    $scope.mensagem = response.mensagem;
                }
            );
        }
    }
});