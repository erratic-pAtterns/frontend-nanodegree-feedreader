# RSS Feed Reader (Udacity [FEND](https://eu.udacity.com/course/front-end-web-developer-nanodegree--nd001) Project)

Testing website functionality using the Jasmine 2.1.2 framework.

## How To Run

Download or clone the repository, then open `index.html` in your browser. Test results are shown at the bottom of the page.

## Description

Test suites can be found in `jasmine/spec/feedreader.js`. Currently the tests ensure that:

* The `allFeeds` variable has been defined and is not empty
* Each feed in `allFeeds` has a non-empty URL defined
* Each feed in `allFeeds` has a non-empty name defined
* The side navigation menu is hidden by default
* Side navigation menu visibility is toggled by clicking the hamburger icon
* There is at least one RSS feed entry displayed
* Upon selecting another feed, new RSS feed entries are loaded

## Screenshots

Test results section

![jasmine results](https://github.com/erratic-pAtterns/frontend-nanodegree-feedreader/blob/master/screenshots/js-tests.PNG)
