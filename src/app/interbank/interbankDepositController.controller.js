/**
 * Created by MX on 2015/12/24.
 */

(function (){
    'use strict'

    angular
      .module('pay')
      .controller('interDepositController',interDepositCntl);
    
    function interDepositCntl($window,TbIntbkDepositInfo, Session){
            
           // $scope.myForm= {}; 

            var vm = this;
            var nowDate = new Date();
            vm.depositNo = nowDate.toLocaleString();//fake deposit no
            vm.session = Session.init();
            //vm.project_no = 2;
           // vm.myForm;

            //vm.amt="22";
           // var vm1 = this;
           // $scope.amt = "22";
          //  var t = $scope.amt;

            //The size of the showmodal doesn't work, but after I change the size of the modal by dragging it, the size will be changed and stay.
            vm.showModal = function showModal(){
                var ret = $window.showModalDialog('#/interBankDeposit/depositStartInfo/coopInfo','dialogWidth:800px;dialogHeight:450px');
                vm.cust_name = ret;
                }

               

           // $scope.myname="G";
           // $scope.myfamily="Family";
            vm.greet = function(){
                   // $scope.fullname=$scope.myname+" "+$scope.myfamily;
                   alert(vm.project_no);
                }



            vm.createProcess = function createProcess(){
                alert("the amount"+vm.amt+"and some other data will be inserted.");
                TbIntbkDepositInfo.save({
                    'tb_intbk_deposit_info':{
                         dpst_no: vm.depositNo,
                         cust_id: 'custid1',
                         cust_name: vm.cust_name, 
                         pdct_sign_date: vm.signDate,
                         dpst_amt_million: vm.amt,
                         currency_cd: vm.currency,
                         term_month: vm.term,
                         intst_rate_percent: vm.rate,
                         intst_type_cd: vm.interestType,
                         pdct_intst_date: vm.intstDate,
                         maturity_date: vm.maturityDate,
                         opinion: vm.opinion,
                         is_valid:'Y',
                         create_user_id:'A0083312',
                         create_user_name:'张三',
                         create_time: vm.depositNo,
                         update_user_id:'updateuserid',
                         update_user_name:'userusername',
                         update_time:vm.depositNo,
                         org_cd:'1100'
                        }
               } );    
                alert("Done.");
                }

        }

})();

