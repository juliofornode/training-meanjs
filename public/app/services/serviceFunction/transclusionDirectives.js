(function () {

    "use strict";

    angular.module('transclusionDirectives', [])
        .controller('TDcontroller', ['$scope', function ($scope) {

            $scope.transclusions = [

                {
                    name: "Basic transclusion example",
                    description: "Using transclude: true and ng-transclude",
                    state: 'transclusion001'
                },
                {
                    name: "Transclusion and @ (string) scope parameters",
                    description: "Test questions: the title is passed as @ and the" +
                    " possible answers are transcluded",
                    state: 'transclusion002'
                }


            ];

        }])
        .directive('transclusionDirectives', function () {

        })


}())