(function () {
  'use strict';

  angular.module('myApp.pages.view1', [])
      .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider
        .state('view1', {
          url: '/view1',
          title: 'view1',
          templateUrl: 'app/pages/view1/view1.html',
          controller: 'view1Ctrl',
        });
  }

})();
