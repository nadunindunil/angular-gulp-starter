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

**important!** : under development
