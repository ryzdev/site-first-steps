var app = angular.module("anApp", []);

app.controller("anAppController", function($scope) {
    $scope.controllerObject = "directive binding to controllerObject"
})

app.directive("cheese", function() {
    return {
        scope: {
            thing: "="
        },
        template: '<input type="text" style="width:300px" ng-model="thing">'
    }
})