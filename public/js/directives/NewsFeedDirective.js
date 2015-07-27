(function() {
    'use strict';

    var app = angular.module('indiepages.directives', []);

    app.directive('newsFeed', function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/news-feed.html',
            scope: {
                stories: '='
            }
        };
    });
})();