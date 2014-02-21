/*global define */
define(function (require) {
  'use strict';

  var App = (function() {

    // constructor
    function App() {

      // context ref
      var _this = this;

      // init configurations

      //bootstrap
      new this.Bootstrap();
    }

    // My Awesome App VERSION
    App.prototype.VERSION = '0.0.0';    

    // underscore
    App.prototype._ = require('underscore');    

    //Bootstrap
    App.prototype.Bootstrap = require('Bootstrap');   

    // return App
    return App;

  })();


  return (new App());
});