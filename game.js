// Función escrita por el programador para inicializar los elementos del juego
// Tiene declarado el objecto Display (dsp)
function game(){
	// Establecemos las fases del juego
	stg1 = new Stage('map.png')
	
	dsp.set_screen_size(1024,800);
	dsp.set_stage(stg1);
	

	// Creamos los objetos del juego
	ply = new Object(50,50,20,20);

	//obj.push(o);
	new Object(240,50,20,20);
	//obj.push(o);

	new Object(280,50,20,20);
	new Object(220,150,20,20);


	// Activamos el scroll automático centrado en el jugador
	dsp.set_scroll(ply,200);



	console.log(stg1);
	console.log(dsp);
}