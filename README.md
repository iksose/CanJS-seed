# Can.JS seeed

This project is an application skeleton for a typical [Can.js](http://www.can.js) web app.
You can use it to quickly bootstrap your  webapp projects and dev environment for these
projects.



### Running the app during development

You can pick one of these options:

* serve this repository with your webserver
* install node.js and run `app.js`

Then navigate your browser to `http://localhost:<port>/app/index.html` to see the app running in
your browser.




## Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number