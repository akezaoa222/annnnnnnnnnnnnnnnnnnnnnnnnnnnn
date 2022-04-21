/*Simple Effect*/
if ( jQuery('.dp-tilt-column').length > 0 ){
	VanillaTilt.init(document.querySelectorAll(".dp-tilt-column"), {
			max: 25,
			speed: 400
	});
}
/*Parallax Effect*/
if ( jQuery('.dp-tilt-column-parallex').length > 0 ){
	VanillaTilt.init(document.querySelectorAll(".dp-tilt-column-parallex"), {
			max: 35,
			speed: 200,
			perspective: 1000,   
			scale:1.1 
	});
}
/*Glare Effect*/
if ( jQuery('.dp-tilt-column-glare').length > 0 ){
	VanillaTilt.init(document.querySelectorAll(".dp-tilt-column-glare"), {
			glare:  true, 
			"max-glare":1,
			speed: 400,
			max: 20,
			scale:1.1, 
			perspective:  500,
			easing:  "cubic-bezier(.03,.98,.52,.99)"
	});
}