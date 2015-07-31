define(function(require) {

	var $ = require('jquery');
 	var Backbone = require('backbone');
  	var ViewHandler = require('libs/view-handler');

  	var $body = $("body");
  	var $content = $(".content");

  	var NavBarView = require('app/navigation/navbar/navbar');
  	var QuizView = require('app/quiz/quiz');
  	var StatsView = require('app/stats/stats');

  	return Backbone.Router.extend({
		routes: {
			'': 'quiz',
			'quiz': 'quiz',
			'stats': 'stats'
		},
		initialize: function() {
			this.addNavBar();
        },

        addNavBar: function() {
            var navBarView = new NavBarView();
            $body.prepend(navBarView.$el);
        },

		quiz: function() {
			var quizView = new QuizView({el:'.content'});
			//quizView.render();
			Backbone.Transitions.transit(quizView);
			//ViewHandler.setCurrent(quizView, "Quiz");

		},

		stats: function() {
			var statsView = new StatsView({el:'.content'});
			Backbone.Transitions.transit(statsView);
			//ViewHandler.setCurrent(statsView, "Stats");

		}
	});
});
