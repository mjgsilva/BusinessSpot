'use strict';

angular.module('businessSpotApp')
  .controller('CreateCtrl', function ($scope, $http, $stateParams, Auth) {
    $scope.tender = {};
    $scope.getCurrentUser = Auth.getCurrentUser();
    $scope.currentId = $stateParams.id;

    $scope.create = function(tender) {
        tender.userId = $scope.getCurrentUser._id;
        var dateChange = new Date();
        var dateFinish = new Date()
        tender.changePhase = dateChange.setDate(dateChange.getDate() + (tender.finishDay - 2));
        tender.finishing = dateFinish.setDate(dateFinish.getDate() + tender.finishDay);
        $http.post('/api/publictenders', tender);
    }
  });
