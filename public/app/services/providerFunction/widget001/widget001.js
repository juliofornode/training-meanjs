(function () {

    "use strict";

    angular.module('widget001', [])

        .controller('W1Controller', ['$scope', 'elquijote', function ($scope, elquijote) {

            $scope.john = {
                name: "John",
                age: 44,
                sisters: [
                    {
                        name: elquijote.name,
                        age: elquijote.author
                    },
                    {
                        name: "Beth",
                        age: 42
                    },
                    {
                        name: "Lou",
                        age: 40
                    }
                ]
            };

            $scope.mary = {
                name: "Mary",
                age: 45,
                sisters: [
                    {
                        name: "John",
                        age: 44
                    },
                    {
                        name: "Beth",
                        age: 42
                    },
                    {
                        name: "Lou",
                        age: 40
                    }
                ]
            };


        }] )

        .directive('widget001', function () {

            return {

                restrict: "E",

                scope: {
                    user: '=',
                    expand: '@'
                },

                controller: function($scope) {

                    var toBoolean = false;

                    if ($scope.expand === 'true') {
                        toBoolean = true;
                    }

                    $scope.expanded = toBoolean;

                    $scope.toggle = function () {

                        $scope.expanded = !$scope.expanded;

                    };

                    $scope.marked = false;

                    $scope.mark = function () {
                        $scope.marked = !$scope.marked;
                    }

                },

                templateUrl: 'app/services/providerFunction/widget001/widget001.tpl.html',

            }

        });

}());