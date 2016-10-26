
  var app=angular.module('appventa',['ngRoute','angularModalService']);
  //angularModalService
    // http://es.stackoverflow.com/questions/3193/c%C3%B3mo-puedo-crear-un-di%C3%A1logo-modal-simple-en-angular-js
            app.config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{templateUrl:'../view/home.php'})
                .when('/tortas',{templateUrl:'../view/ptvtortas.php',
                    controller :'micontroller' 
                })
                .when('/printers',{templateUrl:'This is the printers Route'})
                .otherwise({redirectTo:'/'});
            }]);
            app.controller('micontroller',function($scope){
              $scope.NoOrden =generaNoOrden();   
              
              $scope.getNoOrden=function(){
                  $scope.NoOrden =generaNoOrden();   
              }
              $scope.datosTortas=[
               // { 'id':'1' ,'producto':'Milanesa', 'precio': 24.00},
                //{ 'id':'2' ,'producto':'Milanesa Pollo', 'precio': 27.00},
              ];
                $scope.subtotal="0.00";
              $scope.addRow = function(idT,productoT,precioT){    
                $scope.datosTortas.push({'id':idT ,'producto':productoT, 'precio': precioT});
                $scope.id='';
                $scope.producto='';
                $scope.precio='';
                $scope.subtotal= parseFloat($scope.subtotal) + parseFloat(precioT);
                $scope.subtotal=$scope.subtotal.toFixed(2);
              }; // fin agregar producto
              $scope.removeRow = function(id, precio){        
                var index = -1;   
                var comArr = eval( $scope.datosTortas );
                for( var i = 0; i < comArr.length; i++ ) {
                  if( comArr[i].id === id ) {
                    index = i;
                    $scope.subtotal= parseFloat($scope.subtotal) - parseFloat(precio);
                    $scope.subtotal=$scope.subtotal.toFixed(2);
                    break;
                  }
                }
                if( index === -1 ) {
                  alert( "Algo salio mal intentelo mas tarde!!!" );
                }
                $scope.datosTortas.splice( index, 1 );    
              }; // fin del row de tabla


              
            });
          
    // -------------------------------------------------------------------------------- Directiva para css activar Elemento del menu 
    app.directive('activeLink', ['$location', function (location) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        var clazz = attrs.activeLink;
        var path = attrs.href;
        path = path.substring(1); //hack because path does not return including hashbang
        scope.location = location;
        scope.$watch('location.path()', function (newPath) {
          if (path === newPath) {
            element.addClass(clazz);
          } else {
            element.removeClass(clazz);
          }
        });
      }
    }; }]);
    //-------------------------------------------------------------------------------------------------------------------------------
    //- --------------------- Funciones para generar numero de orden
    function generaNoOrden(){
      var fecha= new Date();
      var dia=fecha.getDate();
      var mes=fecha.getMonth();
      var anio = fecha.getFullYear();
       var h= fecha.getHours()+"" +fecha.getMinutes()+""+fecha.getSeconds(); 
      console.log(dia+""+mes+""+anio+""+ h);
      return dia+""+mes+""+anio+""+ h;
    }