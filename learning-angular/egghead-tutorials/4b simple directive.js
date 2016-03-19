var app = angular.module("superhero", []);

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