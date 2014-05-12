 function TodoCtrl($scope) {
    $scope.todos = [
    {task:'do something', detail:'do a thing'},
    {task:'do something else', detail:'do another thing'}];
    
    $scope.addNewTask = function() {
        $scope.todos.push ({task:$scope.newTask});
        $scope.newTask = '';
    };
        
    
}