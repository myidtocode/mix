/**
 * Created by MX on 2015/12/24.
 */
(function (){
    'use strict'

    angular
      .module('pay')
      .controller('PayController',PayController);

    /** @ngInject */
    function PayController($state,Session,TbConContractInfo){
      var vm = this;
      vm.session = Session.init();

      /** 查询双边支付代办列表 */
      refreshList();
      vm.refreshList = refreshList;
      function refreshList(){
        vm.rowCollection = TbConContractInfo.query({
          handling_user_no: vm.session.userid,
          format: "json"
        }, function(){

        }, function(){
          alert("获取合同信息列表失败");
        });
      }

      /** 每页显示条数 */
      vm.itemsByPage=5;

      /** 跳转到支付操作页面 */
      vm.myWorkJump = function(row){
				$state.go('payShowInfo', {contractId: row.contract_id});
      }

    }

  }
)();
