var app = angular.module("milogin",[]);
app.controller("firstController",function($scope,$http){
	$scope.datos=[];
	$http.get('./model/model_login.php')
			.success(function(data){
				//$scope.datos=eval(data);				
				console.log(data);
			})
			.error(function(data){
				console.log(" Error: "+ data);	
			});

			$scope.addDatos=function(){
			$http.post('./model/model_login.php',{op:'append',nombre: $scope.nombre, password: $scope.password})
				.success(function(data){				
					$scope.datos = eval(data);						
						console.log($scope.datos["_request"]['respuestaBD']);
					if($scope.datos["_request"]['respuestaBD']==1){
						$scope.mensage="Bienvenido";
						$scope.estiloCSS="msg ok";
					}
					else{
						$scope.estiloCSS="msg error";
						$scope.mensage="Usuario no registrado";

					}
					//console.log(' '+ $scope.datos);
				})
				.error(function(data){
					console.log('Error: '+ data);
				});
			$scope.nombre="";
			$scope.password="";
		}
});