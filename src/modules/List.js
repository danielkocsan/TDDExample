/*global window*/
(function (NS) {
    'use strict';
    var List = function ($element) {
        this.$element = $element;
    };

    List.prototype.append = function (data) {
        this.$element.append(data);
    };

    NS.List = List;
}(window));

