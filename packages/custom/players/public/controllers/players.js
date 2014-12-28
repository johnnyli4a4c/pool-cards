'use strict';

/* jshint -W098 */
angular.module('mean.players').controller('PlayersController', ['$scope', '$stateParams', 'Global', 'Players',
  function($scope, $stateParams, Global, Players) {
    $scope.global = Global;
    $scope.package = {
      name: 'players'
    };
    $scope.find = function() {
        Players.query(function(players) {
            console.log(players);
            $scope.players = players;
        });
    };
    $scope.findOne = function() {
        Players.get({
            playerId: $stateParams.playerId
        }, function(player) {
            $scope.player = player;
        });
    };
  }
]);
