define(
	['Module/Objects'],
	function(objects){
		'use strict';

		console.log('Background ');

		var o = objects.get();
		var BackGround = function(){
			this.game = o.Game;
		};

		BackGround.prototype.render = function(){
			this.game.add.sprite(0,0,'sky');
		};

		return BackGround;
	}
);