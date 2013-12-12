/*global $, document, describe, it, runs, waitsFor, chai, controller */
describe('Attendees list', function () {
    'use strict';

    var $placeHolder = $('body'),
        $fixtureRefreshButton = $('<button id="refresh"></button>'),
        $fixtureAttendeesList = $('<ul id="attendeesList"></ul>'),
        $doc = $(document);

    $placeHolder.append($fixtureAttendeesList);
    $placeHolder.append($fixtureRefreshButton);

    describe('when I push the refresh button', function () {
        it('should appear within 5000ms', function () {
            var done = false;

            controller.init($fixtureRefreshButton, $fixtureAttendeesList);

            runs(function () {
                $doc.on('attendeesListDone', function () {
                    done = true;
                });

                $fixtureRefreshButton.trigger('click');
            });

            waitsFor(function () {
                return done;
            });

            runs(function () {
                chai.assert.isTrue($fixtureAttendeesList.children().length > 5);
            });
        });
    });
});