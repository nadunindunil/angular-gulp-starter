(function () {
  'use strict';

  angular.module('myApp.pages.view2', [])
      .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider
        .state('view2', {
          url: '/view2',
          title: 'view2',
          templateUrl: 'app/pages/view2/view2.html',
          controller: 'view2Ctrl',
        });
  }

})();
