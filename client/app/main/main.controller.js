'use strict';

angular.module('businessSpotApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.publicTenders = [];

    $http.get('/api/publictenders').success(function(publicTenders) {
      $scope.publicTenders = publicTenders;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
