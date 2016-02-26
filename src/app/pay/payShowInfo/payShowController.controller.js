/**
 * Created by MX on 2015/12/24.
 */
(function (){
    'use strict'

    angular
      .module('pay')
      .controller('PayShowController',PayShowController);

    /** @ngInject */
    function PayShowController($window,$scope,$stateParams,$state,Process,Session,TbConContractInfo,TbPpyPayInfo){
			var vm = this;
			vm.contractId = $stateParams.contractId;
			vm.session = Session.init();

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

      /** 弹出窗口 */
      vm.showModal = function showModal(){
        vm.bbb = $window.showModalDialog('#/qlcpay/pay/accountInfo',{contractId: vm.contractId},'dialogWidth=800px;dialogHeight=450px');
        vm.baseInfo.contract_no = vm.bbb;
      }

      /** 创建支付信息、创建流程 */
      vm.createProcess = function createProcess(){
        TbPpyPayInfo.savePayInfo({//创建支付信息
          payInfo:{
            pay_id: 'payId1',//测试用
            contract_id: vm.contractId,
            project_id: vm.baseInfo.project_id,
            customer_id: vm.baseInfo.customer_id
          }
        }, function(result){//创建支付信息成功
          Process.createWorkFlow({//创建流程
            business_id: result.pay_id,
            type: 'WfiPay',
            business_type: '001',
            module: '001',
            create_userid: vm.session.userid,
            create_orgcode: vm.session.orgCodes
          }, function(){//创建流程成功
            alert("创建流程成功");
            $state.go('workList');
          }, function(){//创建流程失败
            alert("创建流程失败");
          });
        }, function(){//创建支付信息失败
          alert('创建支付信息失败！');
        });
      }

      /** 创建支付信息、创建流程、提交流程*/
      vm.createSubmitProcess = function createSubmitProcess(){
        TbPpyPayInfo.savePayInfo({//创建支付信息
          payInfo:{
            pay_id: 'payId1',//测试用
            contract_id: vm.contractId,
            project_id: vm.baseInfo.project_id,
            customer_id: vm.baseInfo.customer_id
          }
        }, function(result){//创建支付信息成功
          Process.createWorkFlow({//创建流程
            business_id: result.pay_id,
            type: 'WfiPay',
            business_type: '001',
            module: '001',
            create_userid: vm.session.userid,
            create_orgcode: vm.session.orgCodes
          }, function(createSuccess){//创建流程成功
            Process.submitWorkFlow({
              id: createSuccess.id,
              auth: {userid: vm.session.userid},
              conc: {conclusion: '1'},
              data: {plan_type_cd:'1'},
              submit: {action: 'submit', userid: vm.session.userid}
            }, function(result){
              alert('提交流程成功！下一环节为<'+result.state_name+'>');
              $state.go('workList');
            }, function(){
              alert("流程提交失败");
            });
          }, function(){//创建流程失败
            alert("创建流程失败");
          });
        }, function(){//创建支付信息失败
          alert('创建支付信息失败！');
        });
      }
    }

})();
