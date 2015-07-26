(function() {
  var app = angular.module('indiepages', ['indiepages.controllers', 'indiepages.services', 'ui.router', 'ngResource']);

  app.run(function() {

  });

  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('intro', {
      url: '/',
      views: {
        navbar: {
          templateUrl: 'templates/navbar.html',
          controller: 'AuthCtrl'
        },
        body: {
          templateUrl: 'templates/intro.html',
          controller: 'AuthCtrl'
        },
        footer: {
          templateUrl: 'templates/footer.html',
          controller: 'AuthCtrl'
        }
      }
    });

    $stateProvider.state('error', {
      url: '/error',
      templateUrl: 'templates/error.html',
      controller: 'AuthCtrl'
    });

    $stateProvider.state('writer', {
      url: '/writer',
      views: {
        navbar: {
          templateUrl: 'templates/navbar.html',
          controller: 'AuthCtrl'
        },
        body: {
          templateUrl: 'templates/writer.html',
          controller: 'WriterCtrl'
        },
        footer: {
          templateUrl: 'templates/footer.html',
          controller: 'AuthCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/');
  });
})();
