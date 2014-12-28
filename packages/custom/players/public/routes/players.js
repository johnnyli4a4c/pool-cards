'use strict';

angular.module('mean.players').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider
        .state('players page', {
          url: '/players',
          templateUrl: 'players/views/list.html'
        })
        .state('players by id', {
            url: '/players/:playerId',
            templateUrl: 'players/views/view.html'
        });
  }
]);
