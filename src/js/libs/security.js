define(function(require) {

  var Backbone = require('backbone');

  var _sync = Backbone.sync;

  /**
    * Let's override the default backbone sync function, and include
    * the security token in the headers
    */
  Backbone.sync = function(method, model, options) {
    var token = window.localStorage.getItem('token');
    /** TODO: remove this check */
    if(!token) {
      token = "Blii blaa";
    }

    options.headers = {
      'X-ACCESS-TOKEN': token
    }
    console.log("Sync is done with token " + token);
    _sync(method, model, options);
  }

});
