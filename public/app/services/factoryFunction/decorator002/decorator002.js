(function () {

    "use strict";

    angular.module('decorator002', [])

        .controller('ControllerDecorator002', ['$scope', function ($scope) {
            $scope.seleccionado = false;
        }])

        .directive('decorator002', function () {

            return {
                restrict: 'A',
                link: function (scope, element, attributes) {
                    element.on('click', function() {
                        scope.seleccionado = !scope.seleccionado;
                        scope.$apply();
                    })
                }
            }

        })

}());