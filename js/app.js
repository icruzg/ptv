var app = angular.module("milogin",[]);
app.controller("firstController",function($scope,$http){
	$scope.datos=[];
	$http.get('./model.php')
			.success(function(data){
				$scope.datos=eval(data);
				console.log(data);
			})
			.error(function(data){
				console.log(" Error: "+ data);	
			});
			$scope.addDatos=function(){
			$http.post('./model.php',{op:'append',nombre: $scope.nombre, password: $scope.password})
			.success(function(data){
				console.log('Error: '+ data);
			});
			$scope.nombre="";
			$scope.password="";
		}
});