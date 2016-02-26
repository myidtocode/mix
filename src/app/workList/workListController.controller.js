/**
 * Created by MX on 2015/01/06.
 */
(function (){
    'use strict'

    angular
      .module('pay')
      .controller('WorkListController',WorkListController);

    /** @ngInject */
    function WorkListController($state,Process,Session){
      var vm = this;
      vm.session = Session.init();

      /** 查询我的工作列表 */
      refreshList();
      vm.refreshList = refreshList;
      function refreshList(){
        vm.rowCollection = Process.query({
          userid: vm.session.userid,
          rolecodes: vm.session.roleCodes,
          orgcodes: vm.session.orgCodes,
          dutycodes: vm.session.dutyCodes
        }, function(){

        }, function(){
          alert("查询待办任务失败");
        });
      }

      /** 每页显示条数 */
      vm.itemsByPage=5;

      /** 跳转到具体业务操作界面 */
      vm.myWorkJump = function(row){
				$state.go('workListJump', {
          bizId: row.business_id,
          processId: row.id,
          businessType: row.business_type
        });
      }

    }
})();
