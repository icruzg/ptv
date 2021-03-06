
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
            app.controller('micontroller',function($scope,ModalService){
              $scope.NoOrden =generaNoOrden();   
              
              $scope.getNoOrden=function(){
                  $scope.NoOrden =generaNoOrden();   
              }
              $scope.datosTortas=[
               // { 'id':'1' ,'producto':'Milanesa', 'precio': 24.00},
                //{ 'id':'2' ,'producto':'Milanesa Pollo', 'precio': 27.00},
              ];
               $scope.ElementoVenta=[];
             llenarDatosBD();
                $scope.subtotal="0.00";
                $scope.addRow = function(idT,productoT,precioT,complementosT){    
                $scope.datosTortas.push({'id':idT ,'producto':productoT, 'precio': precioT,'complementos':complementosT});
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

             function llenarDatosBD(){
                 // llenar en la base de datos
                $scope.ElementoVenta.push(  {'id':'1','Nombre':'Milanesa Pollo','precio':'27.00','complementos':1});                              
                $scope.ElementoVenta.push(  {'id':'2','Nombre':'Milanesa','precio':'24.00','complementos':1});
                $scope.ElementoVenta.push(  {'id':'3','Nombre':'Carne Enchilada','precio':'24.00','complementos':1});
                $scope.ElementoVenta.push( {'id':'4','Nombre':'Salchicha','precio':'17.00','complementos':1});
                $scope.ElementoVenta.push( {'id':'5','Nombre':'Jamón','precio':'17.00','complementos':1});
                 $scope.ElementoVenta.push( {'id':'6','Nombre':'Queso de Puerco','precio':'17.00','complementos':1});
                  $scope.ElementoVenta.push( {'id':'7','Nombre':'Cubana','precio':'38.00','complementos':1});
                  $scope.ElementoVenta.push( {'id':'8','Nombre':'Cuernito','precio':'17.00','complementos':0});
               
              }
              //--- Funcion para modal 
             $scope.mostrarModal = function(id, nombre, precio) {
               //console.log(precio);
            // Debes proveer un controlador y una plantilla.  [{'id':id,'nombre':nombre,'precio':precio}]
               
               
                ModalService.showModal({
                  templateUrl: '../view/ventanaModal.php?torta='+nombre+'&precio='+ precio+'&id='+id,//'<div class="overlay"/><div class="modal"><h1>'+ nombre+ '</h1> <select ng-model="result"> <option value="0" selected >Selecciona Extra</option> <option value="1">Quesillo</option><option value="2">Jamón</option> <option value="3"> Queso de Puerco</option><option value="4">Otros</option></select> <button ng-click="cerrarModal()">Cerrar</button></div>',
                  controller: "ContrladorModal"
                }).then(function(modal) {
                  modal.close.then(function(result) {
                    // Una vez que el modal sea cerrado, la libreria invoca esta función
                    // y en result tienes el resultado.
                    $scope.resultadoModal = result;
                  });
                });
              //<input type="text" ng-model="result">
              };
              //------
            });  // < --- fin controller app 

      // controlador para pantalla modal 
      app.controller('ContrladorModal', function($scope, close) {
        $scope.result = "Esta es la respuesta";
        $scope.cerrarModal = function() {
          close($scope.result);
        };
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