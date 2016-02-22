(function () {

    "use strict";

    angular.module('structuralDirectives', [])

        .value('politician', {

                name: "Felipe",
                lastName: "Gonzalez"

        })

        .controller('SDcontroller', ['$scope', 'politician', function ($scope, politician) {

            $scope.structurals = [

                {
                    name: "This is from Value Function: " + politician.name + " " + politician.lastName,
                    description: "We use transclude: 'element' and the transclude function " +
                    "inside it, we use element.after(cloneOfTranscluded) to replicate what " +
                    "ng-transclude does.",
                    state: 'structural001'
                },
                {
                    name: "Lazy rendering",
                    description: "Render code only if required.",
                    state: 'structural002'
                }


            ];

        }])

        .directive('structuralDirectives', function () {

        })


}());