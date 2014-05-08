function Object(x,y,width,height,speed){
	this.x = x;
	this.y = y;
	this.rel_x = x;
	this.rel_y = y;
	this.width = width;
	this.height = height;
	this.speed = speed || 5;

	// Mueve el objeto en la dirección "dir" una distancia "speed"
	this.move = function(dir,speed){
		old_rel_x = this.rel_x;
		old_rel_y = this.rel_y;
		old_x = this.x;
		old_y = this.y;

		if (speed == null){
			speed = this.speed;
		} else {
			speed = speed;
		}

	//	this.clear();

		switch (dir){
			case 'left':
				this.x = this.x - speed;
				this.rel_x = this.rel_x - speed;
			break;
			case 'right':
				this.x = this.x + speed;
				this.rel_x = this.rel_x + speed;
			break;
			case 'up':
				this.y = this.y - speed;
				this.rel_y = this.rel_y - speed;
			break;
			case 'down':
				this.y = this.y + speed;
				this.rel_y = this.rel_y + speed;
			break;
		}
		
		if (this.collision()){
			this.rel_x = old_rel_x;
			this.rel_y = old_rel_y;
			this.x = old_x;
			this.y = old_y;
		}
	//	this.draw();
	};


	// Función para forzar a mover a un objeto y recolocarlo en pantalla despues de un scroll de la misma
	this.scroll = function(dir,speed){
		switch (dir){
			case 'left':
				this.rel_x = this.rel_x + speed;
			break;
			case 'right':
				this.rel_x = this.rel_x - speed;
			break;
			case 'up':
				this.rel_y = this.rel_y + speed;
			break;
			case 'down':
				this.rel_y = this.rel_y - speed;
			break;
		}
	};

	// Dibuja el objeto
	this.draw = function(){
		background.fillRect(this.rel_x, this.rel_y, this.width, this.height);
	};


	// Comprueba si el objeto colisiona con otro objeto "o"
	this.collision_with = function(o){
		return (o!=this && 
			((o.x >= this.x && o.x < this.x+this.width) || ((o.x+o.width) > this.x && (o.x+o.width) < this.x+this.width)) && 
			((o.y >= this.y && o.y < this.y+this.height) || ((o.y+o.height) > this.y && (o.y+o.height) < this.y+this.height)));
	};

	// Comprueba si el objeto puede avanzar debido a la colisión con cualquier otro objeto o con el borde del mapa
	this.collision = function(){
		for (i=0; i<obj.length; i++){
			if (obj[i]!=this){
				if (this.collision_with(obj[i])){
					return true;
				}
			}
		}

		if (this.x < 0 || this.x > dsp.map.width-this.width || this.y < 0 || this.y > dsp.map.height-this.height){
			return true;
		}
	}


	obj.push(this);

}