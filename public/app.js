(function() {
  var app = angular.module('indiepages', ['indiepages.controllers', 'indiepages.services', 'ui.router', 'ngResource']);

  app.run(function() {

  });

  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('intro', {
      url: '/',
      cache: false,
      templateUrl: 'templates/intro.html',
      controller: 'AuthCtrl'
    });

    $stateProvider.state('error', {
      url: '/error',
      cache: false,
      templateUrl: 'templates/error.html',
      controller: 'AuthCtrl'
    });

    $stateProvider.state('writer', {
      url: '/writer',
      cache: true,
      templateUrl: 'templates/writer.html',
      controller: 'WriterCtrl'
    });

    $urlRouterProvider.otherwise('/');
  });
})();
