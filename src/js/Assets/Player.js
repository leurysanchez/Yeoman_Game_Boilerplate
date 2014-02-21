define([
	'Module/Objects'
	],
	function(Objects){
		'use strict';

		var o = Objects.get();
		var Player = function(){
			this.game = o.Game;
			this.player = o.Player;
		};

		Player.prototype.render = function(){
			this.player = this.game.add.sprite(32, this.game.world.height - 250, 'dude');

			//  Player physics properties. Give the little guy a slight bounce.
			//this.player.body.bounce.y = 0.2;
			this.player.body.gravity.y = 6;
			//this.player.body.collideWorldBounds = true;

			//  Our two animations, walking left and right.
			this.player.animations.add('left', [0, 1, 2, 3], 10, true);
			this.player.animations.add('right', [5, 6, 7, 8], 10, true);
			
			this.player.inputEnabled = true;	
			//  Allow dragging
			//  enableDrag parameters = (lockCenter, bringToTop, pixelPerfect, alphaThreshold, boundsRect, boundsSprite)
			this.player.input.enableDrag();
			
			//  Enable snapping. For the atari1 sprite it will snap as its dragged around and on release.
			//  The snap is set to every 32x32 pixels.
			this.player.input.enableSnap(32, 32, true, true);

			o.Player = this.player;
		};

		Player.prototype.up = function(){

		};

		return Player;
});