angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        return {
            restrict: "AE",
            scope: {
                titulo: '@titulo'
            },
            transclude:true,
            templateUrl:'js/directives/meu-painel.html'
        };
    })
    .directive('minhaFoto', function() {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';           

        return ddo;

    });