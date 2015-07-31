define(function(require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var QuizEntries = require('app/models/quizentries');
    var QuizEntry = require('app/models/quizentry');

    var tpl = require('text!app/stats/tpl/stats.tpl');
    var template = _.template(tpl);

    return Backbone.View.extend({

    	initialize: function() {
    		this.render();
    	},
    	render: function() {
    		this.$el.html(template());

    		return this;
    	}

    });
});