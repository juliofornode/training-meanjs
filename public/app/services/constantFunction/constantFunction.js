(function () {

    "use strict";

    angular.module('constantFunction', [])

        .constant('constants', {
            COUNTRY: "USA",
            STATE: "California"
        })

        .controller('ControllerConstant', ['$scope', 'constants', function ($scope, constants) {

            $scope.pais = constants.COUNTRY;
            $scope.estado = constants.STATE;

        }])

}());