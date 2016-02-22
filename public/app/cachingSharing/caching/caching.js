(function () {

    "use strict";

    angular.module('caching', [])
        .controller('ControllerCaching', ['$scope', '$cacheFactory', function ($scope, $cacheFactory) {

            //creates an empty array for the keys so it can track the length in the view
            $scope.keys = [];

            $scope.cachedObject = $cacheFactory('cacheId');

            $scope.saveToCachedObject = function (key, value) {

                //if the key is not already there, push the key to the keys array
                if (angular.isUndefined($scope.cachedObject.get(key))) {

                    $scope.keys.push(key);

                }

                //save key and value (or null if no value)
                $scope.cachedObject.put(key, angular.isUndefined(value) ? null : value);
                $scope.newCacheKey = "";
                $scope.newCacheValue= "";

            }

        }]);


}());