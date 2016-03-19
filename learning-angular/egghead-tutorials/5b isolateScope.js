var app = angular.module("isolateScopes", []);

app.controller("brokenByIsolateScopes", function($scope) {
    $scope.someText="display this text please!";
})

app.directive("ownscope", function() {
    return {
        restrict: "E",
        scope: {},
        template:   '<input type="text" ng-model="someText">'+
                    '{{someText}}'+
                    '<br>'
    }
})

