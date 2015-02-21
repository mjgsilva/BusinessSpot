'use strict';

angular.module('businessSpotApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('publictender', {
        url: '/publictender/{id:[0-9a-zA-Z-_]*}',
        templateUrl: 'app/publictender/publictender.html',
        controller: 'PublictenderCtrl',
        authenticate: true
      })
  });