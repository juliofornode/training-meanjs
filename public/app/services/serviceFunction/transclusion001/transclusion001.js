(function () {

    "use strict";

    // Example of inheritance to demonstrate the use of the service function.
    var Team = function () {
        this.hymn = "oe, oe, oe";
    };

    var soccerTeam = function () {

        Team.call(this);

        this.numberOfPlayers = 11;

    };

    soccerTeam.prototype = Object.create(Team.prototype);



    angular.module('transclusion001', [])

        .service('soccerTeam', soccerTeam)

        .controller('ControllerTransclusion001', ['$scope', 'soccerTeam', function ($scope, soccerTeam) {

            $scope.himno = soccerTeam.hymn;
            $scope.jugadores = soccerTeam.numberOfPlayers;

        }])

        .directive('transclusion001', function () {

            return {

                restrict: 'A',
                transclude: true,
                template: '<ng-transclude/><p>This is transcluded. <b>And this comes from the service:</b> A soccer team has {{ jugadores }} players, and its hymn is {{ himno }}.</p>'

            }

        })


}());