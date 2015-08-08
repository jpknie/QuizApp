define(function(require, module, exports) {

        var QuizEntry = require('app/models/quizentry');

        var QuizEntries = Backbone.Collection.extend({
                model: QuizEntry,
                url: 'http://localhost:8080/quiz'
        });

        return QuizEntries;
});
