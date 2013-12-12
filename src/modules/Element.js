/*global window, $*/
(function (NS) {
    'use strict';

    var Element = function (data) {
        var $element = $('<li />');

        $element.append($('<span />').html(data.name));
        $element.append($('<span />').html(data.title));
        $element.append($('<img />').attr(
            {
                alt: data.name,
                src: data.pic
            }
        ));

        return $element;
    };

    NS.Element = Element;
}(window));
