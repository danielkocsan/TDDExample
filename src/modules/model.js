/*global $, EventPublisher, window */
(function (NS) {
    'use strict';

    var Model = function () {
        this.init();
    };

    Model.prototype.init = function () {
        this.eventPublisher = new EventPublisher('AL');

        this.eventPublisher.subscribe('listRequest', 'AL', this.onListRequest.bind(this));
    };

    Model.prototype.onListRequest = function () {
        $.ajax(
            {
                url: '//test.kocsan.hu/jstf/attendees.json'
            }
        ).done(this.onAjaxDone.bind(this));
    };

    Model.prototype.onAjaxDone = function (data) {
        this.eventPublisher.publish('listReady', data);
    };

    NS.model = new Model();
}(window));