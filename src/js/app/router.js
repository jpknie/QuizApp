define(function(require) {

	var $ = require('jquery');
 	var Backbone = require('backbone');
  	var ViewHandler = require('libs/view-handler');

  	var $body = $("body");
  	var $content = $(".content");

  	var QuizView = require('app/quiz/quiz');

  	return Backbone.Router.extend({
		routes: {
			'': 'quiz',
			'quiz': 'quiz'
		},

		initialize: function() {
		},

		quiz: function() {
			var quizView = new QuizView();
			ViewHandler.setCurrent(quizView, "Quiz");
			quizView.render();
		}
	});
});
