define([
	'phaser',
	'Module/Objects',
	'Module/Stats',
	],
	function(Phaser, objects, Stats){
		'use strict';

		var Bootsrap = function(){
			this.init();
		};

		var game = objects.get();
		Bootsrap.prototype.init = function(){
			//initialization of the app
			game.Game = new Phaser.Game(800,600,Phaser.AUTO,'',{preload:Stats.Preload, create:Stats.Create, update:Stats.Update});
			setTimeout(function(){
				game.Game.stage.scale.startFullScreen();
			},500);
			
		};


	return Bootsrap;
});