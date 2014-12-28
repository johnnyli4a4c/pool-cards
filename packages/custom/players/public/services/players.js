'use strict';

//Players service used for articles REST endpoint
angular.module('mean.players').factory('Players', ['$resource',
  function($resource) {
    return $resource('players/:playerId', {
      playerId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
