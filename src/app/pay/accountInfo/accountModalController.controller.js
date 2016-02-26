/**
 * Created by MX on 2016/1/26.
 */
/**
 * Created by MX on 2015/12/24.
 */
(function (){
  'use strict'

  angular
    .module('pay')
    .controller('AccountModalController',AccountModalController);

  /** @ngInject */
  function AccountModalController($window,Session,TbConContractInfo){
    var vm = this;
    vm.session = Session.init();
    vm.contractId = $window.dialogArguments.contractId;

    /** 查询业务信息 */
    queryBaseInfo();
    vm.queryBaseInfo = queryBaseInfo;
    function queryBaseInfo(){
      vm.baseInfo = TbConContractInfo.get({
        contractId: vm.contractId
      }, function(){

      }, function(){
        alert("查询明细信息失败");
      });
    }

    vm.closeModal = function closeModal(){
      $window.returnValue = '123456';
      $window.close();
    }

  }

})();
