function todoController($scope) {

    $scope.todos = [];

    $scope.returnTotalTodos = function () {
        console.log ('returnTotalTodos executes');
        return $scope.todos.length;
    }

    $scope.addNewTodo = function () {
        console.log ('addNewTodo executes');
        if ($scope.newTodoText.length){
            $scope.todos.push ( {todoItem: $scope.newTodoText , done: false});
            $scope.newTodoText = '';
        }
    }

    $scope.clearFinishedTodos = function () {
        console.log ('clearFinishedTodos executes');
        $scope.todos = [];
    }

}