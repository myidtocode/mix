/**
 * Created by MX on 2015/12/24.
 */

(function (){
    'use strict'

    angular
      .module('pay')
      .controller('interDepositController',interDepositCntl);
    
    function interDepositCntl($window,Session,$scope){
            
           // $scope.myForm= {}; 

            var vm = this;
            var nowDate = new Date();
            vm.depositNo = nowDate.toLocaleString();//fake deposit no
            vm.session = Session.init();
            vm.project_no = 2;
           // vm.myForm;

            //vm.amt="22";
           // var vm1 = this;
           // $scope.amt = "22";
          //  var t = $scope.amt;

            //The size of the showmodal doesn't work, but after I change the size of the modal by dragging it, the size will be changed and stay.
            vm.showModal = function showModal(){
                var ret = $window.showModalDialog('#/interBankDeposit/depositStartInfo/coopInfo','dialogWidth:800px;dialogHeight:450px');
                vm.project_no = ret[0];
                vm.project_name = ret[1];
                }

               

           // $scope.myname="G";
           // $scope.myfamily="Family";
            vm.greet = function(){
                   // $scope.fullname=$scope.myname+" "+$scope.myfamily;
                   alert(vm.project_no);
                }



            vm.createProcess = function(){
           // $scope.createProcess = function(){
               // alert($scope.myForm.amt+$scope.myForm.term);
                alert(vm.myForm.amt);
                }

        }

})();

