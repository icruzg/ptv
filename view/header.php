<!DOCTYPE html>
<html >
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" href="../img/favicon.ico">
	<title>Punto de Venta</title>
	<link rel="stylesheet" type="text/css" href="../css/normalize.css">
	<link rel="stylesheet" type="text/css" href="../css/miestilo.css">
	<link rel="stylesheet" type="text/css" href="../css/hover-min.css">
	<script type="text/javascript" src="../js/angular.min.js"></script>
	<script type="text/javascript" src="../js/angular-route.min.js"></script>
	<script type="text/javascript" src="../js/appx.js"></script>
	<script type="text/javascript" src="../js/angular-modalservice.js"></script>
	
</head>
<body ng-app="appventa">

<nav ng-controller="micontroller">
	<ul id="navegacion"  class="menu"  >
		<li><a href="#/"  active-link="active" >Home</a></li>			
		<li><a href="#/tortas" active-link="active">Tortas</a></li>
		<li><a href="#" active-link="active">Consumibles</a></li>
		<li><a href="#" active-link="active">Recargas</a></li>		
		<li><a href="#" active-link="active">Catalogos</a></li>
		<li style="float:right;" class="avatar-frame" ><img src="../img/logo.png">
			<ul class="submenu">
				<li><a href="#">Nombre Usuario</a></li>
				<li><a href="#">Puesto: Encargado </a></li>
				<li><a href="#">Cerrar Sesión</a></li>
			</ul>
		</li>
			
	</ul>
</nav>