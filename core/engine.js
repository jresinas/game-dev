var dsp;
var obj=[];
var background;

// Función que crea los elementos básicos del juego, llama a la declaración del usuario (game) e inicia la ejecucuón del juego (mainloop)
$(document).ready(function(){
	// Se declara el canvas
	game_canvas = $('#'+canvas_id)[0];
	background = game_canvas.getContext('2d');

	// Se crea el controlador de pantalla
	dsp = new Display(canvas_id);

	// Se carga la personalización del juego (declaraciones del programador)
	game();
	
	// Se inicia el juego
	mainloop();
});


window.requestAnimFrame = (function(){
	return window.requestAnimationFrame       ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame    ||
	
	function( callback ){
		window.setTimeout(callback, 1000 / 60);
	};
})();
    

function mainloop(){
	requestAnimFrame(mainloop);
	listen_keyboard();
	check_events();
	dsp.draw_game();
}






function get_all(type,func){
	$.each(type, function(index,element){
		eval('element.'+func);
	});
}


function check_events(){
	// scroll
	if (dsp.autoscroll!=null){
		dsp.update_scroll();
	}

}