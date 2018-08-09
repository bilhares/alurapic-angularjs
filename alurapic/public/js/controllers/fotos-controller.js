angular.module('alurapic').controller('FotosController', function ($scope, recursoFoto) {
    $scope.filtro = '';
    $scope.fotos = [];
    $scope.mensagem = "";

    recursoFoto.query(function (fotos) {
        $scope.fotos = fotos;
    });

    $scope.remover = function (foto) {

        recursoFoto.delete({ id: foto._id }, function () {
            var indiceFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indiceFoto, 1);
            $scope.mensagem = "Foto removida com sucesso";
        }, function (erro) {
            $scope.foto = "Erro ao remover foto";
        });
    }
});