var app= angular.module("appventa", ["ngRoute"]);
app.config(function($routeProvider){
	$routeProvider
		.when("/",{
			templateURL: "/ptv/view/index.php"

		})
		.when("/tortas",{
			templateURL: "../ptv/view/ptvtortas.php"
			             
		})
});