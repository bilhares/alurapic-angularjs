angular.module('alurapic').controller('FotosController', function ($scope, $http) {
    $scope.filtro = '';

    $http.get('v1/fotos').then(
        function success(response) {
            $scope.fotos = response.data;
        }
    );
});