var app = angular.module("revisionApp", []);

app.controller("ShowHideController", function($scope) {
    $scope.hideValue1 = true;
    $scope.hideValue2 = true;
    $scope.hideValue3 = true;
    $scope.hideValue4 = true;
    $scope.hideValue5 = true;
    $scope.hideValue6 = true;
    $scope.hideValue7 = true;
    $scope.hideValue8 = true;
    $scope.hideValue9 = true;
    $scope.hideValue10 = true;
    $scope.hideValue11 = true;
    $scope.hideValue12 = true;
    $scope.hideValue13 = true;
    $scope.hideValue14 = true;

    $scope.allDisappear = function(){
        $scope.hideValue1 = true;
        $scope.hideValue2 = true;
        $scope.hideValue3 = true;
        $scope.hideValue4 = true;
        $scope.hideValue5 = true;
        $scope.hideValue6 = true;
        $scope.hideValue7 = true;
        $scope.hideValue8 = true;
        $scope.hideValue9 = true;
        $scope.hideValue10 = true;
        $scope.hideValue11 = true;
        $scope.hideValue12 = true;
        $scope.hideValue13 = true;
        $scope.hideValue14 = true;
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
        $scope.disappear();
        })
    }
})

function HelloWorldCtrl($scope){
    $scope.data = {message: "Hello"};
}

app.controller("EvaluateExpressionController", function($scope) {
    $scope.giveMeaningOfLife = function(){
        return 21*2;
    }
})

app.factory('MyService', function() {
    return {myMessage: "data from a Service shared between controllers"} //"Data from a service ?bindable between scopes"
})

function FirstCtrl($scope, MyService){
  $scope.thisData = MyService;
}

function SecondCtrl($scope, MyService){
  $scope.thisData = MyService;
}

app.filter('reverse', function() {
    return function(text) {
      return text.split("").reverse().join("");
  }
})

function FilterCtrl($scope){
  $scope.data = {message: "Random Message"};
}

app.factory('Avengers', function() {
    var Avengers = {};
    Avengers.cast = [
      {
        name: "Robert Downey Jr.",
        character: "Tony Stark / Iron Man"
      },
      {
        name: "Chris Evans",
        character: "Steve Rogers / Captain America"
      },
      {
        name: "Mark Ruffalo",
        character: "Bruce Banner / The Hulk"
      },
      {
        name: "Chris Hemsworth",
        character: "Thor"
      },
      {
        name: "Scarlett Johansson",
        character: "Natasha Romanoff / Black Widow"
      },
      {
        name: "Jeremy Renner",
        character: "Clint Barton / Hawkeye"
      },
      {
        name: "Tom Hiddleston",
        character: "Loki"
      },
      {
        name: "Clark Gregg",
        character: "Agent Phil Coulson"
      },
      {
        name: "Cobie Smulders",
        character: "Agent Maria Hill"
      },
      {
        name: "Stellan Skarsgard",
        character: "Selvig"
      },
      {
        name: "Samuel L. Jackson",
        character: "Nick Fury"
      },
      {
        name: "Gwyneth Paltrow",
        character: "Pepper Potts"
      },
      {
        name: "Paul Bettany",
        character: "Jarvis (voice)"
      },
      {
        name: "Alexis Denisof",
        character: "The Other"
      },
      {
        name: "Tina Benko",
        character: "NASA Scientist"
      }
    ];
    return Avengers;
})

function AvengersCtrl($scope, Avengers) {
    $scope.avengers = Avengers;
}

app.directive("superman", function() {
    return {
        restrict: "E",
        template: "<div style='border-style:inset;'>Here I am to save the day!</div>"
    }
})

app.directive("wonderwoman", function() {
    return {
        restrict: "A",
        template: "<div style='border-style:inset;'>Here I am to save the day!</div>"
    }
})

app.directive("heMan", function() {
    return {
        restrict: "C",
        template: "<div style='border-style:inset;'>Here I am to save the day!</div>"
    }
})

app.controller("thisCtrl", function($scope) {
    $scope.alertMessage = function() {
        alert("TA DAH!!!");
    }
})

app.directive("leave", function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function() {
            document.getElementById("changeID").innerHTML="Alakazam!!";
        })
    }
})

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

app.controller("ThisAppCtrl", function($scope) {
    $scope.ctrlFlavour = "blackberry"
})

app.directive("drink", function() {
    return {
        scope: {
            flavour: "@"
        },
        template: '<div>{{flavour}} drink</div>'
    }
})

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
