var myApp = angular.module('myApp', []);

myApp.filter('reverse', function() {
    return function(text) {
      return text.split("").reverse().join("");
  }
})

function FilterCtrl($scope){
  $scope.data = {message: "Random Message"};
}