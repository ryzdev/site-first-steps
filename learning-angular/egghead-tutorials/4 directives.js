var app = angular.module("superhero", []);

//returning a template to an element
app.directive("superman", function() {
    return {
        restrict: "A", // E - element, C - class, A - attribute, M - comment,
        template: "<div style='border-style:inset;'>Here I am to save the day!</div>"
    }
})

app.controller("twitterAppCtrl", function($scope) {

    $scope.loadMoreTweets = function() {
        alert("Loading tweets!");
    }

    $scope.deleteTweets = function() {
        alert("deleting tweets");
    }
})

//binding an element mouse-enter with a function, with the attribute defined in the html
app.directive("enter", function() {
    return function(scope, element, attrs) {
        element.bind("mouseenter", function() {
            console.log("I'm trapped inside!");
            scope.$apply(attrs.enter)
        })
    }
})

//binding an element mouse-leave with a function that logs to console
app.directive("leave", function() {
    return function(scope, element, attrs) {
        element.bind("mouseleave", function() {
            console.log("I'm leaving on a jet plane!");
        })
    }
})

//returning a function to an attribute
app.directive("flash", function(){
    return {
        restrict: "A",
        link: function(){
            alert('Using A for behavior. Flash flash!')
        }
    }
})

//isolate scope '&' expression
app.controller("ChoreCtrl", function($scope) {
    $scope.logChore = function(chore) {
        if(chore != null){
            alert(chore + " is done!");
        }
    }
})

app.directive("kid", function() {
    return {
        restrict: "E",
        scope: {
            done: "&"
        },
        template: '<input type="text" ng-model="chore">' +
          ' <button ng-click="done({message:chore})">I\'m done!</button>'
    }
})

//isolate scope '@' read as string
app.controller("DrinkAppCtrl", function($scope) {
    $scope.ctrlFlavour = "Martini"
})

app.directive("drink", function() {
    return {
        scope: {
            flavour: "@"
        },
        template: '<div>{{flavour}}</div>'
    }
})

//isolate scope '=' property to bind both ways
app.controller("AppCtrl", function($scope) {
    $scope.ctrlNewFlavor = "blackberry"
})

app.directive("anotherDrink", function() {
    return {
        scope: {
            newFlavour: "="
        },
        template: '<input type="text" ng-model="newFlavour">'
    }
})