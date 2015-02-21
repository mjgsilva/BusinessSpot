'use strict';

angular.module('businessSpotApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('publictender', {
        url: '/publictender',
        templateUrl: 'app/publictender/publictender.html',
        controller: 'PublictenderCtrl',
        authenticate: true
      });
  });