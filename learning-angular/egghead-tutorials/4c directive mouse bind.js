var app = angular.module("mouseBindApp", []);

app.controller("thisCtrl", function($scope) {
    $scope.alertMessage = function() {
        alert("TA DAH!!!");
    }
})

app.directive("enter", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            scope.$apply(attrs.enter)
        })
    }
})

app.directive("leave", function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function() {
            document.getElementById("changeID").innerHTML="Alakazam!!";
        })
    }
})