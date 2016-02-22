(function () {

    "use strict";

    angular.module('directive001', [])

        .controller('Controller001', ['$scope', function ($scope) {

            $scope.types = [
                {
                    name: "The provider function",
                    description: "Creates a configurable provider object. The provider knows how to" +
                    " create the resulting service. Three of the other ways (factory, service, value) call internally the provider" +
                    " function. They are just shorcuts that save you part of the work required to" +
                    " create a provider function."
                },
                {
                    name: "The factory function",
                    description: "It is a wrapper around the provider function. It is the most common function" +
                    " to create services."
                },
                {
                    name: "The service function",
                    description: "It is a wrapper around the factory function. When you call the service function," +
                    " it will internally call the factory function, which will then call the provider function."
                },
                {
                    name: "The value function",
                    description: "It is also a wrapper around the factory function."
                },
                {
                    name: "The constant function",
                    description: "This is the only way that is significantly different from the othe four. It does not" +
                    " call the factory nor the provider functions. It is its own unique kind of service. It is very simple," +
                    " but can be very useful."
                }
            ];

        }])

        .directive('directive001', function () {

            return {
                restrict: 'E',
                templateUrl: 'app/services/home/directive001.tpl.html'
            }

        })





}());