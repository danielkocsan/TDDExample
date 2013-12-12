/*global List, jasmine, describe, it */
describe('List module', function () {
    'use strict';

    var $placeHolderMock = jasmine.createSpyObj('placeholder', ['append']),
        SUT = new List($placeHolderMock);

    describe('addElement() method', function () {
        it('should call append() the placeholder element', function () {
            SUT.append('append');
        });
    });
});
