'use strict';

angular.module('businessSpotApp')
  .controller('ProfileCtrl', function ($scope, User, Auth) {
    $scope.company = {};
    $scope.hasPublicTenders = false;

    $http.get('/api/company/' + User._id).success(function(company) {
      $scope.company = company;

    });
  });
