'use strict';

angular.module('businessSpotApp')
  .controller('PublictenderCtrl', function ($scope, $http, $stateParams) {
    $scope.tender = {};
    $scope.recentSubmission = {};
    $scope.currentId = $stateParams.id;

    $http.get('/api/publictenders/' + $scope.currentId).success(function(tender) {
      $scope.tender = tender;
    });

    $scope.create = function(submission) {
      submission.publicTender = $scope.tender._id;
      $http.post('/api/submissions', submission);
    };
  });
