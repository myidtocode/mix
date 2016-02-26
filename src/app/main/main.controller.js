(function() {
  'use strict';

  angular
    .module('pay')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($rootScope, $stateParams,Session,AuthService, AUTH_EVENTS, $timeout, webDevTec, toastr) {
    var vm = this;
    vm.userid = $stateParams.userid;
    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1450389958667;
    vm.showToastr = showToastr;
    vm.session = Session.init();

    activate();
    login(vm.userid);

    function login(userid) {
      AuthService.login(userid);
    }

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
