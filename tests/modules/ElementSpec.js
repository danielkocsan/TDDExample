/*global jQuery, Element, describe, it, beforeEach, afterEach, expect */
describe('Element module', function () {
    'use strict';
    var $element,
        mockData = {
            "name": "Daniel Kocsan",
            "title": "Graphic Designer",
            "pic": "attendees_daniel_kocsan.jpg"
        };

    describe('on construction', function () {
        beforeEach(function () {
            $element = new Element(mockData);
        });

        afterEach(function () {
            $element = null;
        });

        it('should return a jQuery element containing the passed data properties', function () {
            expect($element instanceof jQuery).toBeTruthy();
            expect($element.html()).toMatch(mockData.name);
            expect($element.html()).toMatch(mockData.title);
            expect($element.html()).toMatch(mockData.pic);
        });
    });
});
