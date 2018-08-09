angular.module('minhasDiretivas', [])
    .directive('meuPainel', function () {
        return {
            restrict: "AE",
            scope: {
                titulo: '@titulo'
            },
            transclude: true,
            templateUrl: 'js/directives/meu-painel.html'
        };
    })
    .directive('minhaFoto', function () {

        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}">';

        return ddo;

    })
    .directive('meuBotaoPerigo', function () {
        var ddo = {};

        ddo.restrict = "AE";

        ddo.scope = {
            acao: '&',
            nome: '@'
        };

        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao(foto)">{{nome}}</button>';

        return ddo;
    })
    .directive('meuFocus', function () {
        ddo = {};
        ddo.restrict = "A";
        // ddo.scope = {
        //     focado: '='
        // };
        ddo.link = function (scope, element) {
            // scope.$watch('focado', function () {
            //     if (scope.focado) {
            //         element[0].focus();
            //         scope.focado= false;
            //     }
            // });
            scope.$on('fotoCadastrada', function () {
                element[0].focus();
            });
        }
        return ddo;
    })
    ;