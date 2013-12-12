/*global describe, it, spyOn, expect, runs, waits, sinon, controller, EventPublisher */
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
        ];

    describe('on construction', function () {
        it('should create a new List element', function () {
            expect(SUT.list).toBeDefined();
        });
    });

    describe('on listReady event', function () {
        it('should call append on List as many times as meny ites have been passed', function () {
            var done = false;

            SUT.list.append = sinon.spy();

            runs(function () {
                eventPublisher.publish('listReady', mockData, function () {
                    done = true;
                });
            });

            waits(function () {
                return done;
            });

            runs(function () {
                expect(SUT.list.append.called).toBe(true);
                expect(SUT.list.append.callCount).toBe(2);
            });
        });
    });
});
