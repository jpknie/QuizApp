define(function(require) {
	var $ = require('jquery');
	var Backbone = require('backbone');
	var tpl = require('text!app/navigation/navbar/tpl/navbar.tpl');
	var template = _.template(tpl);

	return Backbone.View.extend({
		className: 'navbar',

		events: {
            'tap .tab-item': 'setActiveTab'
        },

		initialize: function() {
			this.render();
		},

		render: function() {
			this.$el.html(template());
			return this;
		},

		setActiveTab: function(event) {
			this.$el.find('a.active').removeClass('active');
			$(event.currentTarget).addClass('active');
		}

	});

});