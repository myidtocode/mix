(function() {
    'use strict';

    angular
    .module('pay')
    .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
      //主路由
      $stateProvider
        .state('home', {
          url: '/qlcpay?userid',
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        });
      //用户登录路由
      $stateProvider
        .state('login', {
          url: '/qlcpay/login',
          templateUrl: 'app/login/login.html',
          controller: 'LoginController',
          controllerAs: 'login'
        });
      //查询支付信息列表路由
      $stateProvider
        .state('pay', {
          url: '/qlcpay/pay',
          templateUrl: 'app/pay/pay_contract_list.html',
          controller: 'PayController',
          controllerAs: 'pay'
        }
      );
      //查询支付明细信息路由
      $stateProvider
        .state('payShowInfo', {
          url: '/qlcpay/pay/payShowInfo',
          templateUrl: 'app/pay/payShowInfo/pay_show_info.html',
          controller: 'PayShowController',
          controllerAs: 'payShow',
          params: {
            'contractId': ''
          }
        }
      );
      //inter-bank business
      $stateProvider
        .state('interBankDeposit',{
           url:'/interBankDeposit/depositStartInfo',
           templateUrl:'app/interbank/interbank_deposit_info.html',
           controller:'interDepositController',
           controllerAs:'DpCntl'
           }
        
        )
      //show cooperative organization info
      $stateProvider
        .state('coopModal', {
          url: '/interBankDeposit/depositStartInfo/coopInfo',
          templateUrl: 'app/interbank/coopInfo/coop_info.html',
          controller: 'coopModalController',
          controllerAs: 'CpCntl'
         // params: {
         //   'contractId': ''
         // }
        }
      );
      //支付信息审批路由
      $stateProvider
        .state('payInfoApprove', {
          url: '/qlcpay/pay/payInfoApprove',
          templateUrl: 'app/pay/payInfoApprove/pay_info_approve.html',
          controller: 'PayApproveController',
          controllerAs: 'payApprove',
          params: {
            'payId': '',
            'processId': ''
          }
        }
      );
      //查询我的工作列表
      $stateProvider
        .state('workList', {
          url: '/qlcpay/workList',
          templateUrl: 'app/workList/work_list.html',
          controller: 'WorkListController',
          controllerAs: 'workList'
        }
      );
      //查询支付明细信息路由
      $stateProvider
        .state('workListJump', {
          url: '/qlcpay/workList/workListJump',
          controller: 'WorkListJumpController',
          controllerAs: 'workListJump',
          params: {
            'bizId': '',
            'processId':'',
            'businessType': ''
          }
        }
      );
      //弹出Modal模板路由
      $stateProvider
        .state('modalTemplate', {
          controller: 'ModalTemplateController',
          controllerAs: 'modal'
        }
      );
      //弹出Modal模板路由
      $stateProvider
        .state('accountModal', {
          url: '/qlcpay/pay/accountInfo',
          templateUrl: 'app/pay/accountInfo/account_info.html',
          controller: 'AccountModalController',
          controllerAs: 'accountInfo',
          params: {
            'contractId': ''
          }
        }
      );

      //跳转到主页
      $urlRouterProvider.otherwise('/qlcpay');
    }

})();
