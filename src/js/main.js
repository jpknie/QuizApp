require.config({
    paths: {
        'jquery'    :   'vendor/jquery/dist/jquery.min',
        'ratchet'   :   'vendor/ratchet.min',
        'backbone'  :   'vendor/backbone/backbone',
        'underscore':   'vendor/underscore/underscore',
        'hammerjs'  :   'vendor/jquery-hammerjs/jquery.hammer-full.min',
        'velocity'  :   'vendor/velocity/jquery.velocity.min',
        'velocityui':   'vendor/velocity/velocity.ui',
        'text'      :   'vendor/requirejs-text/text',
        'd3'        :   'vendor/d3/d3.min',
        'iscroll'   :   'vendor/iscroll/build/iscroll',
        'md5'       :   'libs/md5',
        'app'       :   'app',
        'libs'      :   'libs'
    },
    shim: {
        'ratchet': ['jquery'],
        'velocity': ['jquery'],
        'velocityui': ['velocity'],
        'iscroll': {
            exports: 'IScroll'
        }
    }
});

require([
    'app/router',
    'velocity',
    'velocityui',
    'libs/delegate-events'
    ], function(Router) {

        var appRouter = new Router();
        Backbone.history.start();
    });
