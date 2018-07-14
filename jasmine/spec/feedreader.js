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

    describe('RSS Feeds', function() {
        /* Ensures that the allFeeds variable has been defined
         * and that it is not empty.
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Ensures that each feed in the allFeeds object has a URL defined
         * and that the URL is not empty.
         */

         it('each feed has a non-empty URL defined', function() {
           for (const feed of allFeeds) {
             expect(feed.url).not.toBeFalsy();
           }
         });

        /* Ensures that each feed in the allFeeds object has a name defined
         * and that the name is not empty.
         */

         it('each feed has a non-empty name defined', function() {
           for (const feed of allFeeds) {
             expect(feed.name).not.toBeFalsy();
           }
         });
    });


    describe('The menu', function() {
        const htmlBody = document.querySelector('body');
        const sideMenu = document.querySelector('.menu-icon-link');

        /* Ensures the menu element is hidden by default.
         */

         it('is hidden by default', function() {
           expect(htmlBody.className).toBe('menu-hidden');
         });

         /* Ensures the menu changes visibility when the menu icon is clicked.
          * This test has two expectations: menu displays when
          * clicked and hides when clicked again.
          */

          it('changes visibility on click', function() {
            sideMenu.click();
            expect(htmlBody.className).not.toBe('menu-hidden');
            sideMenu.click();
            expect(htmlBody.className).toBe('menu-hidden');
          });
    });

    describe('Initial Entries', function() {
        /* Ensures when the loadFeed function is called and completes its
         * work, there is at least a single .entry element within the
         * .feed container.
         */

         /* loadFeed() is asynchronous so this test requires
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

    describe('New Feed Selection', function() {
        /* Ensures when a new feed is loaded by the loadFeed function
         * that the content actually changes.
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
