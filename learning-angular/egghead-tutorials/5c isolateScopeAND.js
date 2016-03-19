var app = angular.module("phoneApp", []);

app.controller("AppCtrl", function($scope) {

    $scope.callSimpleMessage = function() {
        alert('Blah Blah Blah')
    }
    $scope.callThisMessage = function(message) {
            alert('Dialed home: "' + message + '"')
    }
})

app.directive("simplephone", function() {
    return {
        scope: {
            dial: "&"
        },
        template:   '<input type="text">' +
                    '<button ng-click="dial()">Call home!</button>'
    }
})

app.directive("phone", function() {
    return {
        scope: {
            dialer: "&"
        },
        template:   '<input type="text" ng-model="value">' +
                    '<button ng-click="dialer({message:value})">Call home!</button>'
    }
})


