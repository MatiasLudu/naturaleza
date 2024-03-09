$(document).ready(function(){

	

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
