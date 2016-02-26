(function() {
  'use strict';

  angular
  .module('pay')
  .service('AuthService', auth_service)
  .service('Session', session_service);

  /** @ngInject */
  function session_service($window){
    this.create = function (userid,userName,orgCodes,dutyCodes,roleCodes,isBranch,isFinancialDepartment){//创建用户权限对象
      var sessionStorage = $window.sessionStorage;
      if(userid != null && userid != ""){//如果第一次登陆传入用户号
        this.userid = userid;
        this.userName = userName;
        this.orgCodes = orgCodes;
        this.dutyCodes = dutyCodes;
        this.roleCodes = roleCodes;
        this.isBranch = isBranch;
        this.isFinancialDepartment = isFinancialDepartment;
        //将用户权限存入SESSION以防刷新页面
        sessionStorage.setItem("userid",userid);
        sessionStorage.setItem("userName",userName);
        sessionStorage.setItem("orgCodes",orgCodes);
        sessionStorage.setItem("dutyCodes",dutyCodes);
        sessionStorage.setItem("roleCodes",roleCodes);
        sessionStorage.setItem("isBranch",isBranch);
        sessionStorage.setItem("isFinancialDepartment",isFinancialDepartment);
      }else{//刷新页面后丢失用户权限
        this.userid = sessionStorage.getItem("userid");
        this.userName = sessionStorage.getItem("userName");
        this.orgCodes = sessionStorage.getItem("orgCodes");
        this.dutyCodes = sessionStorage.getItem("dutyCodes");
        this.roleCodes = sessionStorage.getItem("roleCodes");
        this.isBranch = sessionStorage.getItem("isBranch");
        this.isFinancialDepartment = sessionStorage.getItem("isFinancialDepartment");
      }
    };
    this.destroy = function () {//销毁用户权限对象
      this.userid = null;
      this.userName = null;
      this.orgCodes = null;
      this.dutyCodes = null;
      this.roleCodes = null;
      this.isBranch = null;
      this.isFinancialDepartment = null;
      //清楚session中的权限信息
      sessionStorage.setItem("userid",null);
      sessionStorage.setItem("userName",null);
      sessionStorage.setItem("orgCodes",null);
      sessionStorage.setItem("dutyCodes",null);
      sessionStorage.setItem("roleCodes",null);
      sessionStorage.setItem("isBranch",null);
      sessionStorage.setItem("isFinancialDepartment",null);
    };
    this.init = function () {//重新初始化用户权限信息
      this.userid = sessionStorage.getItem("userid");
      this.userName = sessionStorage.getItem("userName");
      this.orgCodes = sessionStorage.getItem("orgCodes");
      this.dutyCodes = sessionStorage.getItem("dutyCodes");
      this.roleCodes = sessionStorage.getItem("roleCodes");
      this.isBranch = sessionStorage.getItem("isBranch");
      this.isFinancialDepartment = sessionStorage.getItem("isFinancialDepartment");
      return this;
    };
  }

  function auth_service(UserRight, Session){
    var authService = {};

    authService.login = function (userid) {
      if(userid != null && userid != ""){
        Session.create('A0070984','赵蕊','110000010','D0001,D1309,D1301,D1001,D1912,D1501,D1502,D1009','R0002,R0001,R0003,R0004,R0005,R0006,R0009','Y','N');
        //var user_right = UserRight.get({userid: userid},function(){
        //var user_rights = angular.fromJson(user_right.user_rights);
        //var userName = user_rights.username;
        //var orgCodes = user_rights.orgcodes;
        //var dutyCodes = user_rights.dutycodes;
        //var roleCodes = user_rights.rolecodes;
        //var isBranch = user_rights.isbranch;
        //var isFinancialDepartment = user_rights.is_financial_department;
        //Session.create(userid,userName,orgCodes,dutyCodes,roleCodes,isBranch,isFinancialDepartment);
        //},function(){alert("获取人员权限失败");});
      }else{
        Session.create(null,null,null,null,null,null,null);
      }
    };

    authService.isAuthenticated = function () {
      return !!Session.userid;
    };

    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      return (authService.isAuthenticated() &&
          authorizedRoles.indexOf(Session.user_right) !== -1);
    };

    return authService;
  }
})();
