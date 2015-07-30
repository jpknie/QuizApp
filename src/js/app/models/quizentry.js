define(function(require, exports, module) {
        var Backbone = require('backbone');

        var QuizEntry = Backbone.Model.extend({

                defaults: {
                	img: '',
                        category: '',
                        question: '',
                        choices: [],
                        correct: 0
                }

        });
        return QuizEntry;
});
