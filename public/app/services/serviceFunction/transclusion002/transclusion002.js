(function () {

    "use strict";

    angular.module('transclusion002', [])
        .controller('ControllerTransclusion002', ['$scope', function ($scope) {

        }])
        .directive('transclusion002', function () {

            return {

                restrict: 'A',

                transclude: true,

                scope: {
                  question: '@'
                },

                templateUrl: 'directives/transclusionDirectives/transclusion002/transclusion002.tpl.html'


            }

        })


}());