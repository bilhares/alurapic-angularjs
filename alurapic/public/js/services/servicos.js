angular.module('servicos', ['ngResource'])
    .factory('recursoFoto', function ($resource) {

        return $resource('v1/fotos/:id', null, {
            update: {
                method: 'PUT'
            }
        });

    })
    .factory('cadastroFotos', function (recursoFoto, $q, $rootScope) {
        var servico = {};
        servico.cadastrar = function (foto) {
            return $q(function (resolve, reject) {
                if (foto._id) {
                    recursoFoto.update({ id: foto._id }, foto, function () {
                        $rootScope.$broadcast('fotoCadastrada');
                        resolve({
                            mensagem: 'Foto atualizada com sucesso',
                            inclusao: false
                        });
                    }, function (error) {
                        console.log(error);
                        reject({
                            mensagem: 'Não foi possivel alterar a foto',
                            inclusao: false
                        });
                    });
                } else {
                    recursoFoto.save(foto, function () {
                        $rootScope.$broadcast('fotoCadastrada');
                        resolve({
                            mensagem: 'Foto salva com sucesso',
                            inclusao: true
                        });
                    }, function (error) {
                        console.log(error);
                        reject({
                            mensagem: 'Não foi possivel salvar a foto',
                            inclusao: false
                        });
                    });
                }
            });
        };
        return servico;
    });