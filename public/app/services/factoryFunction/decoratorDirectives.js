(function () {

    "use strict";

    angular.module('decoratorDirectives', [])
        .controller('DDcontroller', ['$scope', function ($scope) {

            $scope.decorators = [

                {
                    name: "Increase font size",
                    description: "Increases the font size of the element with the custom size entered. " +
                    "Uses the link function, scope.$watch and element.css",
                    state: 'decorator001'
                },
                {
                    name: "Change font color",
                    description: "Changes the font color when you click in the div.",
                    state: "decorator002"

                }


            ];

        }])



}())