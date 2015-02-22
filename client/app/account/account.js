'use strict';

angular.module('businessSpotApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/account/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      })
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/account/settings/settings.html',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/account/profile/profile.html',
        controller: 'ProfileCtrl',
        authenticate: true
      })
      .state('publicTender', {
        url: '/company/publictender/{id:[0-9a-zA-Z-_]*}',
        templateUrl: 'app/account/publictender/publictender.html',
        controller: 'AccountPublicTenderCtrl',
        authenticate: true
      })
      .state('permissions', {
        url: '/company/permissions/{id:[0-9a-zA-Z-_]*}',
        templateUrl: 'app/account/permissions/publictender.html',
        controller: 'AccountPermissionsCtrl',
        authenticate: true
      });
  });