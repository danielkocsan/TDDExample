/*global window, List, EventPublisher */
(function (NS) {
    'use strict';

    var Controller = function () {
        this.init();
    };

    Controller.prototype.init = function () {
        this.list = new List();

        this.eventPublisher = new EventPublisher('AL');
        this.eventPublisher.subscribe('listReady', 'AL', this.onListReady.bind(this));
    };

    /*jslint unparam: true*/
    Controller.prototype.onListReady = function (moduleName, eventName, data) {
        var i,
            l = data.length;

        for (i = 0; i < l; i += 1) {
            this.list.append();
        }
    };
    /*jslint unparam: false*/

    NS.controller = new Controller();
}(window));
