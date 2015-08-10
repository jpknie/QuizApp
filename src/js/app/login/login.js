define(function(require) {
  var Backbone = require('backbone');
  var md5 = require('md5');
  var tpl = require('text!app/login/tpl/login.tpl');
  var template = _.template(tpl);

  return Backbone.View.extend({

      events: {'tap #loginButton': 'login'},

      initialize: function() {
        this.render();
      },

      render: function() {
        this.$el.html(template());
        return this;

      },

      login: function() {
        /* Test */
        var passhash = CryptoJS.MD5('test');
        $.ajax({
          method: 'post',
          url: 'http://localhost:8080/login',
          data: JSON.stringify({ 'username' : 'Jani', 'password' : passhash.toString() }),
          dataType: 'json',
          contentType: 'application/json; charset=UTF-8',
          success: function() {
            console.log("Login successful");
          }
        })
      },

  });
});
