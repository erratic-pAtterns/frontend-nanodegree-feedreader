/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('each feed has a non-empty URL defined', function() {
           for (const feed of allFeeds) {
             expect(feed.url).not.toBeFalsy();
           }
         });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('each feed has a non-empty name defined', function() {
           for (const feed of allFeeds) {
             expect(feed.name).not.toBeFalsy();
           }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {
        const htmlBody = document.querySelector('body');
        const sideMenu = document.querySelector('.menu-icon-link');
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('is hidden by default', function() {
           expect(htmlBody.className).toBe('menu-hidden');
         });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('changes visibility on click', function() {
            sideMenu.click();
            expect(htmlBody.className).not.toBe('menu-hidden');
            sideMenu.click();
            expect(htmlBody.className).toBe('menu-hidden');
          });
    });


    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         it('feed container has at least one element', function(done) {
           const containerSize = document.querySelector('.feed').childNodes.length;
           expect(containerSize).toBeGreaterThan(0);
           done();
         });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
         let before, after;

         beforeEach(function(done) {
           before = Array.from(document.querySelector('.feed').childNodes);
           loadFeed(1, function() {
             done();
           });
         });

         afterEach(function(done) {
           loadFeed(0, function() {
             done();
           });
         });

         it('content of feed container changes upon loadFeed', function (done) {
           after = Array.from(document.querySelector('.feed').childNodes);
           expect(after).not.toBe(before);
           done();
         });
    });
}());
