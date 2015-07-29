define(function(require, module, exports) {

        var QuizEntry = require('app/models/quizentry');

        var QuizEntries = Backbone.Collection.extend({
                model: QuizEntry
        });

        return QuizEntries;
});