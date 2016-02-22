(function () {

    "use strict";

    angular.module('structural002', [])
        .controller('ControllerStructural002', ['$scope', function ($scope) {

        }])
        .directive('structural002', function () {

            return {

                restrict: 'A',
                transclude: 'element',

                link: function (scope, element, attributes, controller, transclude) {

                    var hasBeenShowed = false;

                    var unWatch = scope.$watch(attributes.structural002, function (newValue) {

                        if ( newValue && !hasBeenShowed) {

                            hasBeenShowed = true;

                            transclude(scope, function (clone) {

                                element.after(clone);

                            })

                            unWatch();

                        }

                    });



                }

            }

        })

}());