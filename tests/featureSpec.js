/*global $, document, describe, it, chai */
describe('Attendees list', function () {
    'use strict';

    var $placeHolder = $('#mocha'),
        $fixtureRefreshButton = $placeHolder.append('<button id="refresh"></button>'),
        $fixtureAttendeesList = $placeHolder.append('<div id="attendeesList"></div>'),
        $doc = $(document);

    describe('when I push the refresh button', function () {
        it('should appear within 500ms', function (done) {
            this.timeout(500);
            $doc.on('attendeesListDone', function () {
                chai.assert.isTrue($fixtureAttendeesList.children().length > 5);
                done();
            });

            $fixtureRefreshButton.trigger('click');
        });
    });
});