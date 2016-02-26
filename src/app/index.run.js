(function() {
  'use strict';

  angular
  .module('pay')
  .run(runBlock)
  ;
  
  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }
  /**
  function monitor($rootScope, AUTH_EVENTS, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
      var authorizedRoles = next.data.authorizedRoles;
      if (!AuthService.isAuthorized(authorizedRoles)) {
        event.preventDefault();
        if (AuthService.isAuthenticated()) {
          // user is not allowed
          $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
        } else {
          // user is not logged in
          $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
        }
      }
    })
  }
  ***/
})();
