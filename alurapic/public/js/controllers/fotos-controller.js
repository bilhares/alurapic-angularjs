angular.module('alurapic').controller('FotosController', function ($scope, $http) {
    $scope.filtro = '';
    $scope.fotos = [];
    $scope.mensagem = "";

    $http.get('v1/fotos').then(
        function success(response) {
            $scope.fotos = response.data;
        }
    );

    $scope.remover = function (foto) {
        $http.delete('v1/fotos/' + foto._id).then(
            function success(response) {
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = "Foto removida com sucesso";
            },
            function error(response) {
                $scope.foto = "Erro ao remover foto";
            }
        );
    }
});