(function() {
    'use strict';

    var app = angular.module('indiepages.controllers');

    app.controller('ReaderCtrl', ['$scope', '$log', '$resource', '$state', 'AuthService', 'UserService',
        function ($scope, $log, $resource, $state, AuthService, UserService) {
            $scope.intro = false;
            $scope.context = "Reader";
            $scope.feed = {};

            var stories = UserService.getFeed().get(function() {
                $scope.feed.stories = stories;
            });
        }]);
})();
