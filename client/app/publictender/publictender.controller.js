'use strict';

angular.module('businessSpotApp')
  .controller('PublictenderCtrl', function ($scope, $http, $stateParams) {
    $scope.tender = {};
    $scope.currentId = $stateParams.id;

    $http.get('/api/publictenders/' + $scope.currentId).success(function(tender) {
      $scope.tender = tender;
    });
  });
