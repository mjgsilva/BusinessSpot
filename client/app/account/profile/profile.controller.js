'use strict';

angular.module('businessSpotApp')
  .controller('ProfileCtrl', function ($scope, $http, Auth) {
    $scope.company = {};
    $scope.publicTenders = {};
    $scope.hasPublicTenders = false;
    $scope.getCurrentUser = Auth.getCurrentUser();

    $http.get('/api/company/' + $scope.getCurrentUser._id).success(function(company) {
      $scope.company = company;

      // Demo porpuse
      $http.get('/api/company/publictenders/' + $scope.company._id).success(function(publicTenders) {
        if (publicTenders.length > 0) {
          $scope.hasPublicTenders = true;
          $scope.publicTenders = publicTenders;
        }
      });
    });
  });
