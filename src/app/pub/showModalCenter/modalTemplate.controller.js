/**
 * Created by MX on 2015/12/24.
 */
(function (){
    'use strict'

    angular
      .module('pay')
      .controller('ModalTemplateController',ModalTemplateController);

      /** @ngInject */
      function ModalTemplateController($scope){
        var vm = this;
        vm.title = $scope.title;

        /** 通过title判断具体显示那个界面 */
        if(vm.title =="snower"){
          vm.src="#/qlcpay/pay";
        }
      }

  }
)();
