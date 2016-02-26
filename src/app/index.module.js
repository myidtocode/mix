(function() {
  'use strict';

  angular
  .module('pay', ['ngAnimate', 'ngCookies', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'mgcrea.ngStrap', 'toastr', 'smart-table', 'configuration', 'pascalprecht.translate'])
  .factory('Process', function($resource, WORKFLOW_IP) {
    return $resource(WORKFLOW_IP + '/process/:processId', {
      processId: '@id',
      format: 'json'
    }, {
      createWorkFlow:{
        method: 'POST'
      },
      submitWorkFlow:{
        method: 'PUT'
      }
    });
  })
  .factory('UserRight', function($resource, CACHE_IP) {
    return $resource(CACHE_IP + '/cache/user_rights/:userid.json', { userid: '@id' });
  })
  .factory('TbConContractInfo',  function($resource, CACHE_IP){
    return $resource(CACHE_IP + '/api/v1/con_contract_infos/:contractId', { contractId: '@id' });
  })
  .factory('TbPpyPayInfo',  function($resource, CACHE_IP){
    return $resource(CACHE_IP + '/api/v1/ppy_pay_infos/:payId', {
      payId: '@id',
      format: 'json'
    }, {
      savePayInfo:{
        method: 'POST'
      },
      updatePayInfo:{
        method: 'PUT'
      }
    });
  });

})();
