'use strict';

angular.module('businessSpotApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/create',
        templateUrl: 'app/create/create.html',
        controller: 'CreateCtrl',
        authenticate: true
      });
  });