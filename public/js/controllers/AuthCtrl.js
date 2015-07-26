(function() {
  'use strict';

  var app = angular.module('indiepages.controllers', []);

  app.controller('AuthCtrl', ['$scope', '$log', '$resource', '$state', 'AuthService',
                              function ($scope, $log, $resource, $state, AuthService) {
    $scope.intro = true;
    $scope.authenticated = false;
    $scope.user = {};

    var user = AuthService.getUser().get(function() {
      if (user && user.firstName) {
        $scope.authenticated = true;
        $scope.user.profile = user;
      }
    });

    $scope.logout = function() {
      AuthService.logout().get(function() {
        $state.go('intro', {}, { reload: true });
      });
    };
  }]);
})();
