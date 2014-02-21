define([
	'Module/Objects'
	],
	function(Objects){
		'use strict';

		var Update = function(){
			var o = Objects.get();

			var collectStar = function(player, star){
				star.kill();
			};

			o.Game.physics.collide(o.Player, o.Platforms);
			o.Game.physics.collide(o.Stars, o.Platforms);
			o.Game.physics.overlap(o.Player, o.Stars, collectStar, null, this);
		};


		return Update;
	}
);