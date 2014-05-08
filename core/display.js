var DEFAULT_WIDTH = 1024;
var DEFAULT_HEIGHT = 800;

function Display(canvas_id){
	this.id = canvas_id;
	this.map = new Image();
	this.width = DEFAULT_WIDTH;
	this.height = DEFAULT_HEIGHT;

	// Establece tamaño de la ventana de juego
	this.set_screen_size = function(width,height){
		this.width = width;
		this.height = height;
	}

	// Establece la fase del juego
	this.set_stage = function(stg){
		if (stg instanceof Stage){
			this.map.src = stg.image;
			this.x = stg.x;
			this.y = stg.y;
			this.autoscroll = stg.autoscroll;
			this.autoscroll_margin = stg.autoscroll_margin;

			$('#'+this.id).attr('width',this.width);
			$('#'+this.id).attr('height',this.height);
		}
	}

	// Mueve el scroll manualmente en la distancia indicada
	this.scroll = function(dir,speed){
		switch (dir){
			case 'left':
				space = Math.min(speed,this.x);
				this.x = this.x - space;
				//obj.rel_x = obj.rel_x + speed;
			break;
			case 'right':
				space = Math.min(speed,this.map.width-(this.x+this.width))
				this.x = this.x + space;
				//obj.rel_x = obj.rel_x - speed;
			break;
			case 'up':
				space = Math.min(speed,this.y);
				this.y = this.y - space;
				//obj.rel_y = obj.rel_y + speed;
			break;
			case 'down':
				space = Math.min(speed,this.map.height-(this.y+this.height))
				this.y = this.y + space;
				//obj.rel_y = obj.rel_y - speed;
			break;
		}

		get_all(obj,'scroll("'+dir+'",'+space+')');
	};


	// Establece el scroll automático al objeto "o", dejando un margen de "margin" al moverse la pantalla
	this.set_scroll = function(o,margin){
		if (o instanceof Object){ //(obj.constructor.name=='Object'){
			this.autoscroll = o;
			this.autoscroll_margin = margin;
		}
	};


	// Actualiza el scroll en función del objeto establecido en set_scroll
	this.update_scroll = function(){
		if (this.autoscroll.rel_x <= this.autoscroll_margin){
			this.scroll('left',this.autoscroll.speed);
		}
		if (this.autoscroll.rel_y <= this.autoscroll_margin){
			this.scroll('up',this.autoscroll.speed);
		}
		if (this.width-this.autoscroll.rel_x <= this.autoscroll_margin){
			this.scroll('right',this.autoscroll.speed);
		}
		if (this.height-this.autoscroll.rel_y <= this.autoscroll_margin){
			this.scroll('down',this.autoscroll.speed);
		}
	
	};

	// Dibuja la pantalla de juego
	this.draw_game = function(){	
		background.clearRect(0,0,this.width,this.height);

		background.drawImage(this.map,this.x,this.y,this.map.width,this.map.height,0,0,this.map.width,this.map.height);
//		obj.draw();
		get_all(obj,'draw()');
	};
}