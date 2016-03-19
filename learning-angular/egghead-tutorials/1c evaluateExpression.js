var app = angular.module("evaluateExpression", []);

app.controller("EvaluateExpressionController", function($scope) {
    $scope.giveMeaningOfLife = function(){
        return 21*2;
    }
})