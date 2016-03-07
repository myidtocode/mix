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
    .controller('coopModalController',coopModalCntl);
    

  /** @ngInject */
  function coopModalCntl($window,Session,TbCusCustInfo){
    var vm = this;
    vm.session = Session.init();
    vm.tproject_no;

    //Why cannot we write the following code like this:
    //vm.refreshList = function(){...}
    //?
    refreshList();
    vm.refreshList = refreshList;
    function refreshList(){
        vm.rowCollection = TbCusCustInfo.query({
        //handling_user_no: vm.session.userid,
        format: "json"
        }, function(){
            },function(){
                alert("获取信息列表失败");
                }
        );
        }


    vm.itemsByPage=5;

    vm.rowSelected = function(row){
           // vm.tproject_no = row.project_no;
           // var ret = new Array(2);
           // ret[0] = row.project_no;
            var ret = row.cust_name;
            alert("已选中"+ret+"为合作机构");
            window.close();
           // return(vm.tproject_no);
            window.returnValue = ret;
           // window.returnValue = vm.tproject_no;
        }


   // var nowDate = new Date();
   // vm.contract_no = nowDate.toLocaleString();//fake no

    vm.popupw = function popupw(){
        alert(vm.tproject_no);
        }

    vm.closeModal = function closeModal(){
     // $window.returnValue = '123456';
      $window.close();
    }
    

  }

})();
