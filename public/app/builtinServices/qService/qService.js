(function () {

   "use strict";

    angular.module("qService", [])

        // we use $timeout here to simulate the delay when getting data from the server.

        .factory('segundolibro', ['$q', '$timeout', function ($q, $timeout) {

            return {
                getBook: getBook
            };


            //the function getBook does not return the data, but a promise to get the data
            function getBook () {

                //name is the data
                var name = "El Quijote";

                //we create a promise called "myPromise"
                var myPromise = $q.defer();

                $timeout(function () {

                    var successful = true;

                    if (successful) {
                        myPromise.notify('getting the data...');
                        myPromise.resolve(name);
                    }

                    else {
                        myPromise.reject('rechazado');
                    }

                }, 2000);


                return myPromise.promise;

            }



        }])

        .controller('ControllerQ', ['$scope', 'segundolibro', function ($scope, segundolibro) {

            segundolibro.getBook()
                .then(getBookSuccess, getBookFailure, getBookNotifications);

            function getBookSuccess (name) {
                $scope.libro = name;
            }

            function getBookFailure (reasonOfFailure) {
                console.log(reasonOfFailure);
            }

            function getBookNotifications (message) {
                console.log(message);
            }


        }])


}());