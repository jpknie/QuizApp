define(function(require) {
 "use strict";

        var $ = require('jquery');
        var Backbone = require('backbone');

        var stateEvents = require('libs/state-events');

        var $body = $("body");
        var $content = $(".content");
        var $nav = $("#appnav");

        var currentView;

        // Adds Close to Backbone Views
        Backbone.View.prototype.close = function(){
            this.remove();
            this.unbind();
            if (this.onClose)
              this.onClose();
      };

      var ViewHandler = {

        setCurrent: function(view, title) {
            if(title)
                stateEvents.trigger("update:title", title);

            if (currentView)
                currentView.close();
            $nav.find('a.active').removeClass('active');

            currentView = view;
            $content.html(currentView.$el);
        }
    }

    return ViewHandler;

});
