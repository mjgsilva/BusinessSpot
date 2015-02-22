'use strict';

angular.module('businessSpotApp')
  .controller('PublicTenderCtrl', function ($scope, $http, $stateParams, Auth) {
    $scope.tender = {};
    $scope.submission = {};
    $scope.hasSubmissions = false;
    $scope.currentId = $stateParams.id;
    $scope.getCurrentUser = Auth.getCurrentUser();

    $http.get('/api/publictenders/' + $scope.currentId).success(function(tender) {
      $scope.tender = tender;

      // Demo porpuse
      $http.get('/api/lastsubmission/' + $scope.tender._id).success(function(submissions) {
        if (submissions.length > 0) {
          $scope.hasSubmissions = true;
          $scope.submission = submissions[submissions.length-1];
        }
      });
    });

    $scope.create = function(submission) {
      submission.publicTender = $scope.tender._id;
      submission.user = $scope.getCurrentUser._id;
      $http.post('/api/submissions', submission);
    };
  });
