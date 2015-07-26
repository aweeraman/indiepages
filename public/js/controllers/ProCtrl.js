(function() {
    'use strict';

    var app = angular.module('indiepages.controllers');

    app.controller('ProCtrl', ['$scope', '$log', '$resource', '$state', 'AuthService',
        function ($scope, $log, $resource, $state, AuthService) {
            $scope.intro = false;
            $scope.context = "Professional";
        }]);
})();
