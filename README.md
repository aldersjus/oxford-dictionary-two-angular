## About App

This has been built using the Angular framework and Bootstrap for the styling. It is a simple application that connects to the Oxford English dictionary API to search for the entered word. It is not production ready,it was built to learn the basics of working with Angular and using the HTTP library.

Remember that you will need your own API key and password from Oxford English Dictionary.
Enter a word in the search box and the results will be displayed below. It currently only works with the base form of verbs, so if enter you "walking" instead of "walk" it might fail to return anything, this application will display any errors in an alert box.

There is a slightly different take on this application at the below link, they are essentially the same application just wired up a little differently. As stated earlier both of these applications were built as a learning exercise and nothing more.
[Oxford Dictionary Angular App](https://github.com/aldersjus/oxford-dictionary-angular)

# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## How to run without CORS

Run the below commands to get the application working without a CORS error.Mac only example,sorry Windows users. Please google.
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
ng serve

<p align="center">
  <img src="https://github.com/aldersjus/oxford-dictionary-two-angular/blob/master/src/assets/github-image.png"/>
</p>
