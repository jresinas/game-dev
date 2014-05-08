function Stage(image,init_x,init_y,scroll){
	this.image = image_url+image;
	this.x = init_x || 0;
	this.y = init_y || 0;

	this.autoscroll = null;
	this.autoscroll_margin = 0;
}