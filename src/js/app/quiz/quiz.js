define(function(require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var QuizEntries = require('app/models/quizentries');
    var QuizEntry = require('app/models/quizentry');

    var tpl = require('text!app/quiz/tpl/quiz.tpl');
    var template = _.template(tpl);

    var entries = [
    {
        category: 'Chemistry',
        question: 'How many electrons Helium has?',
        choices: ['two', 'four', 'six'],
        correct: 0
    },
    {
        category: 'Chemistry',
        question: 'What kind of radiation is emitted by Polonium?',
        choices: ['alpha', 'beta', 'gamma'],
        correct: 0
    }
    ];

    return Backbone.View.extend({
        className: 'quiz',
        currentEntry: {},

        events: {
            'tap #sendAnswer': 'sendAnswer'
        },

        initialize: function() {
            this.collection = new QuizEntries(entries);
            this.currentEntry = this.collection.shift();
            this.render();
        },
        render: function() {
            this.$el.html(template(this.currentEntry.toJSON()));
            return this;
        },
        sendAnswer: function() {
            this.currentEntry = this.collection.shift();
            if(this.currentEntry == undefined) {
                this.currentEntry = new QuizEntry({});
            }
            this.render();
        }
    });

});
