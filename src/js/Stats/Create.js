define(
	[
		'Module/Objects',
		'Module/Assets'
	],
	function(objects, Assets){
		'use strict';

		var o = objects.get();
		var Create = function(){			
			this.game = o.Game;
			this.platforms = o.Platforms;

			Create.prototype.init.call(this);
		};

		Create.prototype.init = function(){
			//render Background
			this.background = new Assets.BackGround();
			this.background.render();

			this.platforms = this.game.add.group();

			var ground = this.platforms.create(0,this.game.world.height - 64, 'ground');
			ground.scale.setTo(2, 2);

			ground.body.immovable = true;

			var ledge = this.platforms.create(400,400,'ground');
			ledge.body.immovable = true;

			ledge = this.platforms.create(-150,250,'ground');
			ledge.body.immovable = true;

			this.player = new Assets.Player();
			this.player.render();

			o.Platforms = this.platforms;

			o.Stars = this.game.add.group();

		    //  Here we'll create 12 of them evenly spaced apart
		    for (var i = 0; i < 12; i++)
		    {
		        //  Create a star inside of the 'stars' group
		        var star = o.Stars.create(i * 70, 0, 'star');

		        //  Let gravity do its thing
		        star.body.gravity.y = 6;

		        //  This just gives each star a slightly random bounce value
		        star.body.bounce.y = 0.7 + Math.random() * 0.2;
		    }

		};

		return Create;
	}
);