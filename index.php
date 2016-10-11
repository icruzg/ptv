<!DOCTYPE html>
<html >
<head>
	<meta charset="utf-8">
	 <meta name="viewport" content="width=device-width, initial-scale=1">
	 <link rel="icon" href="img/favicon.ico">
	<title>Punto de Venta</title>
	<link rel="stylesheet" type="text/css" href="css/normalize.css">
	<link rel="stylesheet" type="text/css" href="css/miestilo.css">
	<script type="text/javascript" src="js/angular.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
</head>
<body ng-app="milogin" >
	<section id="login"  ng-controller="firstController">
		<p id="titulo">Punto de Venta <span> Tortiplus</span> </p>
		<div class="bloque-form" >
			
			<div class="bloque-label">
				<label class="label_form" for="nombre">Usuario</label>
			</div>
			<div class="bloque-input">
				<input  type="text" class="text" name="nombre" id="nombre" placeholder="Usuario" ng-model="nombre">
			</div>
		</div>
		<div class="bloque-form">
			<div class="bloque-label">
				<label class="label_form" for="password">Password</label>
			</div>
			<div class="bloque-input">
				<input  type="password"  class="text" name="password" id="password" placeholder="Password" ng-model="password">
			</div>
		</div>
		<div class="bloque-form">
			<div class="bloque-boton">				
				<a href="#" class="boton" ng-click="addDatos()">entrar</a>
			</div>
		</div>
		<article>
			<div class="{{estiloCSS}}">
				<p>{{ mensage }}</p>
			</div>
		</article>
	</section>
	
	<footer>
		<div id="botonera_footer">
			<ul>
				<li><a href="#">Contactanos</a> |</li>
				<li><a href="#">Cambiar contraseña </a>|</li>
				<li><a href="#">Olvide mi contraseña</a></li>
			</ul>
		</div>

	</footer>
</body>
</html>