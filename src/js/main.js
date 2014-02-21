/*global require*/
require.config({
hbs:{
    disableHelpers: true,
    disableI18n: true,
    templateExtension: 'html'
  },
  paths: {    
    underscore: '../components/underscore-amd/underscore',    
    json2: '../components/require-handlebars-plugin/hbs/json2',
    i18nprecompile: '../components/require-handlebars-plugin/hbs/i18nprecompile',
    phaser: '../components/phaser/phaser'
  },
  shim: {
  }
});

require(['app'], function(){});