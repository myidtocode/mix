(function() {
  'use strict';

  angular
    .module('pay')
    .controller('LoginController', LoginController);

  /** @ngInject */
function LoginController($rootScope, AUTH_EVENTS, AuthService){
  var vm = this;
  vm.credentials = {
    username: '',
    password: ''
  };
  vm.login = function (credentials) {
    AuthService.login(credentials).then(function (user) {
      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      vm.setCurrentUser(user);
    }, function () {
      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
    });
  }}
})();
