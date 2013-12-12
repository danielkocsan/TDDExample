/*global jQuery, describe, it, chai, sinon, beforeEach, afterEach, EventPublisher */
describe('Model', function () {
    'use strict';
    var eventPublisher = new EventPublisher('AL');

    describe('on listRequest event', function () {
        var promise = jQuery.Deferred(),
            mockData = 'abc';

        beforeEach(function () {
            sinon.stub(jQuery, 'ajax').returns(promise);
        });
        afterEach(function () {
            jQuery.ajax.restore();
        });
        it('should call test.kocsan.hu/jstf/attendees.json', function (done) {
            eventPublisher.publish('listRequest', function () {
                sinon.assert.calledOnce(jQuery.ajax);
                sinon.assert.calledWithMatch(jQuery.ajax, {url: '//test.kocsan.hu/jstf/attendees.json'});
                done();
            });
        });

        it('should emit listReady event with the ajax response', function (done) {
            /*jslint unparam: true*/
            eventPublisher.subscribe('listReady', 'AL', function (modulName, eventName, data) {
                chai.assert.equal(data, mockData);
                done();
            });
            /*jslint unparam: false*/

            eventPublisher.publish('listRequest', function () {
                promise.resolve(mockData);
            });
        });
    });
});