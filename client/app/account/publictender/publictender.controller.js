'use strict';

angular.module('businessSpotApp')
  .controller('AccountPublicTenderCtrl', function ($scope, $http, $stateParams, Auth) {
    $scope.tender = {};
    $scope.currentId = $stateParams.id;
    $scope.hasSubmissions = false;
    $scope.submissions = {}

    $http.get('/api/publictenders/' + $scope.currentId).success(function(tender) {
      $scope.tender = tender;

      // Demo porpuse
      $http.get('/api/lastsubmission/' + $scope.tender._id).success(function(submissions) {
        if (submissions.length > 0) {
          $scope.hasSubmissions = true;
          $scope.submissions = submissions;
        }
      });
    });
  });