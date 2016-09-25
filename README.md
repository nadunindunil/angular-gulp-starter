# Angular Starter with Gulp

- clone the repository
```
git clone https://github.com/nadunindunil/angular-gulp-starter.git
cd angular-seed
```
- install npm packages using
 ```
npm install
```

bower packages are also install from the post script

- serve the application using
```
gulp serve
```

## gulp commands available

| **gulp command** | **task** |
|---|-------|
|  `gulp serve`  | creates a temporary server with live-reloading in localhost:3000|
|  `gulp serve:dist`  | creates the release folder and run the release in localhost:3000 |
|  `gulp marketplace-release`  | release the project with x.x.x version, generate a zip named with version as well |

## Directory Layout

```
|── src
|    |── app
|    |     |──pages
|    |     |    |──view1
|    |     |    |      |──view1.controller.js
|    |     |    |      |──view1.module.js
|    |     |    |      |──view1.html
|    |     |    |──view2
|    |     |    |      |──view2.controller.js
|    |     |    |      |──view2.module.js
|    |     |    |      |──view2.html
|    |     |    |──pages.module.js
|    |     |──app.js    
|    |── assets
|    |── sass
|── gulp
```

## create new view

- create folder with view name
- create html,controller.js and module.js files
- put

```
(function () {
  'use strict';

  angular.module('myApp.pages.VIEW_NAME')
    .controller('VIEW_NAMECtrl', VIEW_NAMECtrl);

  function VIEW_NAMECtrl($scope) {

  }


})();
```
in the controller.js
- create module.js using

```
(function () {
  'use strict';

  angular.module('myApp.pages.VIEW_NAME', [])
      .config(routeConfig);

  function routeConfig($stateProvider) {
    $stateProvider
        .state('VIEW_NAME', {
          url: '/VIEW_NAME',
          title: 'VIEW_NAME',
          templateUrl: 'app/pages/VIEW_NAME/VIEW_NAME.html',
          controller: 'VIEW_NAMECtrl',
        });
  }

})();
```
- then inject the new module into the pages.module.js as

```
angular.module('myApp.pages', [
  'ui.router',
  'myApp.pages.view1',
  'myApp.pages.view2',
  'myapp.pages.VIEW_NAME'
])
```

**important!** : under development
