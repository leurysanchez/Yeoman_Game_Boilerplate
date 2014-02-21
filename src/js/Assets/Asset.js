define(
	[],
	function(){

		(function(){
			var Wings = {};

			var Asset = Wings.Asset = function(){
				this.className = 'Asset';
			};

			Asset.prototype = {
                events:{
                    on:function(){
                    },
                    off: function(){
                    
                    }
                }
			};

			var Extend = Wings.Extend = _.extend;

			_.extend(Asset, Extend);

			return Wings;

		}());


		var Wings;

		var Events = Wings.Events = function(){

		};

		Events.prototype = {
			events:[
				'collapse',
				'render',
				'move',
				'hide',
				'show',
				'resize',
				'tap',
				'gesture',
				'multitap',
			],
			on:function(){

			},
			off:function(){

			},
			listenTo: function(){

			},
			stopListenTo: function(){

			},
			trigger: function(){

			}
		};

		var Asset = Wings.Asset = function(){

		};

		_.extend(Asset.prototype, Events,{
			name: null,
			position:{
				x:0,
				y:0
			},
			assetFile:'' ,

			//called on every frame update
			onupdate: function(){

			},
			initialize: function(){

			},
			render: function(){

			},
			destroy: function(){

			}
		});


		var Asset = function(){

		};

		var defaults = {
			name : 'none',
			x: 0,
			y: 0,
			assetName: '',
            leury: function(){
                alert('Achinga');    
            },
			isPreloaded: function(){
				//check if the asset was loaded or not
			}			
		};

		var render = function(){
			//default render behaivor
		};

		var loadAsset = function(){

		};

		Asset.prototype = {
			initialize: initialize,
			render: render
		};

	}
);