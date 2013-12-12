/*global $, describe, it, spyOn, expect, runs, waitsFor, sinon, controller, EventPublisher, List, Element */
describe('Controller module', function () {
    'use strict';
    var SUT = controller,
        eventPublisher = new EventPublisher('AL'),
        mockData = [
            {
                "name": "Daniel Kocsan",
                "title": "Graphic Designer",
                "pic": "attendees_daniel_kocsan.jpg"
            },
            {
                "name": "Daniel Kocsan",
                "title": "Graphic Designer",
                "pic": "attendees_daniel_kocsan.jpg"
            }
        ],
        $mockRefeshButton = $('<button />'),
        $mockListElement = $('<ul />');

    SUT.init($mockRefeshButton, $mockListElement);

    describe('init() method', function () {
        it('should create a new List element', function () {
            expect(SUT.list).toBeDefined();
            expect(SUT.list instanceof List).toBe(true);
        });
    });

    describe('on $refreshButtons click event', function () {
        it('should emit a listRequest event on the eventPublisher module', function () {
            var done = false;

            runs(function () {
                eventPublisher.subscribe('listRequest', 'AL', function () {
                    done = true;
                });

                $mockRefeshButton.trigger('click');
            });

            waitsFor(function () {
                return done;
            });

            runs(function () {
                expect(true).toBe(true);
            });
        });
    });

    describe('on listReady event', function () {
        it('should call append on List as many times as meny ites have been passed', function () {
            var done = false,
                spy = sinon.spy(SUT.list, 'append');

            runs(function () {
                eventPublisher.publish('listReady', mockData, function () {
                    done = true;
                });
            });

            waitsFor(function () {
                return done;
            });

            runs(function () {
                expect(spy.called).toBe(true);
                expect(spy.callCount).toBe(2);
                expect(spy.getCall(0).args[0] instanceof $).toBe(true);
                spy.restore();
            });
        });
    });
});
