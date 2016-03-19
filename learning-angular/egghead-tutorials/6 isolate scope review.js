var app = angular.module("phoneApp", []);

app.controller("phoneAppCtrl", function($scope) {
    $scope.leaveVoicemail = function(number, message) {
        if(!isNaN(message)){
            alert("Number: " + number + " dialed: " + message)
        } else {
            document.getElementById(number).innerHTML="invalid entry";
        }
    }
})

app.directive("phone", function() {
    return {
        restrict: "E",
        scope: {
            number: "@",
            network: "=",
            makeCall: "&"
        },
        template:           '<ul style="list-style:none;">'+
                              '<li>Number: {{number}}</li>'+
                              '<li>Network:<select ng-model="network" ng-options="net for net in networks"></li>'+
                              '<li><input type="text" ng-model="value" >'+
                                    '<span style="color:#FF0000;font-family:monospace" id="{{number}}"></span></li>'+
                              '<li><button ng-click="makeCall({number: number, message: value})">Call!</button></li>'+
                              '<br>'+
                            '</ul>',

        link: function(scope) {
            scope.networks = ["o2", "EE", "Vodaphone"];
            scope.network = scope.networks[0]
        }
    }
})

