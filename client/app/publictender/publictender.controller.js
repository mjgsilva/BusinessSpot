'use strict';

angular.module('businessSpotApp')
  .controller('PublictenderCtrl', function ($scope, $http, $stateParams) {
    $scope.tender = {};
    $scope.submissions = {};
    $scope.hasSubmissions = false;
    $scope.currentId = $stateParams.id;

    $http.get('/api/publictenders/' + $scope.currentId).success(function(tender) {
      $scope.tender = tender;
    });

    // Demo porpuse
    $http.get('/api/submissions/').success(function(submissions) {
      if (submissions.length > 0)
        $scope.hasSubmissions = true
    });

    $scope.create = function(submission) {
      submission.publicTender = $scope.tender._id;
      $http.post('/api/submissions', submission);
    };
  });
