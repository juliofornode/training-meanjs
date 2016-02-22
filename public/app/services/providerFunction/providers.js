(function () {

   "use strict";

    angular.module('widgetDirectives', [])

        .provider('elquijote', function () {

                this.$get = function () {

                    var name = "El Quijote";
                    var author = "Miguel de Cervantes";
                    var version = "1.0";

                    if (includeVersionInTitle) {
                        name = name + " " + version;
                    }

                    return {
                        name: name,
                        author: author
                    }

                };

                var includeVersionInTitle = false;

                this.setIncludeVersionInTitle = function (value) {
                    includeVersionInTitle = value;
                }
        })

        .config(function (elquijoteProvider) {

            elquijoteProvider.setIncludeVersionInTitle(true);

        })

        .controller('WDcontroller', ['$scope', function ($scope) {

            $scope.widgets = [

                {
                    name: "Example of simple Provider",
                    description: "The provider function creates a service and allows to configure some of its " +
                    "components in app.config",
                    state: 'widget001'
                }


            ];

        }])

        .directive('widgetDirectives', function () {

        })


}());