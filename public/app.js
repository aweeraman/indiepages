(function() {
  var app = angular.module('indiepages', ['indiepages.controllers', 'ui.router', 'ngResource']);

  app.run(function() {

  });

  app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('intro', {
      url: '/',
      cache: false,
      templateUrl: 'templates/intro.html',
      controller: 'AuthCtrl'
    });

    $urlRouterProvider.otherwise('/');
  });
})();
