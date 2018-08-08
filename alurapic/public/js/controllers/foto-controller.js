angular.module('alurapic').controller('FotoController', function ($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = "";

    if ($routeParams.fotoId) {
        $http.get('v1/fotos/' + $routeParams.fotoId).then(
            function (response) {
                console.log(response);

                $scope.foto = response.data;
            }
        );
    }

    $scope.submeter = function () {
        if ($scope.formulario.$valid) {
            if ($scope.foto._id) {
                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto).then(
                    function (response) {
                        $scope.mensagem = "Atualizado com sucesso";
                    }
                );
            } else {
                $http.post('v1/fotos', $scope.foto).then(
                    function success(response) {
                        $scope.foto = {};
                        $scope.mensagem = "Foto cadastradad com sucesso";
                    },
                    function error(response) {
                        $scope.mensagem = "Erro ao cadastrar";
                    }
                );
            }
        } else {
            $scope.mensagem = "Erro ao cadastrar formulario invalido";
        }
    }
});