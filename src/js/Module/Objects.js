define(function(){

	var objects = {
		Game: null,
		Platforms: null,
		Player: null,
		Stars: null
	};

	return {
		get: function(){
			return objects;
		},
		getGame: function(){
			return objects.Game;
		},
		getPlayer: function(){
			return objects.Player;
		},
		getPlatforms: function(){
			return objects.Platforms;
		}
	};

});