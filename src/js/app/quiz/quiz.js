define(function(require) {
    var $ = require('jquery');
    var Backbone = require('backbone');
    var QuizEntries = require('app/models/quizentries');
    var QuizEntry = require('app/models/quizentry');

    var tpl = require('text!app/quiz/tpl/quiz.tpl');
    var template = _.template(tpl);

    var entries = [
    {
        imageRef: 'helium.png',
        category: 'Chemistry',
        question: 'How many electrons Helium has?',
        choices: ['two', 'four', 'six'],
        correctAnswer: 0
    },
    {
        imageRef: 'radcircle.gif',
        category: 'Chemistry',
        question: 'What kind of radiation is emitted by Polonium?',
        choices: ['alpha', 'beta', 'gamma'],
        correctAnswer: 0
    },
    {
        category: 'Chemistry',
        question: 'Who invented the Periodic Table?',
        choices: ['Einstein', 'Watson', 'Mendelejev'],
        correctAnswer: 2
    }
    ];

    return Backbone.View.extend({
        currentEntry: {},

        events: {
            'tap #sendAnswer': 'sendAnswer'
        },

        initialize: function() {
            var self = this;
            this.collection = new QuizEntries(entries);
            this.collection.fetch({async: false, reset: false});
            this.currentEntry = this.collection.shift();
        },

        render: function() {
            this.$el.html(template(this.currentEntry.toJSON()));
            return this;
        },

        showThumbsup: function() {
            this.$('.thumbsup').velocity({ top: '0' }, { duration: 2000, easing: "easeInOutElastic" });
            setTimeout(function() {
                this.$('.thumbsup').velocity("reverse", {delay: 500, duration: 2000});
            }, 1000);
        },

        showNotquite: function() {
            this.$('.notquite').velocity({ top: '0' }, { duration: 2000, easing: "swing" });
            setTimeout(function() {
                this.$('.notquite').velocity("reverse", {delay: 500, duration: 2000});
            }, 1000);
        },

        sendAnswer: function() {
            var selected = this.$('input[name=choice]:checked', '#choiceForm').val();
            if(parseInt(selected) == this.currentEntry.get('correctAnswer'))
                this.showThumbsup();
            else
                this.showNotquite();

            this.currentEntry = this.collection.shift();

            if(this.currentEntry == undefined) {
                this.currentEntry = new QuizEntry({question: 'We need to get more questions!'});
            }

            var self = this;
            setTimeout(function() { Backbone.Transitions.transit(self); }, 5000);
        }
    });

});
