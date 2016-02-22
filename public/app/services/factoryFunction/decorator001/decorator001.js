(function () {

    "use strict";

    angular.module('decorator001', [])

        .factory('auto', function () {
            var brand = "Honda";
            var model = "Odyssey";

            return {
                brand: brand,
                model: model
            }

        })

        .controller('ControllerDecorator001', ['$scope', 'auto', function($scope, auto) {
            $scope.mySize = 200;
            $scope.myAuto = auto.brand + " " + auto.model;
        }])

        .directive('decorator001', function() {
            return {
                restrict: 'A',
                link: function (scope, element, attributes) {

                    scope.$watch(attributes.decorator001, function(newValue) {

                        element.css('font-size', newValue + '%');

                    })


                }
            }
        })

}());