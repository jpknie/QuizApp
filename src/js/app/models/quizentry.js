define(function(require, exports, module) {
        var Backbone = require('backbone');

        var QuizEntry = Backbone.Model.extend({

                defaults: {
                	imageRef: '',
                  category: '',
                  question: '',
                  choices: [],
                  correctAnswer: 0
                }

        });
        return QuizEntry;
});
