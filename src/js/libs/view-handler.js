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

  Backbone.Transitions = {};
  Backbone.Transitions.transit = function(view, transitionType) {
      var _self = this;

      transitionType = transitionType || "slideInOut";
       _self.transitionType = transitionType;

      if (_self.currView) {
          _self.currView.$(".page")
          .addClass(_self.transitionType)
          .removeClass("active");
          //Render the new view after the transition has finished on the current view
          _self.currView.$(".page").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
          _self.currView.$(".page").remove();
          _self.render(view);
          });
      } else {
          _self.render(view);
      }
      _self.currView = view;

  };
  Backbone.Transitions.render = function(view) {
      var _self = this;

      // Call the render on view object
      view.render();
      view.$(".page").addClass(_self.transitionType);

      // Delay the transitions on newly added elements by 20 s
      // to prevent the flickering effect
      _.delay(function() {
          view.$(".page")
              .addClass(_self.transitionType)
              .addClass("active");
      }, 20);
  };

  var ViewHandler = {
      setCurrent: function(view, title) {
          if(title)
              stateEvents.trigger("update:title", title);
/*
          if(currentView)
              currentView.close();
          */
          currentView = view;
          $content.html(currentView.$el);
      }
  }

  return ViewHandler;
});
