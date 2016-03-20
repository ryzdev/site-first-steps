var firstApp = angular.module('firstApp', []);
firstApp.factory('MyService', function(){
return {name: "Madara"}
})

firstApp.filter('splitUp', function(MyService){
    return function(text){
        return text.split('');
    }
})

function MyController($scope, MyService){
$scope.data = MyService;
}

function MySecondController($scope, MyService){
$scope.person = MyService;

$scope.meaningOfLifeCalculator = function(thisNo){
    if(thisNo == null || isNaN(thisNo)){return "???"}
    if(thisNo == 42){return thisNo + " indeed, you found the meaning of life!"}
    return thisNo + "???";
}}