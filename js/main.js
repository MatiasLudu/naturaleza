$(document).ready(function(){

	//Slider

	if(window.location.href.indexOf('index') > -1){
		$('.galeria').bxSlider({
	    	mode: 'fade',
	    	captions: true,
	    	slideWidth: 1200,
	    	responsive: true
		});	
	}
	

	//Post
	if(window.location.href.indexOf('index') > -1){
		var posts = [
			{
				title: 'Animales en peligro de extinción',
				date: 'Publicado el día: ' + moment().format("dddd D [de] MMMM [de] YYYY, h:mm a"),
				content: 'En el planeta existen más de 7,7 millones de especies de animales y más del 20% está en peligro de extinción. Algunos de los animales más extraños de nuestro planeta caminan en la cuerda floja de la extinción. El fotógrafo Tim Flach ha pasado más de dos años inmortalizando en fotografías algunos de ellos, los más emblemáticos, curiosos y llamativos.'
			},
			{
				title: 'Los científicos vaticinan un futuro desolador para el planeta',
				date: 'Publicado el día: ' + moment().format("dddd D [de] MMMM [de] YYYY, h:mm a"),
				content: '"Estamos caminando hacia un futuro espantoso". Esta es la advertencia emitida por un equipo de expertos tras el análisis de más 150 estudios sobre las cuestiones ambientales actuales más acuciantes. "Hoy, la supervivencia de todas las especies, incluida la nuestra, está amenazada", apuntan.'
			},
			{
				title: 'Un retrato de la Tierra dentro de 500 años',
				date: 'Publicado el día: ' + moment().format("dddd D [de] MMMM [de] YYYY, h:mm a"),
				content: 'Que la Tierra persista dentro de 500 años con sus vibrantes bosques, océanos, campos y ciudades dependerá de si los humanos estamos dispuestos a cambiar sus comportamientos desde la actualidad.'
			},
			{
				title: 'Ahogados en un mar de plástico',
				date: 'Publicado el día: ' + moment().format("dddd D [de] MMMM [de] YYYY, h:mm a"),
				content: 'Cada año acaban en el océano unos ocho millones de toneladas de plástico, un material que puede tardar siglos, o más, en desaparecer. ¿Podemos seguir disfrutando de este invento sin destruir el planeta?'
			},
			{
				title: 'Las ballenas jorobadas aprenden canciones unas de otras',
				date: 'Publicado el día: ' + moment().format("dddd D [de] MMMM [de] YYYY, h:mm a"),
				content: 'Un grupo de científicos dirigido por la Universidad de Queensland, en Australia, ha descubierto que las ballenas jorobadas pueden aprender canciones muy complejas de ballenas de otras regiones. La transmisión cultural se produciría en las rutas migratorias o en las zonas de alimentación compartidas.'
			},
		];


		posts.forEach((item, index) => {
			var post = `
				<article class="post">
					<h2>${item.title}</h2>
					<span class="date">${item.date}</span>
					<p>
						${item.content}
					</p>
					<a href="#" class="button-more">Leer más</a>	
				</article>
			`;

			$("#posts").append(post);
		});
	}

	//Selector de tema

	var tema_elegido = "css/green.css";
	if (localStorage.getItem("tema") == null){
		tema_elegido = "css/green.css";
	}else{
		tema_elegido = localStorage.getItem("tema");
	}
	
		$("#theme").attr("href", tema_elegido);

		var theme = $("#theme");
		$("#to-green").click(function(){
			theme.attr("href", "css/green.css");
			localStorage.setItem("tema", "css/green.css");
			tema_elegido = localStorage.getItem("tema");
		});
		$("#to-red").click(function(){
			theme.attr("href", "css/red.css");
			localStorage.setItem("tema", "css/red.css");
			tema_elegido = localStorage.getItem("tema");
		});
		$("#to-blue").click(function(){
			theme.attr("href", "css/blue.css");
			localStorage.setItem("tema", "css/blue.css");
			tema_elegido = localStorage.getItem("tema");
		});



	//Scroll arriba de la web
	$(".subir").click(function(e){

		e.preventDefault();

		$("html, body").animate({
			scrollTop: 0
		}, 500);

		return	false;
	});

	//Login falso

	$("#login form").submit(function(){
		var form_name = $("#form-name").val();

		localStorage.setItem("form_name", form_name);
	});

	var form_name = localStorage.getItem("form_name");

	if(form_name != null && form_name != "undefined"){
		var about_parrafo = $("#about p");
		about_parrafo.html("<br><strong>Bienvenido, "+form_name+".</strong>");
		about_parrafo.append("<a href='#' id='logout'>Cerrar Sesión</a>");

		$("#login").hide();

		$("#logout").click(function(){
			localStorage.clear();
			location.reload();
		});

	}

	//Acordeon
	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}
	
	//Reloj
	if(window.location.href.indexOf('reloj') > -1){
		
		setInterval(function(){
			var reloj = moment().format("hh:mm:ss a");
			$("#reloj").html(reloj);
		}, 1000);
	}

	//Validacion

	if(window.location.href.indexOf('contact') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd/mm/yy',
			changeMonth: true,
			yearRange: "1900:2020",
			changeYear: true
		});

		$.validate({
			lang: 'es'
		});
	}
});