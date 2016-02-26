(function() {
  'use strict';

  angular
    .module('pay')
    .config(config);

  /** @ngInject */
  function config($logProvider, $translateProvider, toastrConfig, CACHE_IP) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $translateProvider.useUrlLoader(CACHE_IP +'/cache/dict.json');
    $translateProvider.preferredLanguage('en');

  }

})();
