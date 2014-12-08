var app = angular.module('myApp',[]);

app.controller('diapo34',function($scope){
    $scope.el = {};
    $scope.heroe = {fuerte:'hulk',rapido:'quicksilver',invisible:'',overpowered:'ANGULARJS',elegido:'neo'};
    $scope.quienEs = function(elegido){
        if(confirm('You sure you want to know?')){
            $scope.el.elegido = '';
            alert($scope.heroe[elegido]);
        }
    };
    $scope.$watch(
      function(scope){
          return $scope.el.elegido;
      },
      function(newVal, oldVal, scope){
          console.log(newVal);
      }
    )
});
app.controller('diapo58',['$scope',function($scope){
    $scope.heroe = {nombre:'tony stark'};
    $scope.llamarHeroe = function(){
        console.log('Llamando ' + $scope.heroe.nombre);
    };
}]);

app.directive('avengerDiapo55',function(){
    return {
        restrict:'E',
        template:'<input type="text" ng-model="heroe.nombre">' +
            '{{heroe.nombre}}'
    }
});
app.directive('avengerDiapo56',function(){
    return {
        restrict:'E',
        scope:{},
        template:'<input type="text" ng-model="heroe.nombre">' +
            '{{heroe.nombre}}'
    }
});
app.directive('avengerDiapo58',function(){
    return {
        restrict:'E',
        scope:{estatico:'@',funcion:'&',objeto:'='},
        link:function(scope,elem,attrs){
            scope.funcion();
            scope.estatico = 'justin bieber';
            scope.funcion();
            scope.objeto.nombre = 'loki';
            scope.funcion();
        }
    }
});

app.directive('thor', function(){
    return {
        restrict: "E",
        require:"mjolnir",
        template:'<img class="no-border" src="img/thor.jpg">',
        link: function(scope, element, attrs, mjolnirDirectiva){
            element.bind('click',function(){
                mjolnirDirectiva.attack();
            })
        }
    };
});
app.directive('mjolnir', function(){
    return {
        restrict: "A",
        controller: function($scope, $element, $attrs){
            $scope.attackType = "Hammer Throw";
            this.attack = function(){
                alert($scope.attackType);
            }
        }
    };
});