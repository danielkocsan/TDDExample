/*global window, $*/
(function (NS) {
    'use strict';

    var Element = function (data) {
        var $element = $('<li />').addClass('list-group-item');

        $element.append($('<h2 />').html(data.name).addClass('list-group-item-heading'));
        $element.append($('<p />').html(data.title).addClass('list-group-item-text'));
        $element.append($('<img />').attr(
            {
                alt: data.name,
                src: '//test.kocsan.hu/jstf/' + data.pic
            }
        ));

        return $element;
    };

    NS.Element = Element;
}(window));
