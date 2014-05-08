//Control de los evento de teclado
var Key = {
	_pressed: {},

	LEFT: 37,
	UP: 38,
	RIGHT: 39,
	DOWN: 40,
	A: 65,
	W: 87,
	D: 68,
	S: 83,
	ENTER: 13,
  
	isDown: function(keyCode) {
		return this._pressed[keyCode];
	},
  
	onKeydown: function(event) {
		this._pressed[event.keyCode] = true;
	},
  
	onKeyup: function(event) {
		delete this._pressed[event.keyCode];
	}
};

$(document).keyup(function(event) { Key.onKeyup(event); });
$(document).keydown(function(event) { Key.onKeydown(event); });


function listen_keyboard(){
	if (Key.isDown(Key.LEFT)){
		ply.move('left');
	}
	if (Key.isDown(Key.UP)){
		ply.move('up');
	}
	if (Key.isDown(Key.RIGHT)){
		ply.move('right');
	}
	if (Key.isDown(Key.DOWN)){
		ply.move('down');
	}
	if (Key.isDown(Key.A)){
		ply.move('left');
	}
	if (Key.isDown(Key.W)){
		ply.move('up');
	}
	if (Key.isDown(Key.D)){
		ply.move('right');
	}
	if (Key.isDown(Key.S)){
		ply.move('down');
	}
	if (Key.isDown(Key.ENTER)){
	}



}