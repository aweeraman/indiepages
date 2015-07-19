(function() {
  var service = angular.module('indiepages.services', []);

  service.factory('AuthService', ['$resource', function($resource) {
    var getUser = function() {
      return $resource('/api/v1/user');
    };

    var logout = function() {
      return $resource('/auth/logout');
    }

    return {
      logout: logout,
      getUser: getUser
    };
  }]);
})();
