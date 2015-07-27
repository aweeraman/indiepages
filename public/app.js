(function() {
  var app = angular.module('indiepages', ['indiepages.controllers', 'indiepages.services', 'indiepages.directives', 'ui.router', 'ngResource']);

  app.run(function() {

  });

  app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('intro', {
      url: '/',
      views: {
        navbar: {
          templateUrl: 'templates/intro-navbar.html',
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
      views: {
        navbar: {
          templateUrl: 'templates/intro-navbar.html',
          controller: 'AuthCtrl'
        },
        body: {
          templateUrl: 'templates/error.html',
          controller: 'AuthCtrl'
        },
        footer: {
          templateUrl: 'templates/footer.html',
          controller: 'AuthCtrl'
        }
      }
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

    $stateProvider.state('reader', {
      url: '/reader',
      views: {
        navbar: {
          templateUrl: 'templates/navbar.html',
          controller: 'AuthCtrl'
        },
        body: {
          templateUrl: 'templates/reader.html',
          controller: 'ReaderCtrl'
        },
        footer: {
          templateUrl: 'templates/footer.html',
          controller: 'AuthCtrl'
        }
      }
    });

    $stateProvider.state('pro', {
      url: '/pro',
      views: {
        navbar: {
          templateUrl: 'templates/navbar.html',
          controller: 'AuthCtrl'
        },
        body: {
          templateUrl: 'templates/pro.html',
          controller: 'ProCtrl'
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
