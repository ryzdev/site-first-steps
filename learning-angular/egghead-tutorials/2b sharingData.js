var myApp = angular.module('myApp', []);

myApp.factory('MyService', function() {
    return {myMessage: "data from a Service shared between controllers"}
})

function FirstCtrl($scope, MyService){
  $scope.thisData = MyService;
}

function SecondCtrl($scope, MyService){
  $scope.thisData = MyService;
}