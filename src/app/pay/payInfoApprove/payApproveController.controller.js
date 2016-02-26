/**
 * Created by MX on 2015/12/24.
 */
(function (){
    'use strict'

    angular
      .module('pay')
      .controller('PayApproveController',PayApproveController);

    /** @ngInject */
		function PayApproveController($window,$scope,$stateParams,$state,Process,Session,TbConContractInfo,TbPpyPayInfo){
			var vm = this;
			vm.payId = $stateParams.payId;
			vm.processId = $stateParams.processId;
			vm.session = Session.init();
			vm.payInfo = null;//支付信息
			vm.contractInfo = null;//合同信息

      /** 根据支付ID查询支付信息*/
      queryBaseInfo();
      vm.queryBaseInfo = queryBaseInfo;
      function queryBaseInfo(){
        vm.payInfo = TbPpyPayInfo.get({//查询支付信息
          payId: vm.payId
        }, function(result){
          vm.contractInfo = TbConContractInfo.get({//查询合同信息
            contractId: result.contract_id
          }, function(){}, function(){//查询合同失败
						alert('查询合同信息信息失败！');
					});
        }, function(){//查询支付失败
          alert('查询支付信息失败！');
        });
      }

      /** 更新支付信息 */
      vm.updateInfo = function updateInfo(){
        TbPpyPayInfo.updatePayInfo({
          id: vm.payId,
          payInfo:{
            contract_id: vm.payInfo.contract_id
          }
        }, function(){
          alert('保存成功！');
        }, function(){
          alert('保存失败！');
        });
      }

      /** 删除流程和删除业务数据*/
      vm.deleteProcess = function deleteProcess(){}

      /** 创建流程和提交流程 */
      vm.submitProcess = function submitProcess(){
        //保存业务数据
        TbPpyPayInfo.updatePayInfo({
          id:vm.payId,
          data:{
            contract_id: vm.payInfo.contract_id
          }
        }, function(){//保存成功后创建流程并提交
          Process.submitWorkFlow({
            id: vm.processId,
            auth: {
              userid: vm.session.userid,
              dutycodes: vm.session.dutyCodes,
              rolecodes: vm.session.roleCodes,
              orgcodes: vm.session.orgCodes
            },
            conc: {
              conclusion: '1'
            },
            data: {
              plan_type_cd: '1',
              amt: 6000000,
              returned_link: 'Y',
              change_type_cd: '1',
              currency_cd: 'CNY'
            },
            submit: {
              action: 'submit',
              userid: vm.session.userid
            }
          }, function(result){
            alert('提交流程成功！下一环节为<'+result.state_name+'>');
              $state.go('workList');
          }, function(){
            alert("提交流程失败");
          });
        }, function(){
          alert('保存业务数据失败！');
        });

      }

		}
})();
