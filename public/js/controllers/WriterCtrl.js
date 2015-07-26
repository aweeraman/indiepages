(function() {
    'use strict';

    var app = angular.module('indiepages.controllers');

    app.controller('WriterCtrl', ['$scope', '$log', '$resource', '$state', 'AuthService', 'UserService',
        function ($scope, $log, $resource, $state, AuthService, UserService) {
            $scope.intro = false;
            $scope.context = "Writer";
        }]);
})();
