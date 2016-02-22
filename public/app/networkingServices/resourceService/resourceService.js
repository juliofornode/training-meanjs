(function (){

    "use strict";

    angular.module('resourceService', [])

        .factory('booksResource', ['$resource', function ($resource) {

            return $resource('api/books/:book_id', {book_id: '@book_id'},
                {
                    'update': {method: 'PUT'}
                }
            );

        }])

        .controller('ControllerResource', ['$scope', 'booksResource', function ($scope, booksResource) {

            $scope.novelas = booksResource.query();

        }])



}());