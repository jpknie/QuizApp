define(function(require) {
	"use strict";
        var $ = require('jquery');
        var _ = require('underscore');
        var Backbone = require('backbone');

        var StateEvents = {};

        _.extend(StateEvents, Backbone.Events);

        return StateEvents;
});
