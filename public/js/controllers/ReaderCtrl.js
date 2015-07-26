(function() {
    'use strict';

    var app = angular.module('indiepages.controllers');

    app.controller('ReaderCtrl', ['$scope', '$log', '$resource', '$state', 'AuthService',
        function ($scope, $log, $resource, $state, AuthService) {
            $scope.intro = false;
            $scope.context = "Reader";
        }]);
})();
