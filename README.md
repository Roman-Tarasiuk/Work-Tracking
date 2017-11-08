# Work Tracking

<h3>Helping tool for tracking time of your tasks.</h3>

For running in offline mode download the '\_dist' folder and open 'index.html' file.

For developing / building:

1. Download / clone the project.
2. In the project folder run the next commands from a command line (the Node.js must be installed on your computer):

<code>npm install</code>

<code>npm install moment</code>

<code>npm install bootstrap</code>

and then

<code>ng serve</code>

3. (Optional) For rebuilding offline files run the command:

<code>ng build --target=production --base-href .\/</code>

The result files will be placed into 'dist' folder.

For now the program saves its data to a browser's local storage.

<hr>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
