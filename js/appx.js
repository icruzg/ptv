
  var app=angular.module('appventa',['ngRoute'])
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