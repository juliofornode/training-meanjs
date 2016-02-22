(function () {

    "use strict";

    angular.module('httpService', [])

        .factory('book', ['$http', '$cacheFactory', function ($http, $cacheFactory) {

            return {
                getAll: getAll,
                getOneById: getOneById,
                putUpdateOne: putUpdateOne,
                createOne: createOne,
                deleteOne: deleteOne
            };

            function getAll () {
                return $http({
                    method: 'GET',
                    url: 'api/books',
                    cache: true
                })
                    .then(getResponse)
                    .catch(getError);

            }

            //Clear the cached object. To be used in the CRUD operations that
            //change the server data. Important: call it in the operations defined
            //in the service, not in the controller. And call it before returning
            //the new $http object.
            function clearCache () {

                var cachedObject = $cacheFactory.get('$http');

                cachedObject.remove('api/books');

            }

            function getOneById (bookId) {
                return $http({
                    method: 'GET',
                    url: 'api/books/' + bookId
                })
                    .then(getResponse)
                    .catch(getError);
            }

            function putUpdateOne (book) {

                clearCache();

                return $http({
                    method: 'PUT',
                    url: 'api/books/' + book.book_id,
                    data: book
                })
                    .then(getUpdateResponse)
                    .catch(getError);
            }

            function createOne (newBook) {

                clearCache();

                return $http({
                    method: 'POST',
                    url: 'api/books',
                    data: newBook
                })
                    .then(createOneResponse)
                    .catch(getError)
            }

            function deleteOne (bookId) {

                clearCache();

                return $http({
                    method: 'DELETE',
                    url: 'api/books/' + bookId
                })
                    .then(deleteOneResponse)
                    .catch(getError);
            }

            function getResponse (response) {
                return response.data;
            }

            function getUpdateResponse (response) {
                return "Updated:" + response.config.data.title;
            }

            function createOneResponse (response) {
                return "Created:" + response.config.data.title;
            }

            function deleteOneResponse (response) {
                console.log("deleted");
            }

            function getError (error) {
                return $q.reject ("Error: " + response.status);
            }


        }])

        .controller('ControllerGetAll', ['$scope', 'book', '$stateParams', '$state', function ($scope, book, $stateParams, $state) {

            book.getAll ()
                .then (getAllSuccess)
                .catch (getAllError);

            function getAllSuccess (theBooks) {
                $scope.libros = theBooks;
            }

            function getAllError (error) {
                console.log(error);
            }

            $scope.deleteOne = function (bookId) {

                book.deleteOne(bookId)
                    .then(deleteSuccess)
                    .catch(deleteError);

            };

            function deleteSuccess (response) {
                console.log('deleted');
                $state.go($state.current, {}, {reload: true});
            }

            function deleteError (error) {
                console.log(error);
            }

        }])

        .controller('ControllerUpdateOne', ['$scope', 'book', '$stateParams', '$location', function ($scope, book, $stateParams, $location) {

            book.getOneById($stateParams.bookId)
                .then(getOneByIdSuccess)
                .catch(getOneByIdError);

            function getOneByIdSuccess (libro) {
                $scope.libro = libro;
            }

            function getOneByIdError (error) {
                $log(error);
            }

            $scope.saveBook = function () {

                book.putUpdateOne($scope.libro)
                    .then(saveSuccess)
                    .catch(saveError);

            };

            function saveSuccess (libro) {
                console.log(libro, " updated");
                $location.path('getAll');
            }

            function saveError (error) {
                console.log(error);
            }

        }])

        .controller('ControllerCreateOne', ['$scope', 'book', '$location', function ($scope, book, $location) {

            $scope.newBook = {};

            $scope.createOne = function () {

                book.createOne($scope.newBook)
                    .then(createSuccess)
                    .catch(createError);

            };

            function createSuccess (response) {
                console.log(response);
                $location.path('getAll');
            }

            function createError (error) {
                console.log(error);
            }

        }])

}());