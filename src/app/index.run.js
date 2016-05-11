(function() {
  'use strict';

  angular
    .module('logezSite')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
