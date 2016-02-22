(function () {

    "use strict";

    angular.module('structural001', [])
        .controller('ControllerStructural001', ['$scope', function ($scope) {
            $scope.numbers = [1,2,3];

        }])
        .directive('structural001', function () {
            return {
                restrict: 'A',
                transclude: 'element',
                link: function (scope, element, attributes, controller, transclude) {

                    transclude(scope, function(cloneOfTranscluded) {
                        element.after(cloneOfTranscluded);
                    })

                }
            }

        })


}());