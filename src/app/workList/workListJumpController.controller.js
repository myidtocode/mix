/**
 * Created by MX on 2015/01/06.
 */
(function (){
    'use strict'

    angular
      .module('pay')
      .controller('WorkListJumpController',WorkListJumpController);

    /** @ngInject */
    function WorkListJumpController($state,$stateParams){
      var vm = this;
      vm.bizId = $stateParams.bizId;
      vm.businessType = $stateParams.businessType;
      vm.processId = $stateParams.processId;

      /** 根据bizType判断跳转到具体的业务操作界面 */
      if(vm.businessType == '001'){
        $state.go('payInfoApprove', {
          payId: vm.bizId,
          processId: vm.processId});
      }

    }
})();
