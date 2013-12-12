/*global window, List, EventPublisher, Element */
(function (NS) {
    'use strict';

    var Controller = function () {
        return this;
    };

    Controller.prototype.init = function ($refreshButton, $listElement) {
        this.list = new List($listElement);

        this.eventPublisher = new EventPublisher('AL');
        this.eventPublisher.subscribe('listReady', 'AL', this.onListReady.bind(this));

        $refreshButton.on('click', this.onRefreshButtonClick.bind(this));
    };

    Controller.prototype.onRefreshButtonClick = function () {
        this.eventPublisher.publish('listRequest');
    };

    /*jslint unparam: true*/
    Controller.prototype.onListReady = function (moduleName, eventName, data) {
        var i,
            l = data.length;

        for (i = 0; i < l; i += 1) {
            this.list.append(new Element(data[i]));
        }

        $(window.document).triggerHandler('attendeesListDone');
    };
    /*jslint unparam: false*/

    NS.controller = new Controller();
}(window));
