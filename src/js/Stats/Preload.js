define(
	['Module/Objects'],
	function(objects){
		'use strict';
		
		console.log(objects.get());
		var o = objects.get();
		var Preload = function(){
			o.Game.load.image('sky', 'assets/sky.png');
			o.Game.load.image('ground', 'assets/platform.png');
			o.Game.load.image('star', 'assets/star.png');
			o.Game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
		};

		return Preload;
	}
);