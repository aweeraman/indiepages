(function() {
  var service = angular.module('indiepages.services');

  service.factory('UserService', ['$resource', function($resource) {
    var getFeed = function() {
      return $resource('/api/v1/feed');
    };

    return {
      getFeed: getFeed
    };
  }]);
})();
