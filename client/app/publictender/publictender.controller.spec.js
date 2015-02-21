'use strict';

describe('Controller: PublictenderCtrl', function () {

  // load the controller's module
  beforeEach(module('businessSpotApp'));

  var PublictenderCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PublictenderCtrl = $controller('PublictenderCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
